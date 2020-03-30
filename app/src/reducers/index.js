import { combineReducers } from 'redux';

import {FETCH_DATA_REQUEST,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE,
    ENTITIES
} from 'actions';

export const graphdb = (state = { }, action) => {

    return ENTITIES.reduce((acc, entity) => {
        switch(action.type) {
            case `${entity} ${FETCH_DATA_REQUEST}`:
                acc = Object.assign({}, acc, {
                    [entity]: { isFetching: true}
                });
                break;
            case `${entity} ${FETCH_DATA_SUCCESS}`:
                acc =  Object.assign({}, acc, {
                    [entity]: {data: !!action.payload.data.length? action.payload.data: []}
                })
                break;
            case `${entity} ${FETCH_DATA_FAILURE}`:
                acc = Object.assign({}, acc, {
                    [entity]: {error: true, isFetching: false}
                })
                break;
            default:
                return acc = Object.assign({}, acc, {});
          }
        return acc
    }, Object.assign({}, state, ))

}


export default graphdb;
