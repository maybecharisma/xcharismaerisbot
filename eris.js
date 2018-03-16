const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);


});
client.on('message', message => {
if (message.content === 'letsspamto50k') {
      let count = 0;
      let ecount = 0;
      for(let x = 1; x < 50001; x++) {
        message.channel.send(` ${x}`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client.login(process.env.BOT_TOKEN);
