const Contract = require('../models/contract');

// Create a new contract
exports.createContract = async (req, res) => {
    try {
        const { jobId, terms } = req.body;
        const newContract = await Contract.create({
            jobId,
            employerId: req.user.id, // Assuming user ID is available in req.user
            terms
        });
        res.status(201).json(newContract);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all contracts for a job
exports.getContractsForJob = async (req, res) => {
    try {
        const contracts = await Contract.findAll({ where: { jobId: req.params.jobId } });
        res.status(200).json(contracts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update contract by ID
exports.updateContractById = async (req, res) => {
    try {
        const contract = await Contract.findByPk(req.params.id);
        if (contract) {
            contract.terms = req.body.terms || contract.terms;
            await contract.save();
            res.status(200).json(contract);
        } else {
            res.status(404).json({ message: 'Contract not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
// Get all contracts for a user
exports.getUserContracts = async (req, res) => {
    try {
        const contracts = await Contract.findAll({ where: { employerId: req.user.id } });
        res.status(200).json(contracts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get contract by ID
exports.getContractById = async (req, res) => {
    try {
        const contract = await Contract.findByPk(req.params.id);
        if (contract) {
            res.status(200).json(contract);
        } else {
            res.status(404).json({ message: 'Contract not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


// Delete contract by ID
exports.deleteContractById = async (req, res) => {
    try {
        const contract = await Contract.findByPk(req.params.id);
        if (contract) {
            await contract.destroy();
            res.status(200).json({ message: 'Contract deleted' });
        } else {
            res.status(404).json({ message: 'Contract not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
