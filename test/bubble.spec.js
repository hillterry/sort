import { bubbleSort } from '../src/bubble'
import * as sortData from './sortData'
describe('bubble sort', () => {
    it('sort by bubble', () => {
        expect(bubbleSort(sortData.sortData[0])).toEqual(sortData.sortedData[0]);
        expect(bubbleSort(sortData.sortData[1])).toEqual(sortData.sortedData[1]);
        expect(bubbleSort(sortData.sortData[2])).toEqual(sortData.sortedData[2]);
    });
});