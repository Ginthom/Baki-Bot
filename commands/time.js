module.exports = {
    name: 'time',
    description: './time\t| Tells the time.',
    args: false,
    execute(message, args) {answer(message);}

}

function answer(message) {
    message.channel.send(`It's :hammer:-time!`);

} 