

class Server{

    constructor(ip, port){
        this.ip = ip
        this.port = port
    }

    get url(){
        return `https://${this.ip}:${this.port}`
    }
}


function aws(server){
    server.isAWS = true
    server.type = function(){
        return 'aws server'
    }
    server.awsInfo = function(){
        return server.url
    }

    return server
}

function azure(server){
    server.isAZURE = true
    server.port += 500
    server.type = function(){
        return 'azure server'
    }
    return server
}


const server_1 = aws(new Server('12.34.56.78', 8080))
console.log(server_1.isAWS)
console.log(server_1.type())
console.log(server_1.awsInfo())


const server_2 = azure(new Server('98.76.54.32', 1000))
console.log(server_2.isAZURE)
console.log(server_2.type())
console.log(server_2.url)