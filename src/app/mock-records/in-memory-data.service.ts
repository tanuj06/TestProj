import { InMemoryDbService } from "angular-in-memory-web-api";
import { Employee } from "../employees/employee/employee"

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const MockEmployees: Employee[] = [
            { id: 1, name: 'Mr. Nice', contact:Math.random(), designation: "SSE" },
            { id: 2, name: 'Narco', contact:Math.random(), designation: "SSE" },
            { id: 3, name: 'Bombasto', contact:Math.random(), designation: "SSE" },
            { id: 4, name: 'Celeritas', contact:Math.random(), designation: "SSE" },
            { id: 5, name: 'Magneta', contact:Math.random(), designation: "SSE" },
            { id: 6, name: 'RubberMan' , contact:Math.random(), designation: "SSE"},
            { id: 7, name: 'Dynama', contact:Math.random(), designation: "SSE" },
            { id: 8, name: 'Dr IQ', contact:Math.random(), designation: "SSE" },
            { id: 9, name: 'Magma', contact:Math.random(), designation: "SSE" },
            { id: 10, name: 'Tornado', contact:Math.random(), designation: "SSE" }
          ];
        return { MockEmployees };
    }
}