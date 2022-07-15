import { EntityMetadata } from 'typeorm';
import { ValidationError, QueryParams } from '../../../types';
export declare function checkQuerySortParam(queryParams: QueryParams, entityMetadata: EntityMetadata): Promise<ValidationError[]>;
