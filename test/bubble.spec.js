import { bubbleSort } from '../src/bubble'

describe('bubble sort', () => {
    it('sort by bubble', () => {
        //[1,3,4,6,9]
        expect(bubbleSort([1, 4, 6, 9, 3])).toEqual([1, 3, 4, 6, 9]);
        expect(bubbleSort([56, 634, 2, 46, 57, 32])).toEqual([2, 32, 46, 56, 57, 634])
    });
});