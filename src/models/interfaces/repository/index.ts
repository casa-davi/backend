import { Pagination } from "@models/types/response/pagination";

export interface IRepository<R, E>{
    getAll(page:number, limit: number): Promise< Pagination<E> >;
    getById(id: number): Promise<E | null>;
    create(request: R): Promise<E>;
    update(request: R, id: string): Promise<E>;
    delete(id: number): Promise<void>;
    entityExist(id: number): Promise<boolean>;
}