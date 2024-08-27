import Address from "./Address";
import Person from "./Person";
import Permission from "./Permission";
import Phone from "./Phone";
import { PermissionTypes } from "./PermissionTypes";


class Employee extends Person {
    private hireDate: Date;
    private status: boolean = false;

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
        private permissions: Permission[] = [],
       
    ) {
        super(id, personId, personalIdType, name, lastName, age, phones, email, address);
        permissions.push(new Permission(PermissionTypes.ONLY_BASIC_ACCESS, true));
        this.status = true;
        this.hireDate = new Date();
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
        
        setPermission(permission: Permission): void {
            this.permissions.push(permission);
        }
        
        getPermissions(): Permission[] {
            return this.permissions;
        }
        
        getInfo(): void {
            console.log(`Employee Info: ${this.id}, ${this.personId}, ${this.personalIdType}, ${this.name}, ${this.lastName}, ${this.age}, ${this.phones}, ${this.email}, ${this.address}, ${this.role}, ${this.department}, ${this.salary}, ${this.hireDate}, ${this.permissions}`);
        }
        
  
  
}

export default Employee;