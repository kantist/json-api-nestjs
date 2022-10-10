/**
 * @license
 * Copyright Kant Yazılım A.Ş. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://clara.ist/license
 */

import { IPods } from '.';

export declare type IRequests = Requests;
export declare class Requests {
	id: number;
	createdAt: Date;
	updatedAt: Date;
	podLocks: IPods[];
}
