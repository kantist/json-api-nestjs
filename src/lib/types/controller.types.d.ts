import { RequestRelationshipsData, RequestResourceData, JsonApiService, QueryParams } from '.';
export declare type controllerMethod = getOneMethod | getAllMethod | getDirectOneMethod | getDirectAllMethod | getRelationshipMethod | patchOneMethod | patchRelationshipMethod | postOneMethod | postRelationshipMethod | deleteOneMethod | deleteRelationshipMethod;
export declare type getOneMethod = (this: JsonApiController, id: string, params: QueryParams, ...rest: any[]) => Promise<any>;
export declare type getAllMethod = (this: JsonApiController, query: QueryParams, ...rest: any[]) => Promise<any>;
export declare type getDirectOneMethod = (this: JsonApiController, id: string, relName: string, relId: string, params: QueryParams, ...rest: any[]) => Promise<any>;
export declare type getDirectAllMethod = (this: JsonApiController, id: string, relName: string, params: QueryParams, ...rest: any[]) => Promise<any>;
export declare type getRelationshipMethod = (this: JsonApiController, id: string, relName: string, ...rest: any[]) => Promise<any>;
export declare type patchOneMethod = (this: JsonApiController, id: string, body: RequestResourceData, ...rest: any[]) => Promise<any>;
export declare type patchRelationshipMethod = (this: JsonApiController, id: string, relName: string, body: RequestRelationshipsData, ...rest: any[]) => Promise<void>;
export declare type postOneMethod = (this: JsonApiController, body: RequestResourceData, ...rest: any[]) => Promise<any>;
export declare type postRelationshipMethod = (this: JsonApiController, id: string, relName: string, body: RequestRelationshipsData, ...rest: any[]) => Promise<void>;
export declare type deleteOneMethod = (this: JsonApiController, id: string, ...rest: any[]) => Promise<void>;
export declare type deleteRelationshipMethod = (this: JsonApiController, id: string, relName: string, body: RequestRelationshipsData, ...rest: any[]) => Promise<void>;
export interface JsonApiController {
    serviceMixin?: JsonApiService;
    getOne?: getOneMethod;
    getAll?: getAllMethod;
    getDirectOne?: getDirectOneMethod;
    getDirectAll?: getDirectAllMethod;
    getRelationship?: getRelationshipMethod;
    patchOne?: patchOneMethod;
    patchRelationship?: patchRelationshipMethod;
    postOne?: postOneMethod;
    postRelationship?: postRelationshipMethod;
    deleteOne?: deleteOneMethod;
    deleteRelationship?: deleteRelationshipMethod;
}
