import { SET_BARS } from '../constants';

const bars = (state = ['bar1', 'bar2'], action) => {
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