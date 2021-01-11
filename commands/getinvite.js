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
               data += chunk;

            });
            res.on('end', function() {
                //example string: steam://joinlobby/586140/109775241039434322/76561198427566281
                let link_start = data.indexOf('steam://joinlobby/');
                let link_end = link_start+61;
                message.channel.send(`${args[0]}s Lobby: ${data.substring(link_start, link_end)}`);

            });

        });

        console.log(data);

    }catch(error) {
        message.channel.send('I couldnt find a link, Im sorry :C');

    }

}