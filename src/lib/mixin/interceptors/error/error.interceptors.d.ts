/**
 * @license
 * Copyright Kant Yazılım A.Ş. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://clara.ist/license
 */

import { CallHandler, ExecutionContext, HttpException, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { ResourceObject } from '../../../types-common';

export declare enum PostgresErrors {
    OperatorDoesNotExist = "42883",
    InvalidTimestamp = "22007",
    InvalidType = "22P02",
    KeyConstraint = "23503",
    DuplicateKey = "23505",
    OutOfRange = "22003"
}
export declare class ErrorInterceptors<T> implements NestInterceptor {
	private readonly logger;
	intercept(context: ExecutionContext, next: CallHandler<ResourceObject<T>>): Observable<ResourceObject<T>>;
	prepareHttpError(context: ExecutionContext, error: HttpException): HttpException;
	preparePostgresError(context: ExecutionContext, error: any): HttpException;
}
