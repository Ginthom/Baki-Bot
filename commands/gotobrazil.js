module.exports = {
    name: 'gotobrazil',
    description: './gotobrazil @User\t| Send people to brazil.',
    args: true,
    execute(message, args) {gotobrazil(message, args)}

}

function gotobrazil(message, args) {
    let allowed = true;
    let roles = message.guild.roles.cache;

    roles.forEach(e => { 
        if(e.id == args[0].replace('@', '').replace('<', '').replace('>', '').replace('&', '')) {
            allowed = false;

        } 

    });


    if (args[0] != "@everyone" &&
        args[0] != "@here" &&
        allowed) {
        message.channel.send(`${args[0]} was shipped to brazil by Baki-Bot`);

    } else {
        message.channel.send("Illegal cargo, I don't wanna go to jail :C");

    }
    

}