import { NestController, ModuleOptions, Entity } from '../../types';
export declare function moduleMixin(globalPrefix: ModuleOptions['globalPrefix'], controller: NestController, entity: Entity, connectionName: string, tenantId: ModuleOptions['tenantId']): {
    controller: any;
    providers: (import("@kantist/json-api-nestjs/src/lib/types/module.types").ServiceMixin | import("@kantist/json-api-nestjs/src/lib/types/module.types").TransformMixin)[];
};
