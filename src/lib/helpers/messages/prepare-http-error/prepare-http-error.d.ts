import { ExecutionContext, HttpException } from '@nestjs/common';
export declare function prepareHttpError(context: ExecutionContext, error: HttpException): HttpException;
