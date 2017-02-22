/*
 * action types
 */

export const SLIDER_NEXT = 'SLIDER_NEXT';
export const SLIDER_PREV = 'SLIDER_PREV';
export const SLIDER_AUTO_SWITCH = 'SLIDER_AUTO_SWITCH';
export const SLIDER_RESET_SWITCH_TIME = "SLIDER_RESET_SWITCH_TIME";


/*
 * action creators
 */

export function sliderNext(target){
    return { type : SLIDER_NEXT, target : target }
}

export function sliderPrev(target){
    return { type : SLIDER_PREV, target : target}
}

export function sliderAutoSwitch(target, autoSwitch){
    return { type : SLIDER_AUTO_SWITCH, target : target, autoSwitch : bool }
}

export function sliderResetSwitchTime(target){
    return { type : SLIDER_RESET_SWITCH_TIME, target : target }
}
