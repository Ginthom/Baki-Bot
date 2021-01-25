const Discord = require('discord.js');
const config = require('./config.json');
const fs = require('fs');
const { args } = require('./commands/gotobrazil');

const client = new Discord.Client();
client.commands = new Discord.Collection();
let command_list = [];

//create list of all commands from dir
const command_files = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

//get all commands from ./commands
for (const file of command_files) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
    command_list.push({name: command.name, description: command.description});
    console.log(`->loaded: command [${command.name}] `);

}

//start bot
client.login(config.token);

//when the bot finished loading
client.once('ready', () => {
    console.log('->Baki-Bot loaded');
    client.user.setActivity("with B1TC0R3s life", {type: "PLAYING"});
});

//when a user sends a message
client.on('message', message => {

    //check whether its a valid command
    if(!message.content.startsWith(config.prefix) || message.author.bot) return;

    //split message into command and parameters
    let args = message.content.slice(config.prefix.length).split(' ');
    let command_name = args.shift().toLowerCase();

    //execute command via imported module
    try {
        const cmd = client.commands.get(command_name);
        if(cmd.args && !args.length) {
            message.reply(`You'll have to give me some parameters, silly C:`);
            return;

        }

        cmd.execute(message, args);

    }catch(error) {
        console.error(error);
        message.channel.send(`"${command_name}" isn't something i can do :C`);

    }

    //help command
    if(command_name === 'help') {
        help_msg = new Discord.MessageEmbed();
        for(let val of command_list) {
            help_msg.addFields({name: val.name, value: val.description, inline: false});

        }
        message.channel.send(help_msg);

    }

    //log command usage
    dc_log(message, message.author.username, message.author.id);

});

function dc_log(msg, username, id) {
    //send embeded message to log channel
    client.channels.cache.get(config.log_channel).send(new Discord.MessageEmbed().setColor('#0bb898').addFields(
        {name: 'Command', value: msg},
        {name: 'Username', value: username, inline: true},
        {name: 'ID', value: id, inline: true},
        {name: 'Timestamp', value: Date.now(), inline: true}
    ));

}