const Candidate = require('../candidate.model');

async function findCandidates({
    filter,
    skip,
    limit,
    sort,
}) {
    return Candidate
        .find(filter)
        .sort(sort)
        .skip(skip)
        .limit(limit)
        .lean();
}

async function countCandidates(
    filter = {}
){
    return Candidate.countDocuments(
        filter
    );
}

async function findCandidateById(_id){
    return Candidate
        .findOne({
            _id,
            isDeleted: false,
        })
        .lean();
}

module.exports = {
    findCandidates,
    countCandidates,
    findCandidateById
}