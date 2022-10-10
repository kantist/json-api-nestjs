import { EntityClassOrSchema } from '@nestjs/typeorm/dist/interfaces/entity-class-or-schema.type';
import { Type } from '@nestjs/common/interfaces/type.interface';
import { NestInterceptor, PipeTransform } from '@nestjs/common';
import { Repository } from 'typeorm';
import { JsonApiController, JsonApiTransform, JsonApiService, SwaggerConfig } from '.';
export declare type PipeFabric = (entity: Entity, connectionName?: string) => PipeTransformMixin;
export declare type PipeTransformMixin = Type<PipeTransform>;
export declare type InterceptorMixin = Type<NestInterceptor>;
export declare type RepositoryMixin = Repository<Entity>;
export declare type ControllerMixin = Type<JsonApiController>;
export declare type ServiceMixin = Type<JsonApiService>;
export declare type TransformMixin = Type<JsonApiTransform>;
export declare type NestController = Type<any>;
export declare type NestProvider = Type<any>;
export declare type NestImport = Type<any>;
export declare type ProviderMixin = Type<any>;
export declare type Entity = EntityClassOrSchema;
export interface ModuleOptions {
    globalPrefix: string;
    controllers?: NestController[];
    imports?: NestImport[];
    entities: Entity[];
    swagger?: SwaggerConfig;
    providers?: NestProvider[];
    connectionName?: string;
    tenantId?: string;
}
export interface ModuleConfig {
    globalPrefix: string;
}
