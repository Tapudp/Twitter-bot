const twitter = require('twitter');
const config = require('./config');

var T = new twitter(config);

// set up your search parameters
var params = {
    q: '#nodejs',
    count: 10,
    result_type: 'recent',
    lang: 'en'
}

/** Practice */
T.get('users/show/@AniketSMK', params, (err, data, response) => {
    if(err){
        console.log(err);
    }
    else {
        //console.log(data);
        console.log(data.status);
        let id = data.status.id;
        console.log(id);
        T.post('favorites/create', id, (err, response) => {
            // if the favorite fails, log the error message
            if(err) {
                console.log(err[0].message);
            }
            // if the favourite is successufl, log the url of the tweet 
            else {
                let username = response.user.screen_name;
                let tweetId = response.id_str;
                console.log('Favouirted:', `https://twitter.com/${username}/status/${tweetId}`);
            }
        });
    }
});