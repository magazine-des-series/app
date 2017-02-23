/*
 * action types
 */

export const FETCH_PEOPLE = 'FETCH_PEOPLE';
export const FETCH_PEOPLES = 'FETCH_PEOPLES';
export const PEOPLE_RECEIVED = 'PEOPLE_RECEIVED';
export const PEOPLES_RECEIVED = "PEOPLES_RECEIVED";
export const PEOPLES_FETCH_FAILED = "PEOPLES_FETCH_FAILED";
export const PEOPLE_FETCH_FAILED = "PEOPLE_FETCH_FAILED";


/*
 * action creators
 */

export function fetchPeople(peopleId){
    return { type : FETCH_PEOPLE, peopleId : peopleId }
}

export function fetchPeoples(page){
    if(!page) page = 1;
    return { type : FETCH_PEOPLES, page : page  }
}

export function receivePeople(people){
    return { type : PEOPLE_RECEIVED, data : people }
}

export function receivePeoples(peoples){
    return { type : PEOPLES_RECEIVED, peoples : peoples }
}
