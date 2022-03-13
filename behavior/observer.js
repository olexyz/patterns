class Subject{
    constructor() {
        this.observers = []
    }

    subscribe(observer){
        this.observers.push(observer)
    }

    unsubscribe(observer){
        this.observer = this.observers.filter(obs => obs!==observer)
    }
    fire(action){
        this.observers.forEach(observer=>observer.update(action))
    }
}

class Observer{
    constructor(state = 1) {
        this.state = state
        this.initialState = state
    }
    update(action) {
        switch(action.type){
            case 'INCREMENT':
                this.state = ++this.state
                break;
            case 'DECREMENT':
                this.state = --this.state
                break
            case 'ADD':
                this.state += action.playload;
                break;
            default: this.state = this.initialState
        }
    }
}
const strem$ = new Subject()
const obs1 = new Observer();
const obs2 = new Observer(42)
strem$.subscribe(obs1)
strem$.subscribe(obs2)
strem$.fire({type:'INCREMENT'})
strem$.fire({type:'INCREMENT'})
strem$.fire({type:'DECREMENT'})
strem$.fire({type:'ADD', playload: 10})
console.log(obs1.state)
console.log(obs2.state)