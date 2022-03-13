class User{
    constructor(name) {
        this.name = name;
        this.room = null;
    }
    send(message,to){
        this.room.send(message, this, to)
    }

    resive(message, from){
        console.log(from.name+'=>'+this.name+':'+message);
    }
}
class ChatRoom{
    constructor() {
        this.users = {}
    }

    register(user){
        this.users[user.name] = user
        user.room = this
    }
    send(message,from,to){
        if(to){
            to.resive(message,from)
        }
        else{
            Object.keys(this.users).forEach(key=>{
                if(this.users[key]!==from){
                    this.users[key].resive(message,from)
                }
            })
        }
    }
}
const  vlad = new User('Vladilen')
const  elena = new User('Elena')
const  olesya = new User('Olesya')

const room = new ChatRoom()

room.register(vlad)
room.register(elena)
room.register(olesya)

vlad.send('Hello', elena)
elena.send('Hello hello', vlad)
olesya.send('hi')