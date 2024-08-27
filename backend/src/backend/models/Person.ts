import Address from "./Address";
import Phone from "./Phone";

abstract class Person {
    constructor(
        protected readonly id: string,
        protected personId: string,
        protected personalIdType: DocumentType,
        protected name: string,
        protected lastName: string,
        protected age: number,
        protected phones: Phone[],
        protected email: string,
        protected address: Address
    ) {}

  getId(): string {
    return this.id;
  }

  setPersonId(personId: string): void {
    this.personId = personId;
  }

  getPersonId(): string {
    return this.personId;
  }

  setName(name: string): void {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }

  setLastName(lastName: string): void {
    this.lastName = lastName;
  }

  getLastName(): string {
    return this.lastName;
  }

  setAge(age: number): void {
    this.age = age;
  }

  getAge(): number {
    return this.age;
  }

  setPhones(phone: Phone[]): void {
    this.phones = phone;
  }

  getPhones(): Phone[] {
    return this.phones;
  }

  setEmail(email: string): void {
    this.email = email;
  }

  getEmail(): string {
    return this.email;
  }

  setAddress(address: Address): void {
    this.address = address;
  }

  getAddress(): Address {
    return this.address;
  }

  abstract getInfo(): void;
}

export default Person;
