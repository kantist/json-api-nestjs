import { EntityMetadata } from 'typeorm';
import { RequestResourceData, ValidationError } from '../../../types';
export declare function checkResourceRelationsType(resourceData: RequestResourceData, entityMetadata: EntityMetadata, isDataRequired?: boolean): Promise<ValidationError[]>;
