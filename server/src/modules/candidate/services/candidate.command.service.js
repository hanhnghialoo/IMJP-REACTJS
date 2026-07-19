const mongoose = require('mongoose');
const {normalizeText} = require('../../../utils/normalizeText')

const candidateWriteRepository = require('../repositories/candidate.write.repository');


const {
    validateCreateCandidate,
    sanitizeCreateCandidate
} = require('../validators/candidate-create.validator');

const {
    mapCandidate,
} = require('../mappers/candidate.mapper');

async function createCandidate(
    payload = {
        ...candidateData,
        normalizedFullName: normalizeText(candidateData.info.fullName),
    }
){
    validateCreateCandidate(payload);

    const candidateData = sanitizeCreateCandidate(payload)

    const candidate = await candidateWriteRepository
        .createCandidate(candidateData);

    return mapCandidate(candidate);
}

async function softDeleteCandidateById(id){
    if (!mongoose.Types.ObjectId.isValid(id)){
        const error = new Error('Candidate ID is invalid');
        error.statusCode = 400;
        throw error;
    }
    const candidate = await candidateWriteRepository
        .softDeleteCandidateById(id);

    if(!candidate) {
        const error = new Error(
            'Candidate not found'
        );
        error.statusCode = 404;
        throw error;
    }
    return mapCandidate(candidate);
}

module.exports = {
    createCandidate,
    softDeleteCandidateById,
};