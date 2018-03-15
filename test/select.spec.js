import { selectSort } from '../src/select'
import * as sortData from './sortData'
describe('select sort', () => {
    it('sort by select', () => {
        expect(selectSort(sortData.sortData[0])).toEqual(sortData.sortedData[0]);
        expect(selectSort(sortData.sortData[1])).toEqual(sortData.sortedData[1]);
        expect(selectSort(sortData.sortData[2])).toEqual(sortData.sortedData[2]);
    });
});