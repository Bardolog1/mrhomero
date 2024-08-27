import { PermissionTypes } from './PermissionTypes';
class Permission {
    

    constructor(
        private readonly permission : PermissionTypes,
        private status: boolean = false,
        private lastUpdate: Date = new Date()
    ) {
        
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
    
}

export default Permission;
