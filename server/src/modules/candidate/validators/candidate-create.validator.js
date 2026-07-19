const { normalizeText } = require("../../../utils/normalizeText");

const GENDER_VALUES = [
    'male',
    'female',
];
const ALLOWED_CREATE_FIELDS = [
    'fullName',
    'gender',
    'dateOfBirth',
    'phone',
    'newHomeTown',
    'oldHomeTown',
    'region',
];

function buildSearchTokens(fullName = ''){
    return normalizeText(fullName)
        .split(/\s+/) 
        .filter(Boolean);
}

function normalizePhone( phone = ''){
    return String(phone)
        .trim()
        .replace(/[\s.-]/g, '');
}
function normalizeString(value = ''){
    return String(value).trim();
}
function hasValue(value){
    return(
        value !== undefined &&
        value !== null &&
        String(value).trim() !== ''
    );
}

function validateUnknownFields(
    payload = {}
){
    const unknownFields = Object.keys(payload).filter(
        field => !ALLOWED_CREATE_FIELDS.includes(field)
    );
    if (unknownFields.length>0){
        const error = new Error(
            'Payload contains unsupported fields'
        );
        error.statusCode = 400;
        error.details = {
            unknownFields,
        };
        throw error;
    }
}

function validateCreateCandidate(
    payload={}
){
    validateUnknownFields(payload);

    const errors = {};
    const fullName = normalizeString(payload.fullName);

    if(!fullName){
        errors.fullName = 'Full name is required';
    } else if (fullName.length > 100) {
        errors.fullName = 'Full name must not exceed 100 characters'
    }

    if(hasValue(payload.gender) && !GENDER_VALUES.includes(payload.gender)){
        errors.gender = 'Gender must be male or female';
    }

    if(hasValue(payload.dateOfBirth)){
        const dateOfBirth= new Date(payload.dateOfBirth);

        if (Number.isNaN(dateOfBirth.getTime())){
            errors.dateOfBirth = 'Date of birth is invalid';
        } else if (
            dateOfBirth > new Date()
        ) {
            errors.dateOfBirth = 'Date of birth cannot be in the future';
        }
    }

    if(hasValue(payload.phone)){
        const phone = normalizePhone(payload.phone);

        if (!/^(0|\+84)[0-9]{9,10}$/.test(phone)){
            errors.phone = 'Phone number is invalid';
        }
    }

    if( hasValue(payload.newHomeTown) && typeof payload.newHomeTown !== 'string'){
        errors.newHomeTown = 'New home town must be a string';
    }

    if( hasValue(payload.oldHomeTown) && typeof payload.oldHomeTown !== 'string'){
        errors.oldHomeTown = 'Old home town must be a string';
    }

    if( hasValue(payload.region) && typeof payload.region !== 'string'){
        errors.region = 'Region must be a string';
    }

    if(Object.keys(errors).length > 0){
        const error = new Error(
            'Candidate data is invalid'
        );

        error.statusCode = 400;
        error.details = errors;
        throw error;
    }
}

function sanitizeCreateCandidate(
    payload = {}
){
    return {
        info: {
            fullName: normalizeString(payload.fullName),
            gender: hasValue(payload.gender)?payload.gender:null,
            dateOfBirth: hasValue(payload.dateOfBirth)?new Date(payload.dateOfBirth):null,
            normalizedFullName: normalizeText(payload.fullName),
            searchTokens: buildSearchTokens(payload.fullName)
        },
        contact: {
            phone: normalizePhone(payload.phone),
            newHomeTown: hasValue(payload.newHomeTown)?normalizeString(payload.newHomeTown):'',
            oldHomeTown: hasValue(payload.oldHomeTown)?normalizeString(payload.oldHomeTown):'',
            region: hasValue(payload.region)?normalizeString(payload.region):'',
        }
    }
}

module.exports = {
    ALLOWED_CREATE_FIELDS,
    normalizePhone,
    validateCreateCandidate,
    sanitizeCreateCandidate,
};