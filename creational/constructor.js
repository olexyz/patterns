function Server(name,ip){
    this.name = name;
    this.ip = ip;
}
Server.prototype.getUrl  = function (){
    return 'https://'+this.ip+':80'
}
class Server2{
    constructor(name,ip) {
        this.name = name;
        this.ip = ip;
    }
    getUrl(){
        return 'https://'+this.ip+':80'
    }
}
const aws = new Server('AWS','81.21.32.44');
console.log(aws.getUrl())