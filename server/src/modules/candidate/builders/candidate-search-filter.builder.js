const {
    PROVINCE_NEW, 
    PROVINCE_OLD, 
    PROVINCE_ALIASES,
} = require('../../../constants/province.constants');

const {SOURCE_CHANNELS} = require('../../../constants/source-channel.constants');

const {normalizeText,} = require('../../../utils/normalizeText');

const {escapeRegex,} = require('../../../utils/escape-regex');

function matchesKeyword({
    keyword,
    values = [],
}){
    return values.some((value) => {
        const normalizedValue = normalizeText(value);
        return (
            normalizedValue === keyword ||
            normalizedValue.includes(keyword) ||
            keyword.includes(normalizedValue)
        );
    });
}

function findProvinceCodes(
    provinces = [],
    normalizedKeyword
){
    return provinces
        .filter((province) => {
            const aliases = PROVINCE_ALIASES[province.code] ?? [];
            return matchesKeyword({
                keyword: normalizedKeyword,
                values: [
                    province.name,
                    province.code,
                    ...aliases,
                ],
            });
        })
        .map((province) => province.code);
}

function findSourceChannelCodes(
    normalizedKeyword
){
    return SOURCE_CHANNELS
        .filter((channel) => {
            return matchesKeyword({
                keyword: normalizedKeyword,
                values: [
                    channel.code,
                    ...channel.labels,
                ],
            });
        })
        .map((channel)=> channel.code);
}

function detectBatchCode(keyword =''){
    const normalizedBatchCode = String(keyword)
        .trim()
        .toUpperCase();

    const isBatchCode = /^[A-Z]{1,5}\d{1,10}$/.test(normalizedBatchCode);
    return isBatchCode
        ? normalizedBatchCode
        : null;
}

function buildCandidateSearchFilter(
    search = ''
){
    const normalizedKeyword = normalizeText(search);
    const keyWordTokens = normalizedKeyword
        .split(/\s+/)
        .filter(Boolean);
    
    if (!normalizedKeyword){
        return {
            isDeleted: false,
        };
    }

    const safeKeyword = escapeRegex(normalizedKeyword);
    const newProvinceCodes = findProvinceCodes(
        PROVINCE_NEW,
        normalizedKeyword
    );
    const oldProvinceCodes = findProvinceCodes(
        PROVINCE_OLD,
        normalizedKeyword
    );
    const sourceChannelCodes = findSourceChannelCodes(normalizedKeyword);
    const batchCode = detectBatchCode(search);
    const orConditions = [
        {
            'info.normalizedFullName': {
                $regex: `^${safeKeyword}`,
            },
        },
    ];

    if (newProvinceCodes.length>0){
        orConditions.push({
            'contact.newHomeTown': {
                $in: newProvinceCodes,
            },
        });
    }

    const allProvinceCodes = [
        ...new Set([
            ...newProvinceCodes,
            ...oldProvinceCodes,
        ]),
    ];

    if (allProvinceCodes.length>0){
        orConditions.push({
            'contact.newHomeTown':{
                $in: allProvinceCodes,
            },
        });

        orConditions.push({
            'contact.oldHomeTown': {
                $in: allProvinceCodes,
            },
        });
    }

    if (sourceChannelCodes.length > 0){
        orConditions.push({
            sourceChannel: {
                $in: sourceChannelCodes,
            },
        });
    }

    if (batchCode){
        orConditions.push({
            'result.batchCode': batchCode,
        });
    }

    if(keyWordTokens){
        orConditions.push({
            'info.searchTokens': {
                $all: keyWordTokens,
            },
        })
    }
    return {
        isDeleted: false,
        $or: orConditions,
    };
}

module.exports = {
    buildCandidateSearchFilter,
    findProvinceCodes,
    findSourceChannelCodes,
    detectBatchCode,
};