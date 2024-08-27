import Address from "./Address";
import Employee from "./Employee";
import Phone from "./Phone";
import Store from "./Store";

class Manager extends Employee {
    private stores: Store[] = [];

    constructor(
        id: string,
        personId: string,
        personalIdType: DocumentType,
        name: string,
        lastName: string,
        age: number,
        phones: Phone[],
        email: string,
        address: Address,
        role: string,
        department: string,
        salary: number,
        private employees: Employee[] = []
    ) {
        super(id, personId, personalIdType, name, lastName, age, phones, email, address, role, department, salary);
    }
    
    
    setStore(stores: Store): void {
        this.stores.push(stores);
    }
    
    getStores(): Store[] {
        return this.stores;
    }
    
    setEmployee(employee: Employee): void {
        this.employees.push(employee);
    }
}

export default Manager;