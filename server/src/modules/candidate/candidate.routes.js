const express = require('express');

const candidateController = require('./candidate.controller');

const router = express.Router();

router.get('/', candidateController.getCandidates);
router.post('/', candidateController.createCandidate);
router.get('/:id', candidateController.getCandidateById);
router.delete('/:id', candidateController.deleteCandidate);


module.exports = router;