import { Entity, OneToMany } from 'typeorm';
import Employee from './Employee';
import Store from './Store';
import { DocumentType } from './DocumentType';

@Entity("managers")
class Manager extends Employee {

  @OneToMany(() => Store, store => store.getManagers())
  private stores: Store[] = [];

  constructor(
    personalIdType: DocumentType,
    personalId: string,
    name: string,
    lastName: string,
    age: number,
    email: string,
    role: string,
    department: string,
    salary: number,
    birthDate: Date
  ) {
    super(personalIdType, personalId, name, lastName, age,  email,  role, department, salary, birthDate);
  }
    
    
    setStore(stores: Store): void {
        this.stores.push(stores);
    }
    
    getStores(): Store[] {
        return this.stores;
    }
}

export default Manager;