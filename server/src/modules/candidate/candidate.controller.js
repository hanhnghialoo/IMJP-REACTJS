const candidateQueryService = require('./services/candidate.query.service');
const candidateCommandService = require('./services/candidate.command.service');

async function getCandidates(
    req,
    res,
    next
){
    try {
        const result = await candidateQueryService
            .getCandidates({
                page: req.query.page,
                pageSize: req.query.pageSize,
                search: req.query.search ?? '',
            }); 

        return res 
            .status(200)
            .json({
                data: result,
                success: true,
            });
    } catch (error){
        next(error);
    }
}

async function getCandidateById(
    req,
    res,
    next
){
    try {
        const candidate = await candidateQueryService.getCandidateById(req.params.id);
        if(!candidate){
            return res 
                .status(404)
                .json({
                    success: false,
                    message: 'Candidate not found',
                });
        }
        return res
            .status(200)
            .json(candidate);
    } catch(error){
        next(error);
    }
}

async function createCandidate(
    req,
    res,
    next
){
    try {
        const candidate = await candidateCommandService.createCandidate(req.body);
        return res
            .status(201)
            .json({
                success: true,
                candidate,
            });
    } catch(error){
        next(error);
    }
}

async function deleteCandidate(
    req,
    res,
    next
){
    try {
        const candidate = await candidateCommandService.softDeleteCandidateById(req.params.id);
        res.status(200).json({
            success: true,
            candidate,
        });
    } catch(error){
        next(error);
    }
}

module.exports = {
    getCandidates,
    getCandidateById,
    createCandidate,
    deleteCandidate
};