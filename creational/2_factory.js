

class SimpleMembership{

    constructor(name){
        this.name = name
        this.cost = 100
    }
}

class StandardMembership{

    constructor(name){
        this.name = name
        this.cost = 250
    }
}

class PremiumMembership{

    constructor(name){
        this.name = name
        this.cost = 500
    }
}

//!

class MemberFacrory{

    static list = {
        simple: SimpleMembership,
        standard: StandardMembership,
        premium: PremiumMembership,
    }

    create(name, type = 'simple'){

        const Membership = MemberFacrory.list[type] || MemberFacrory.list.simple
        const member = new Membership(name)

        member.type = type
        member.define = function(){
            console.log(`${this.name} (${this.type}): ${this.cost}`)
        }

        return member
    }
}

//!

const factory = new MemberFacrory

const members = [
    factory.create('Nick', 'simple'),
    factory.create('Jane', 'premium'),
    factory.create('Tom', 'standard'),
    factory.create('Joe', 'premium'),
    factory.create('Sam'),
]


console.log(members)
console.log('===================')

members.forEach(m => {
    m.define()
})

