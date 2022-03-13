class SimpleMembership{
    constructor(name){
        this.name = name;
        this.cost = 50;
    }
}
class StandartMembership{
    constructor(name){
        this.name = name;
        this.cost = 150;
    }
}
class PremiumMembership{
    constructor(name){
        this.name = name;
        this.cost = 500;
    }
}
class MamberFactory{
    static list = {
        simple: SimpleMembership,
        standart: StandartMembership,
        premium: PremiumMembership
    }
    create(name, type = 'simple'){
        const Membership = MamberFactory.list[type] || MamberFactory.list.simple;
        const member = new Membership(name);
        member.type = type;
        member.define = function(){
            console.log(this.name+' ('+this.type+'): '+this.cost);
        }
        return member;

    }
}

const factory = new  MamberFactory();
const members = [
    factory.create('Olesya', 'simple'),
    factory.create('Vasya', 'standart'),
    factory.create('Ksu', 'premium'),
    factory.create('Ivan'),
];
members.forEach(m=>{
    m.define();
});
console.log(members);
