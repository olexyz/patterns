class Server{
    constructor(ip,port) {
        this.ip = ip;
        this.port = port;
    }
    get url(){
        return 'https://'+this.ip+':'+this.port;
    }
}
function aws(Server){
    Server.isAws = true;
    Server.awsInfo = function (){
        return Server.url;
    }
    return Server;
}
function azure(serv){
    serv.isAzure = true;
    serv.port += 500;
    return serv;
}
const s1 = aws(new Server('72.1.14.45',7000));
console.log(s1.isAws);
console.log(s1.url);
const s2 = azure(new Server('72.1.14.45',7000));
console.log(s2.isAzure);
console.log(s2.port);