import {
  SLIDER_NEXT,
  SLIDER_PREV,
  SLIDER_AUTO_SWITCH,
  SLIDER_RESET_SWITCH_TIME
} from '../actions/actionsSlider';
import { combineReducers } from 'redux';

const initialSliderState = {
    currentIndex : 0,
    items : [],
    autoSwitch : false,
    switchTime : 0
}

function autoSwitchReducer(state = {autoSwitch:false, autoSwitchTime:0}, action){
    switch(action.type){
        case SLIDER_AUTO_SWITCH:
            return {
                autoSwitch : action.autoSwitch,
                autoSwitchTime : 0,
            }
        case SLIDER_RESET_SWITCH_TIME:
            return {
                autoSwitch : state.autoSwitch,
                autoSwitchTime : 0,
            }
        default:
            return state;
    }
}
function navigationReducer(state={items:[], currentIndex:0}, action){
    let len = state.items.length;
    switch(action.type){
        case SLIDER_NEXT:
            return {
                items: state.items,
                currentIndex: state.currentIndex + 1 > len - 1 ? 0 : state.currentIndex + 1,
            }
        case SLIDER_PREV:
            return {
                items: state.items,
                currentIndex: state.currentIndex - 1 < 0 ? len - 1 : state.currentIndex -1,
            }
        default:
            return state;
    }
}

const sliderReducer = combineReducers({
    autoSwitchReducer,
    navigationReducer
});

export default sliderReducer;
