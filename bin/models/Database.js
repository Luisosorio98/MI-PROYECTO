var mongoose = require("mongoose");
class Database {
    constructor() { }

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
}
exports.batabase = new Database();