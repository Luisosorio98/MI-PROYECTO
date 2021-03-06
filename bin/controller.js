const mongoose = require("mongoose");
const User = require("./models/User");
const Actividad = require("./models/Actividad");


class controller {
    constructor() {
        this.connect();
    }
    async connect() {

        try {
            await mongoose.connect(
                "mongodb+srv://luisosorio98:luis2019@cluster0-0mtsj.mongodb.net/Ortografia?retryWrites=true&w=majority",
                { useNewUrlParser: true }
            );
            console.log('conectados a la base de datos!')
        } catch (e) {
            console.error(e)
        }
    }
    getUsers(res) {
        User.find({}, (err, users) => {
            if (err) throw err;
            res.send(users);
        })
    }


    getactividades(res) {
        Actividad.find({}, (err, actividades) => {
            if (err) throw err;
            res.send(actividades);
        })
    }


    postUsers(req, res) {
        let user = req.boddy;

        User.create(user, (err, newUser) => {
            if (err) throw err;
            res.send({ nU: newUser })
        })
    }


    postActividad(req, res) {
        //let user = req.boddy.users;
        let actividad = { nombre: 'Des', propiedades: 'doc' }
        Actividad.create(actividad, (err, newUser) => {
            if (err) throw err;
            res.send({ nU: newUser })
        })
    }

}

exports.controller = new controller()