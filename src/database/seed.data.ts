import {EntryStatus} from "@/interfaces";

interface SeedData{
    entries:SeedEntry[];
}
interface SeedEntry{
    description: string;
    createdAt: number;
    status: string;
}
export const seedData: SeedData = {
    entries : [
        {
            description: "testing en el log",
            status: "pending",
            createdAt: Date.now()
        }, {
            description: "testing en el log in probress",
            status: "in-progress",
            createdAt: Date.now() - 1000222
        }, {
            description: "testing en el log terminada",
            status: "finished",
            createdAt: Date.now() - 12333233
        }
    ]
}
