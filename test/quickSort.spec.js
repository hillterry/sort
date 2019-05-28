import { quickSort } from '../src/quickSort'
import * as sortData from './sortData'
describe('quick sort', () => {
    it('sort by quick', () => {
        expect(quickSort(sortData.sortData[0], 0, sortData.sortData[0].length - 1)).toEqual(sortData.sortedData[0]);
        expect(quickSort(sortData.sortData[1], 0, sortData.sortData[1].length - 1)).toEqual(sortData.sortedData[1]);
        expect(quickSort(sortData.sortData[2], 0, sortData.sortData[2].length - 1)).toEqual(sortData.sortedData[2]);
    });
});