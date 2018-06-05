import { InMemoryDbService } from "angular-in-memory-web-api";
import { Employee } from "../employees/employee/employee"

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const MockEmployees: Employee[] = [
            { id: 11, name: 'Mr. Nice', contact:Math.random(), designation: "SSE" },
            { id: 12, name: 'Narco', contact:Math.random(), designation: "SSE" },
            { id: 13, name: 'Bombasto', contact:Math.random(), designation: "SSE" },
            { id: 14, name: 'Celeritas', contact:Math.random(), designation: "SSE" },
            { id: 15, name: 'Magneta', contact:Math.random(), designation: "SSE" },
            { id: 16, name: 'RubberMan' , contact:Math.random(), designation: "SSE"},
            { id: 17, name: 'Dynama', contact:Math.random(), designation: "SSE" },
            { id: 18, name: 'Dr IQ', contact:Math.random(), designation: "SSE" },
            { id: 19, name: 'Magma', contact:Math.random(), designation: "SSE" },
            { id: 20, name: 'Tornado', contact:Math.random(), designation: "SSE" }
          ];
        return { MockEmployees };
    }
}