import { Pagination } from "@models/types/response/pagination";

export interface IData<Request,Response> {
    getAll(page:string, limit:string): Promise< Pagination<Response> >;
    getById(id: string): Promise<Response | null>;
    create(data: Request): Promise<Response>;
    update(data: Request, id: string): Promise<Response>
    delete(id: string): void;
    entityExist(id: string): Promise<void>;
}