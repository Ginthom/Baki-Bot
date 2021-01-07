module.exports = {
    name: 'gotobrazil',
    description: './gotobrazil @User\t| Send people to brazil.',
    args: true,
    execute(message, args) {gotobrazil(message, args)}

}

function gotobrazil(message, args) {
    message.channel.send(`${args[0]} was shipped to brazil by Baki-Bot`);

}