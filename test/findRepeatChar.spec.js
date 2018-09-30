import findRepeatChar from '../src/findRepeatChar'
describe('findRepeatChar', () => {
    it('findRepeatChar test ', () => {
        expect(findRepeatChar('adddddsfsddasead')).toEqual({ char: ['d'], repeats: 5 });
        expect(findRepeatChar('test')).toEqual({ char: ['t', 'e', 's', 't'], repeats: 1 });
    });
})