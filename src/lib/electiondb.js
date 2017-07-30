const host = 'http://thelectionspollsapi20170719063733.azurewebsites.net'
const polls_path = host + '/api/polls';
const parties_path = host + '/api/parties?all=false';

export function getPolls(cb) {
    fetch(polls_path).then(response => response.json()).then(json => cb(json));
}

export function getParties(cb) {
    fetch(parties_path).then(response => response.json()).then(json => cb(json));
}

export function getPollsLimt(limit, cb) {
    let polls_limited_path = polls_path + '?limit=' + limit;
    fetch(polls_limited_path).then(response => response.json()).then(json => cb(json));
}

export function getData(cb){
    let all_data_path = host + '/api/partyvotingintentions'
    fetch(all_data_path).then(response => response.json()).then(json => cb(json));
}