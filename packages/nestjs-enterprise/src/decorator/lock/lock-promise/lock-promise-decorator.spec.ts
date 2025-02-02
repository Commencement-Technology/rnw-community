import { beforeEach, describe, expect, it, jest } from '@jest/globals';
import Redis from 'ioredis';

import { LockableService } from '../service/lockable.service';

import { LockPromise } from './lock-promise.decorator';

const getRedisService = (): Redis => jest.fn() as unknown as Redis;
const mockRelease = jest.fn<() => Promise<boolean>>().mockResolvedValue(true);
const mockAcquire = jest
    .fn<() => Promise<{ release: () => Promise<boolean> }>>()
    .mockResolvedValue({ release: mockRelease });

jest.mock('redlock', () =>
    jest.fn().mockImplementation(() => ({
        acquire: mockAcquire,
        release: mockRelease,
    }))
);

class TestClass extends LockableService {
    readonly field = 1;

    constructor() {
        super(getRedisService());
    }

    @LockPromise(['test'], 1000)
    async testArray(): Promise<number> {
        return await Promise.resolve(this.field);
    }

    @LockPromise(id => ['test', String(id)], 1000)
    async testFunction(id: number): Promise<number[]> {
        return await Promise.resolve([this.field, id]);
    }

    @LockPromise(['test'], 1000)
    testSync(): number {
        return this.field;
    }

    @LockPromise([], 1000)
    testEmptyResource(): number {
        return this.field;
    }
}

// eslint-disable-next-line max-lines-per-function
describe('LockPromiseDecorator', () => {
    // eslint-disable-next-line jest/no-hooks
    beforeEach(() => void jest.clearAllMocks());

    it('should lock resource with key as array and duration', async () => {
        expect.assertions(3);

        const instance = new TestClass();

        await expect(instance.testArray()).resolves.toBe(1);
        expect(mockAcquire).toHaveBeenCalledWith([`test`], 1000);
        expect(mockRelease).toHaveBeenCalledWith();
    });

    it('should lock resource with key as function and duration', async () => {
        expect.assertions(3);

        const instance = new TestClass();

        await expect(instance.testFunction(1)).resolves.toStrictEqual([1, 1]);
        expect(mockAcquire).toHaveBeenCalledWith([`test`, `1`], 1000);
        expect(mockRelease).toHaveBeenCalledWith();
    });

    it('should throw error if redlock is not available', async () => {
        expect.assertions(3);

        const instance = new TestClass();
        // @ts-expect-error Test preconditions
        instance.redlock = undefined;

        // eslint-disable-next-line @typescript-eslint/unbound-method,jest/unbound-method
        await expect(instance.testArray).rejects.toThrow(
            'Redlock is not available on this instance. Ensure that the class using the `Lock` decorator extends `LockableService` or provide redlock field manually.'
        );
        expect(mockAcquire).not.toHaveBeenCalledWith([`test`, `1`], 1000);
        expect(mockRelease).not.toHaveBeenCalledWith();
    });

    it('should throw error if resources argument is not defined or empty array is passed', async () => {
        expect.assertions(3);

        const instance = new TestClass();

        await expect(instance.testEmptyResource()).rejects.toThrow(`Lock key is not defined`);
        expect(mockAcquire).not.toHaveBeenCalledWith([`test`], 1000);
        expect(mockRelease).not.toHaveBeenCalledWith();
    });

    it('should throw error if decorated method doest not return promise', async () => {
        expect.assertions(3);

        const instance = new TestClass();

        await expect(instance.testSync()).rejects.toThrow(`Method TestClass::testSync does not return a promise`);
        expect(mockAcquire).toHaveBeenCalledWith([`test`], 1000);
        expect(mockRelease).toHaveBeenCalledWith();
    });
});
