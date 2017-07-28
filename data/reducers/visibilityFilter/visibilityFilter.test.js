import reducer from './visibilityFilterReducer';
import deepfreeze from 'deepfreeze';

describe("Testing the visibilityFilterReducer", () => {
    it("Should set the visibility filter to SHOW_DONE", () => {
        const stateBefore = 'SHOW_ALL';
        const action = {
            type: 'SET_VISIBILITY_FILTER',
            filter: 'SHOW_DONE'
        };
        const stateAfter = 'SHOW_DONE';
        deepfreeze(stateBefore);
        deepfreeze(action);
        expect(reducer(stateBefore, action)).toEqual(stateAfter);
    });
    it("Should set the visibility filter to SHOW_NOT_DONE", () => {
        const stateBefore = 'SHOW_ALL';
        const action = {
            type: 'SET_VISIBILITY_FILTER',
            filter: 'SHOW_NOT_DONE'
        };
        const stateAfter = 'SHOW_NOT_DONE';
        deepfreeze(stateBefore);
        deepfreeze(action);
        expect(reducer(stateBefore, action)).toEqual(stateAfter);
    });
    it("Should set the visibility filter to SHOW_ALL", () => {
        const stateBefore = 'SHOW_DONE';
        const action = {
            type: 'SET_VISIBILITY_FILTER',
            filter: 'SHOW_ALL'
        };
        const stateAfter = 'SHOW_ALL';
        deepfreeze(stateBefore);
        deepfreeze(action);
        expect(reducer(stateBefore, action)).toEqual(stateAfter);
    });
});