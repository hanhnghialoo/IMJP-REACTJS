const mongoose = require('mongoose');

const candidateReadRepository = require(
    '../repositories/candidate.read.repository');

const {
    mapCandidate,
    mapCandidates,
} = require('../mappers/candidate.mapper');
const { buildCandidateSearchFilter } = require('../builders/candidate-search-filter.builder');

async function getCandidates({
    page = 1,
    pageSize = 10,
    search ='',
} = {}){
    const parsedPage = Math.max(
        Number(page) || 1,
        1
    );

    const parsedPageSize = Math.min(
        Math.max(Number(pageSize) || 10,1),
        100
    );
    const skip = (parsedPage-1)*parsedPageSize;

    const filter = 
        buildCandidateSearchFilter(search);

    const [
        candidates,
        totalItem,
    ] = await Promise.all([
        candidateReadRepository
            .findCandidates({
                filter,
                skip,
                limit: parsedPageSize,
                sort: {createdAt: -1, _id: -1,},
            }),
        candidateReadRepository
            .countCandidates(filter),
    ]);

    const totalPage = Math.ceil(totalItem/parsedPageSize);

    return{
        candidates: mapCandidates(candidates),
        pagination: {
            page: parsedPage,
            pageSize: parsedPageSize,
            totalItem,
            totalPage,
            hasNextPage: parsedPage<totalPage,
            hasPreviousPage: parsedPage>1,
        },
        search: {
            keyword: search,
        },
    };
}

async function getCandidateById(id){
    if (!mongoose.isValidObjectId(id)){
        const error = new Error(
            'Candidate ID is invalid'
        );
        error.statusCode = 400;
        throw error;
    }

    const candidate = 
    await candidateReadRepository
    .findCandidateById(id);
    
    if (!candidate) {
        const error = new Error(
            'Candidate not found'
        );

        error.statusCode = 404;
        throw error;
    }

    return mapCandidate(candidate);
}

module.exports = {
    getCandidates,
    getCandidateById,
};