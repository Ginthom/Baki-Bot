module.exports = {
    name:'getinvite',
    description:'./getinvite Steam-ID\t| Gets the "join game"-link from your profile',
    args: true,
    execute(message, args) {getinvite(message, args)}

}

let https = require('https');

function getinvite(message, args) {
    try {
        const https = require('https');
        let data = '';
        https.get(`https://steamcommunity.com/id/${args[0]}/`, function(res) {
            res.on('data', function(chunk) {
               console.log(''+chunk);

            });

        });

        console.log(data);

    }catch(error) {
        message.channel.send('I couldnt find a link, Im sorry :C');

    }

}