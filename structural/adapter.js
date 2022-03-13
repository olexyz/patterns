class OldCalc{
    operations(term1,term2,operation){
        switch (operation) {
            case 'add': return term1 + term2;
            case 'sub': return term1 - term2;
            default: return NaN;
        }

    }
}
class Calc{
    add(term1,term2){
        return term1 + term2;
    }
    sub(term1,term2){
        return term1 - term2;
    }
}
class CalcAdapter {
    constructor(){
        this.calc = new Calc();
    }
    operations(term1,term2,operation){
        switch (operation) {
            case 'add': return this.calc.add(term1,term2);
            case 'sub': return this.calc.sub(term1,term2)
            default: return NaN;
        }

    }
}
const oldcalc = new OldCalc();
console.log(oldcalc.operations(1,2,'add'));
const calc = new Calc();
console.log(calc.add(1,2));
const calcadapter = new CalcAdapter();
console.log(calcadapter.operations(1,2,'add'));