

class Complaints{

    constructor(){
        this.complaints = []
    }

    reply(complaint){}

    add(complaint){
        this.complaints.push(complaint)

        return this.reply(complaint)
    }
}

class ProductComplaints extends Complaints{

    reply({id, customer, details}){
        return `Product: ${id}: ${customer.toUpperCase()} (${details})`
    }
}

class ServiceComplaints extends Complaints{

    reply({id, customer, details}){
        return `Service: ${id}: ${customer.toUpperCase()} (${details})`
    }
}


class ComplaintRegistry{

    register(customer, type, details){

        const id = Date.now()

        let complaint

        if(type === 'service'){
            complaint = new ServiceComplaints()
        }

        if(type === 'product'){
            complaint = new ProductComplaints()
        }

        return complaint.add({id, customer, details})
    }
}


const registry = new ComplaintRegistry()

console.log(registry.register('Антон', 'service', 'недоступен'))
console.log(registry.register('Михаил', 'product', 'отсутствует'))