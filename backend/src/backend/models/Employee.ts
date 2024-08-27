import Address from "./Address";
import Person from "./Person";
import Permission from "./Permission";
import Phone from "./Phone";

class Employee extends Person {
    private hireDate: Date = new Date();

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
        private role: string,
        private department: string,
        private salary: number,
        private permissions: Permission = new Permission("1", "Default", "Default permission")
    ) {
        super(id, personId, personalIdType, name, lastName, age, phones, email, address);
    }
        
        setRole(role: string): void {
            this.role = role;
        }
        
        getRole(): string {
            return this.role;
        }
        
        setDepartment(department: string): void {
            this.department = department;
        }
        
        getDepartment(): string {
            return this.department;
        }
        
        setSalary(salary: number): void {
            this.salary = salary;
        }
        
        getSalary(): number {
            return this.salary;
        }
        
        setHireDate(hireDate: Date): void {
            this.hireDate = hireDate;
        }
        
        setPermissions(permissions: Permission): void {
            this.permissions = permissions;
        }
        
        getPermissions(): Permission {
            return this.permissions;
        }
        
        getInfo(): void {
            console.log(`Employee Info: ${this.id}, ${this.personId}, ${this.personalIdType}, ${this.name}, ${this.lastName}, ${this.age}, ${this.phones}, ${this.email}, ${this.address}, ${this.role}, ${this.department}, ${this.salary}, ${this.hireDate}, ${this.permissions}`);
        }
        
  
  
}

export default Employee;