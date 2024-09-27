interface ISum {
    sum(a: number, b:number): number
}

interface ISub {
    sub(a: number, b:number): number
}

interface INaturalOperations extends ISub, ISum {}

abstract class MyNaturalMath implements INaturalOperations {

    protected a: number

    abstract isNatural(): boolean

    constructor(a: number) {
        this.a = a
    }


    sub(a: number, b: number): number {
        return a - b
    }

    sum(a: number, b: number): number {
        return a + b
    }

}

class MyMath extends MyNaturalMath {
    isNatural(): boolean {
        return this.a > 0
    }

    getA() {
        return this.a
    }

}

class MyRealMath extends MyMath {
    _b: number = 1
    constructor(a: number, b:number) {
        super(a)
        this._b = b
    }

    divide(x:number) {
        return {a: this.a / x, b: this._b / x}
    }
}

const math = new MyRealMath(1, 2);

console.log(math.getA())
console.log(math._b)
console.log(math.divide(4))