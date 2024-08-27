class Permission {
    private static permissions: Permission[] = [];

    constructor(
        private readonly id: string,
        private name: string,
        private description: string,
        private status: boolean = false,
        private lastUpdate: Date = new Date()
    ) {
        Permission.permissions.push(this);
    }
   

    getId(): string {
        return this.id;
    }

    setName(name: string): void {
        this.name = name;
    }

    getName(): string {
        return this.name;
    }

    setDescription(description: string): void {
        this.description = description;
    }

    getDescription(): string {
        return this.description;
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
