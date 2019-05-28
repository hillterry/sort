import { mergeSort } from '../src/mergoSort'
import * as sortData from './sortData'
describe('merge sort', () => {
    it('sort by merge', () => {
        expect(mergeSort(sortData.sortData[0], 0, sortData.sortData[0].length - 1, [])).toEqual(sortData.sortedData[0]);
        expect(mergeSort(sortData.sortData[1], 0, sortData.sortData[1].length - 1, [])).toEqual(sortData.sortedData[1]);
        expect(mergeSort(sortData.sortData[2], 0, sortData.sortData[2].length - 1, [])).toEqual(sortData.sortedData[2]);
    });
});