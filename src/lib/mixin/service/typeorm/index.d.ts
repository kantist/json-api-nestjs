/**
 * @license
 * Copyright Kant Yazılım A.Ş. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://clara.ist/license
 */

import { Entity as EntityClassOrSchema, NestProvider } from '../../../types';

export declare function typeormMixin<Entity extends EntityClassOrSchema>(entity: Entity, connectionName: string, transformService: NestProvider): NestProvider;
