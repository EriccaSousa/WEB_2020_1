const DisciplinaModel = require('../models/DisciplinaModel');

class DisciplinaService {

    static register(req, res) {
        DisciplinaModel.create(req.body)
            .then(
                (disciplina) => {
                    res.status(201).json(disciplina);
                }
            )
            .catch(
                (error) => {
                    res.status(500).json(error);
                }
            )
    }

    static list(req, res) {
        DisciplinaModel.find()
            .then(
                (disciplinas) => {
                    res.status(201).json(disciplinas);
                }
            )
            .catch(
                (error) => {
                    res.status(500).json(error);
                }
            )
    }
}

module.exports = DisciplinaService;