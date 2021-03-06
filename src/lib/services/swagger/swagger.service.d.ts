import { EntityMetadata } from 'typeorm';
import { ReferenceObject, SwaggerConfig, OpenAPIObject, PathsObject, TagObject, CustomRouteObject } from '../../../index';
import { MethodName, Entity } from '../../types';
import { RequestMethod } from '@nestjs/common';
export declare class SwaggerService {
    protected static config: SwaggerConfig;
    protected static entities: Entity[];
    protected static paths: PathsObject;
    protected static tags: TagObject[];
    protected static resources: any;
    static customRoutes: any[];
    static addRouteConfig(entity: Entity, path: string, method: MethodName): void;
    static addResourceConfig(metadata: EntityMetadata): void;
    static preparePathParameters(entityName: string, method: MethodName): ReferenceObject[];
    static prepareQueryParameters(entityName: string, method: MethodName): ReferenceObject[];
    static prepareResponses(entityName: string, method: MethodName): Record<string, ReferenceObject>;
    static prepareRequest(entityName: string, method: MethodName): ReferenceObject;
    static prepareMethodName(method: MethodName): string;
    static preparePath(path: string): string;
    static prepareTag(entityName: string, method: MethodName): TagObject;
    static prepareDocument(): OpenAPIObject;
    static setConfig(config: SwaggerConfig): void;
    static getConfig(): SwaggerConfig;
    static addEntity(entity: Entity): void;
    static getEntities(): Entity[];
    static clear(): void;
    static addCustomRouteConfig(route: CustomRouteObject): void;
    static getMethodType(requestMethod: RequestMethod): string;
    static getSwaggerPath(entityName: string, path: string): string;
}
