const host = process.env.REACT_APP_ELECTIONDB_HOST;
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
    fetch(polls_limited_path).then(response => response.json()).then(json => {
        if(json){
            if (json.length > 0) {
                console.debug('Successfully connected to ' + polls_limited_path);
                cb(json);
            } else {
                console.warn('Zero results returned from ' + polls_limited_path);
            }
        } else {
            console.error('something bad happened when calling ' + polls_limited_path);
        }
    });
}

export function getData(cb){
    let all_data_path = host + '/api/partyvotingintentions'
    fetch(all_data_path).then(response => response.json()).then(json => cb(json));
}