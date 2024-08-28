import { Repository } from 'typeorm';
import Employee from '../models/Employee';

class EmployeeRepository extends Repository<Employee> {

    async findByName(name: string): Promise<Employee | null> {
        const employees = await this.find();
        return employees.find(employee => employee.getName() === name) || null;
    }
}

export default EmployeeRepository;
