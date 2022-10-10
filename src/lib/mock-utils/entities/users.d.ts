/**
 * @license
 * Copyright Kant Yazılım A.Ş. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://clara.ist/license
 */

import { Addresses, Comments, Roles } from '.';

export declare type IUsers = Users;
export declare class Users {
	id: number;
	login: string;
	firstName: string;
	lastName: string;
	isActive: boolean;
	createdAt: Date;
	testDate: Date;
	updatedAt: Date;
	addresses: Addresses;
	manager: Users;
	roles: Roles[];
	comments: Comments[];
}
