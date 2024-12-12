export interface IMapper<Entity, Response> {
    toResponse(entity: Entity): Response;
    toResponseList(entities: Entity[]): Response[];
}