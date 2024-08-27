export interface IPhone {
    id: number;
    number: string;
    code: string;
    isPrimary: boolean;
}

class Phone implements IPhone {
    constructor(
        public readonly id: number,
        public number: string,
        public code: string,
        public isPrimary: boolean
    ) {}
    
  
    
    getId(): number {
        return this.id;
    }
    
    setNumber(number: string): void {
        this.number = number;
    }
    
    getNumber(): string {
        return this.number;
    }
    
    setCode(code: string): void {
        this.code = code;
    }
    
    getCode(): string {
        return this.code;
    }
    
    setIsPrimary(isPrimary: boolean): void {
        this.isPrimary = isPrimary;
    }
    
    getIsPrimary(): boolean {
        return this.isPrimary;
    }
    
    toString(): string {
        return `${this.code} ${this.number}`;
    }

}

export default Phone;