describe('SelectorElement', () => {
    // ...
    it('should return a proxy', () => {
        // ...
        const selectorElement = new SelectorElement(component, 'selector');
        const proxy = selectorElement.el();
        // ...
    });
});