import { NestController, ModuleOptions, Entity } from '../../types';
export declare function moduleMixin(globalPrefix: ModuleOptions['globalPrefix'], controller: NestController, entity: Entity, connectionName: string): {
    controller: any;
    providers: (import("../../types").ServiceMixin | import("../../types").TransformMixin)[];
};
