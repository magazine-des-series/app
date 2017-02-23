import * as peopleActions from './peoples/actions/actions';

export default function api(type, args) {
    let url;
    let opts = {};

    switch(type){
        case peopleActions.FETCH_PEOPLES:
            let page = 1;
            if(args && args.page) page = args.page;
            url = 'http://localhost:3000/peoples?_page='+page;
            opts = {method:'GET'};
            break;
        default:
            url = "";
    }

    return fetch(url, opts)
      .then(function (resp) {
        return resp.json()
      })
      .then(function (resp) {
        return resp
      })
}
