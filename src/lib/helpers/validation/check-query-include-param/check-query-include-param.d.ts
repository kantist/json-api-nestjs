import { EntityMetadata } from 'typeorm';
import { ValidationError, QueryParams } from '../../../types';
export declare function checkQueryIncludeParam(queryParams: QueryParams, entityMetadata: EntityMetadata): Promise<ValidationError[]>;
