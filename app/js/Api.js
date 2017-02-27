import * as peopleActions from './peoples/actions/actions';

export default function api(type, args) {
    let url;
    let opts = {};

    switch(type){
        case peopleActions.FETCH_PEOPLES:
            let page = 1;
            let search = "";
            if(args && args.page) page = args.page;
            if(args && args.filter) search = args.filter;
            url = 'http://localhost:3000/peoples?_page='+page+'&_sort=lastName'+'&lastName_like='+search;
            opts = {method:'GET'};
            break;
        default:
            url = "";
    }
    var total = 0;

    return fetch(url, opts)
      .then(function (resp) {
        total = resp.headers.get("X-Total-Count");
        return resp.json()
      })
      .then(function (data) {
          return {data:data, total:total}
      })
}
