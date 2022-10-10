/**
 * @license
 * Copyright Kant Yazılım A.Ş. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://clara.ist/license
 */

import { ServiceOptions } from '../../../../../types';
import { Meta, Relationship } from '../../../../../types-common';
import { TypeormMixinService } from '../../typeorm.mixin';

export declare function postRelationship<T>(this: TypeormMixinService<T>, options: ServiceOptions<T>): Promise<{
    meta?: Partial<Meta>;
} & Relationship<T>>;
