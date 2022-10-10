/**
 * @license
 * Copyright Kant Yazılım A.Ş. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://clara.ist/license
 */

import { Entity, PipeMixin } from '../../types';

export declare function querySchemaMixin(entity: Entity, connectionName: string): PipeMixin;
export declare function queryTransformMixin(entity: Entity, connectionName: string): PipeMixin;
export declare function queryTransformSchemaMixin(entity: Entity, connectionName: string): PipeMixin;
export declare function queryFiledInIncludeMixin(entity: Entity, connectionName: string): PipeMixin;
export declare function bodyInputPostMixin(entity: Entity, connectionName: string): PipeMixin;
export declare function bodyInputPatchPipeMixin(entity: Entity, connectionName: string): PipeMixin;
export declare function parseRelationshipNameMixin(entity: Entity, connectionName: string): PipeMixin;
export declare function bodyRelationshipPipeMixin(): PipeMixin;
export declare function bodyRelationshipPatchPipeMixin(): PipeMixin;
