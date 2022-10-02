import { mockWdioElement } from '../../wdio.mock';

import { byIndex$$ } from './by-index.command';

describe('byIndex$$', () => {
    it('should return wdio element by index', async () => {
        expect.assertions(3);

        const selector = 'test-selector';

        await expect(byIndex$$(selector, 0)).resolves.toBe(mockWdioElement);
        expect(browser.$$).toHaveBeenNthCalledWith(1, selector);
        expect($).toHaveBeenNthCalledWith(1, { 'element-6066-11e4-a52e-4f735466cecf': mockWdioElement.elementId });
    });
});
