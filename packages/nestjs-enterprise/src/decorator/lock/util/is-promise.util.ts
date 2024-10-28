import { isDefined } from '@rnw-community/shared';

// TODO: Move to shared?
export const isPromise = (value: unknown): value is Function =>
    Boolean(
        (typeof value === 'object' || typeof value === 'function') &&
            isDefined(value) &&
            'then' in value &&
            typeof value.then === 'function'
    );