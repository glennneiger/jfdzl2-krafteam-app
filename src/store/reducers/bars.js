import { SET_BARS } from '../constants';

const initialState = [];

const bars = (state = initialState , action) => {
    switch(action.type) {
        case SET_BARS:
            return [
                ...action.bars
            ]
        default:
            return state;
    }
}

export default bars;