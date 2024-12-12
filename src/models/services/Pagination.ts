import { IPaginationService } from "@models/interfaces/service/IPagination";
import { injectable } from "tsyringe";

@injectable()
export class PaginationService implements IPaginationService {

    validatePageAndLimit(page: string, limit: string): void {
        const [pageNumber, limitNumber] = [Number(page), Number(limit)];

        if(this.numberInvalid(pageNumber)) throw new Error("Invalid page number");
        if(this.numberInvalid(limitNumber)) throw new Error("Invalid limit number");
    }

    private numberInvalid(number: number): boolean {
        return isNaN(number) || number < 1;
    }
}