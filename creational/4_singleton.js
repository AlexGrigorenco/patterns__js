

class Database{

    constructor(data){
        if(Database.exists){
            return Database.instance
        }

        Database.instance = this
        Database.exists = true
        this.data = data
    }

    getData(){
        console.log(this.data)
    }
}

const mongo = new Database('MongoDB')
mongo.getData()

const sql = new Database('SQL')
sql.getData()