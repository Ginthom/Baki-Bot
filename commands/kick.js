module.exports = {
    name: 'kick',
    description: './kick @User',
    args: true,
    execute(message, args) {kick(message, args)}

}

function kick(message, args) {
    if(message.guild.member(message.author).hasPermission(`KICK_MEMBERS`)) {
        const member = message.mentions.members.first();
        if(!member) {message.channel.send(`Member not found.`);}

        member.send(`You haven been kicked from ${message.guild.name}. Reason: ${args.slice(1, args.length).join(' ')}`);
        member.kick({reason: args.slice(1, args.length).join(' ')})
        .then(e => {message.channel.send(`User sucessfully kicked`);});

    }else {
        message.channel.send(`:x: You're not allowed to use this!`);

    }

}