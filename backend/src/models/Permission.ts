import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { PermissionTypes, PermissionHelper } from "./PermissionTypes";
import Employee from "./Employee";

@Entity()
class Permission {

  @PrimaryGeneratedColumn("increment")
  private readonly id!: string;
  
  @Column()
  private readonly permission: PermissionTypes;
  
  @Column()
  private status: boolean;
  
  @Column()
  private lastUpdate: Date;
  
  @ManyToOne(() => Employee, employee => employee.getPermissions())
  private employee?: Employee | null;

  constructor(
    permission: PermissionTypes = PermissionTypes.ONLY_BASIC_ACCESS,
    status: boolean = false,
    lastUpdate: Date = new Date(),
  ) {
    this.permission = permission;
    this.status = status;
    this.lastUpdate = lastUpdate;

  }

  getId(): string {
    return this.id;
  }

  getPermission(): PermissionTypes {
    return this.permission;
  }

  setStatus(status: boolean): void {
    this.status = status;
  }

  getStatus(): boolean {
    return this.status;
  }

  setLastUpdate(lastUpdate: Date): void {
    this.lastUpdate = lastUpdate;
  }

  getLastUpdate(): Date {
    return this.lastUpdate;
  }

  getIdEnum(): string {
    return PermissionHelper.getId(this.permission);
  }
  
  setEmployee(employee: Employee): void {
    this.employee = employee;
  }
  
  getEmployee(): Employee | null {
    return this.employee? this.employee : null;
  }
}

export default Permission;
