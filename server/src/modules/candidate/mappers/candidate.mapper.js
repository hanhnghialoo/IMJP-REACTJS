function mapCandidate(candidate) {
    if (!candidate) {
        return null;
    }

    const {
        _id,
        __v,
        ...candidateData
    } = candidate;

    return {
        id: _id.toString(),
        ...candidateData,
    };
}

function mapCandidates(candidates = []) {
    return candidates.map(mapCandidate);
}

module.exports = {
    mapCandidate,
    mapCandidates,
};