
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { DocumentType } from './DocumentType';

@Entity()
abstract class Person {
  
  @PrimaryGeneratedColumn("uuid")
  protected id!: string;

  @Column({ type: 'enum', enum: DocumentType })
  protected personalIdType: DocumentType;
  
  @Column()
  protected personalId: string;

  @Column()
  public name: string;

  @Column()
  protected lastName: string;

  @Column()
  protected age: number;

  @Column()
  protected email: string;

  @Column()
  protected birthDate: Date;
  
  @Column()
  protected createdAt: Date = new Date();

  constructor(
    
    personalIdType: DocumentType,
    personalId: string,
    name: string,
    lastName: string,
    age: number,
    email: string,
    birthDate: Date
  ) {
    this.personalIdType = personalIdType;
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
    this.birthDate = birthDate;
    this.personalId = personalId;
  }
  
  getId(): string {
    return this.id;
  }

  setPersonId(id: string): void {
    this.id = id;
  }

  getPersonId(): string {
    return this.id;
  }
  
  setPersonalIdType(personalIdType: DocumentType): void {
    this.personalIdType = personalIdType;
  }
  
  getPersonalIdType(): DocumentType {
    return this.personalIdType;
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

  setEmail(email: string): void {
    this.email = email;
  }

  getEmail(): string {
    return this.email;
  }
  
  setBirthDate(birthDate: Date): void {
    this.birthDate = birthDate;
  }
  
  getBirthDate(): Date {
    return this.birthDate;
  }
  
  getCreatedAt(): Date {
    return this.createdAt;
  }

  abstract getInfo(): void;
}

export default Person;
