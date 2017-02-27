/*
 * action types
 */

export const FETCH_PEOPLE = 'FETCH_PEOPLE';
export const FETCH_PEOPLES = 'FETCH_PEOPLES';
export const FETCH_RELATED_PEOPLES = 'FETCH_RELATED_PEOPLES';

export const PEOPLE_RECEIVED = 'PEOPLE_RECEIVED';
export const PEOPLES_RECEIVED = "PEOPLES_RECEIVED";
export const RELATED_PEOPLES_RECEIVED = "RELATED_PEOPLES_RECEIVED";

export const PEOPLES_FETCH_FAILED = "PEOPLES_FETCH_FAILED";
export const PEOPLE_FETCH_FAILED = "PEOPLE_FETCH_FAILED";
export const RELATED_PEOPLES_FAILED = "RELATED_PEOPLES_FAILED";

export const CHANGE_PAGE = "CHANGE_PAGE";


/*
 * action creators
 */

export function fetchPeople(peopleId){
    return { type : FETCH_PEOPLE, peopleId : peopleId }
}

export function fetchPeoples(page, filter){
    if(!page) page = 1;
    if(!filter) filter = "";
    return { type : FETCH_PEOPLES, page : page, filter:filter  }
}

export function fetchRelatedPeoples(currentId){
    return { type : FETCH_RELATED_PEOPLES, currentId : currentId  }
}

export function receivePeople(people){
    return { type : PEOPLE_RECEIVED, data : people }
}

export function receivePeoples(peoples){
    return { type : PEOPLES_RECEIVED, peoples : peoples }
}

export function receiveRelatedPeoples(peoples){
    return { type : RELATED_PEOPLES_RECEIVED, peoples : peoples }
}

export function changePage(page){
    return {type : CHANGE_PAGE, page : page }
}
