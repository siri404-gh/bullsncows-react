export const createStore = (reducer) => {
    let state;
    let listeners = [];

    const getState = () => state;
    const subscribe = (listener) => {
        listeners.push(listener);
        return () => {
            listeners = listeners.filter(l => listener !== l);
        };
    };
    const dispatch = (action) => {
        state = reducer(state, action);
        console.log('State changed to - ', state);
        listeners.forEach((listener) => {
            listener();
        });
    };
    dispatch({});
    return { getState, subscribe, dispatch };
};

export const combineReducers = (reducers) => {
    return (state = {}, action) => {
        return Object.keys(reducers).reduce((nextState, key) => {
            nextState[key] = reducers[key](state[key], action);
            return nextState;
        }, {});
    };
};