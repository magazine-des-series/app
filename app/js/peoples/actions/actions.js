/*
 * action types
 */

export const FETCH_PEOPLE = 'FETCH_PEOPLE';
export const FETCH_PEOPLES = 'FETCH_PEOPLES';
export const FETCH_RELATED_PEOPLES = 'FETCH_RELATED_PEOPLES';
export const FETCH_PREV_PEOPLE = "FETCH_PREV_PEOPLE";
export const FETCH_NEXT_PEOPLE = "FETCH_NEXT_PEOPLE";

export const PEOPLE_RECEIVED = 'PEOPLE_RECEIVED';
export const PEOPLES_RECEIVED = "PEOPLES_RECEIVED";
export const RELATED_PEOPLES_RECEIVED = "RELATED_PEOPLES_RECEIVED";
export const NEXT_PEOPLE_RECEIVED = "NEXT_PEOPLE_RECEIVED";
export const PREV_PEOPLE_RECEIVED = "PREV_PEOPLE_RECEIVED";

export const PEOPLES_FETCH_FAILED = "PEOPLES_FETCH_FAILED";
export const PEOPLE_FETCH_FAILED = "PEOPLE_FETCH_FAILED";
export const RELATED_PEOPLES_FAILED = "RELATED_PEOPLES_FAILED";
export const NEXT_PEOPLE_FAILED = "NEXT_PEOPLE_FAILED";
export const PREV_PEOPLE_FAILED = "PREV_PEOPLE_FAILED";


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

export function fetchPrevPeople(id, fullName){
    return { type : FETCH_PREV_PEOPLE, id : id, fullName : fullName }
}

export function fetchNextPeople(id, fullName){
    return { type : FETCH_NEXT_PEOPLE, id : id, fullName : fullName }
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

export function receivePrevPeople(people){
    return { type : PREV_PEOPLE_RECEIVED, data : people }
}

export function receiveNextPeople(people){
    return { type : NEXT_PEOPLE_RECEIVED, data : people }
}
