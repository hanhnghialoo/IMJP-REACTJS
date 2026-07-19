const Candidate = require('../candidate.model');

async function createCandidate(candidateData){
    const candidate = await Candidate.create(
        candidateData   
    );

    return candidate.toObject();
}

async function updateCandidateById(
    _id,
    updateData,
){
    return Candidate.findOneAndUpdate(
        {
            _id,
            isDeleted: false,
        },
        updateData,
        {
            new: true,
            runValidators: true,
        }
    ).lean();
}

async function softDeleteCandidateById(_id) {
    return Candidate.findOneAndUpdate(
        {
            _id,
            isDeleted: false,
        },
        {
            isDeleted: true,
            deletedAt: new Date(),
        },
        {
            new: true,
            runValidators: true,
        }
    ).lean();
}

module.exports = {
    createCandidate,
    updateCandidateById,
    softDeleteCandidateById,
}