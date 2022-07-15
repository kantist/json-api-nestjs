import { DynamicModule, OnModuleInit } from '@nestjs/common';
import { HttpAdapterHost, ModuleRef } from '@nestjs/core';
import { ModuleOptions } from './types';
export declare class JsonApiModule implements OnModuleInit {
    protected moduleRef: ModuleRef;
    protected adapterHost: HttpAdapterHost;
    private static connectionName;
    constructor(moduleRef: ModuleRef, adapterHost: HttpAdapterHost);
    onModuleInit(): void;
    static forRoot(options: ModuleOptions): DynamicModule;
}
