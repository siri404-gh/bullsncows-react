import reducer from './todosReducer';
import deepfreeze from 'deepfreeze';

describe("Testing Todo Reducer", () => {
    it("Should add a todo", () => {
        const stateBefore = [];
        const action = {
            id: 0,
            type: 'ADD_TODO',
            task: 'ADD'
        };
        const stateAfter = [{
            id: 0,
            task: 'ADD',
            done: false
        }];
        deepfreeze(stateBefore);
        deepfreeze(action);
        expect(reducer(stateBefore, action)).toEqual(stateAfter);
    });

    it("Should remove a todo", () => {
        const stateBefore = [{
            id: 0,
            task: 'ADD',
            done: false
        }];
        const action = {
            type: 'REMOVE_TODO',
            id: 0
        };
        const stateAfter = [];
        deepfreeze(stateBefore);
        deepfreeze(action);

        expect(reducer(stateBefore, action)).toEqual(stateAfter);
    });

    it("Should toggle a todo", () => {
        const stateBefore = [{
            id: 0,
            task: 'a',
            done: false
        }];
        const action = {
            type: 'TOGGLE_TODO',
            id: 0
        };
        const stateAfter = [{
            task: 'a',
            done: true,
            id: 0
        }];
        deepfreeze(stateBefore);
        deepfreeze(action);

        expect(reducer(stateBefore, action)).toEqual(stateAfter);
    });
});