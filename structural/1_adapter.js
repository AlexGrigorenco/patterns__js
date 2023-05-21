

class OldCalc{

    operations(t1, t2, operation){

        switch (operation) {
            case 'add': return t1 + t2
            case 'sub': return t1 - t2
            default: NaN
        }

    }
}

class NewCalc{

    add(t1, t2){
        return t1 + t2
    }

    sub(t1, t2){
        return t1 - t2
    }
}


class CalcAdapter{

    constructor(){
        this.calc = new NewCalc()
    }

    operations(t1, t2, operation){

        switch (operation) {
            case 'add': return this.calc.add(t1, t2)
            case 'sub': return this.calc.sub(t1, t2)
            default: NaN
        }

    }
}

const oldCalc = new OldCalc()
console.log(oldCalc.operations(8, 7, 'add'), oldCalc.operations(8, 7, 'sub'))

const newCalc = new NewCalc()
console.log(newCalc.add(8, 7), newCalc.sub(8, 7))

const adapter = new CalcAdapter()
console.log(adapter.operations(8, 7, 'add'), adapter.operations(8, 7, 'sub'))