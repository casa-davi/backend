export interface IPaginationService {
    validatePageAndLimit(page: string, limit: string): void;
}