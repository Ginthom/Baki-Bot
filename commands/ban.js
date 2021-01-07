module.exports={
    name: 'ban',
    description: './ban @User',
    args: true,
    execute(message, args) {ban(message, args)}

}

function ban(message, args) {
    if(message.guild.member(message.author).hasPermission('ADMINISTRATOR')) {
        const member = message.mentions.members.first();
        if(!member) {message.channel.send('User not found');}

        member.send(`You haven been banned from ${message.guild.name}. Reason: ${args.slice(1, args.length).join(' ')}`);
        member.ban({reason: args.slice(1, args.length).join(' ')})
        .then(e => {message.channel.send('User sucessfully banned!')});

    }else {
        message.channel.send(`:x: You're not allowed to use this!`);

    }

}