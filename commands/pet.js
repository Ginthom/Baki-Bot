module.exports = {
    name: 'pet',
    description: './pet\t| Pet Baki-Bots Doggo.',
    args: false,
    execute(message, args) {pet(message)}

}
function pet(message) {
    message.channel.send('Baki-Bots Doggo looks exited and happy now! C:');

}