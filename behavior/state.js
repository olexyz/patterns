class Light{
    constructor(light){
        this.light = light
    }
}
class RedLight extends Light {
    constructor(light){
        super('red')
    }
    sign(){
        return 'СТОП'
    }
}
class YellowLight extends Light {
    constructor(light){
        super('yellow')
    }
    sign(){
        return 'ГОТОВЬСЯ'
    }
}
class GreenLight extends Light {
    constructor(light){
        super('green')
    }
    sign(){
        return 'ЕДЬ'
    }
}
class TrafficLight{
    constructor() {
        this.state = [
            new GreenLight(),
            new YellowLight(),
            new RedLight()
        ]
        this.current = this.state[0]
    }
    change(){
        const total = this.state.length
        let index = this.state.findIndex(light=>light===this.current)
        if(index+1 < total){
            this.current = this.state[index+1]
        }
        else{
            this.current = this.state[0]
        }
    }
    sign(){
        return this.current.sign()
    }
}

const traffic = new TrafficLight()
console.log(traffic.sign())
traffic.change()
console.log(traffic.sign())
traffic.change()
console.log(traffic.sign())
traffic.change()