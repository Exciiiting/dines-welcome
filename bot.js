const Discord = require("discord.js");
const client = new Discord.Client();



 
client.on('guildMemberAdd',async member => {
  if(member.guild.id !== '499633648866164737') return;
  setTimeout(function(){
  member.guild.channels.find(r => r.id === '508723424063913988').send(' ** ❛  Welcome To Deniz ❛ :wilted_rose: **');
},3000);
});
  

client.login(process.env.BOT_TOKEN);
