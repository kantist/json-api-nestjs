import { EntityMetadata } from 'typeorm';
import { RequestResourceData, ValidationError } from '../../../types';
export declare function checkClassValidatorFields(resourceData: RequestResourceData, entityMetadata: EntityMetadata, isSkipUndefined?: boolean): Promise<ValidationError[]>;
