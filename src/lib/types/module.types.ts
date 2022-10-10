/**
 * @license
 * Copyright Kant Yazılım A.Ş. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://clara.ist/license
 */


import { DynamicModule, PipeTransform } from '@nestjs/common';
import { Type } from '@nestjs/common/interfaces/type.interface';
import { EntityClassOrSchema } from '@nestjs/typeorm/dist/interfaces/entity-class-or-schema.type';

export type Entity = EntityClassOrSchema;
export type NestController = Type<any>;
export type NestProvider = Type<any>;
export type PipeMixin = Type<PipeTransform>;
export type PipeFabric = (entity: Entity, connectionName?: string) => PipeMixin;

export interface ConfigParam {
  requiredSelectField: boolean;
  debug: boolean;
  maxExecutionTime: number;
}

export interface ModuleOptions {
  entities: Entity[];
  controllers?: NestController[];
  connectionName?: string;
  providers?: NestProvider[];
  options?: Partial<ConfigParam>;
}

export interface BaseModuleOptions {
  entity: Entity;
  connectionName: string;
  controller?: NestController;
  config: ConfigParam;
}

export interface BaseModuleStaticClass {
  new (): any;
  forRoot(options: BaseModuleOptions): DynamicModule;
}
