const DisciplinaModel = require('../models/DisciplinaModel');

let disciplinas = [];
let id = 0;

class DisciplinaService {

    static register(data) {
        let disciplina = new DisciplinaModel(
            id++,
            data.nome,
            data.curso,
            data.capacidade);
        disciplinas.push(disciplina);
        return disciplina;
    }

    static list() {
        return disciplinas;
    }

    static update(id, data) {
        for (let disc of disciplinas) {
            if (disc.id == id) {
                disc.nome = data.nome
                disc.curso = data.curso
                disc.capacidade = data.capacidade
                return disc;
            }
        }
        return null;
    }

    static delete(id) {

        for (let i = 0; i < disciplinas.length; i++) {
            if (disciplinas[i].id == id) {
                disciplinas.splice(i, 1);
                return true;
            }
        }
        return false;
    }

    static retrieve(id) {

        for (let i = 0; i < disciplinas.length; i++) {
            if (disciplinas[i].id == id) {
                return disciplinas[i];
            }
        }
        return {};
    }
}

module.exports = DisciplinaService;