/**
 * @license
 * Copyright Kant Yazılım A.Ş. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://clara.ist/license
 */

import { IUsers } from '.';

export declare enum CommentKind {
    Comment = "COMMENT",
    Message = "MESSAGE",
    Note = "NOTE"
}
export declare class Comments {
	id: number;
	text: string;
	kind: CommentKind;
	createdAt: Date;
	updatedAt: Date;
	createdBy: IUsers;
}
