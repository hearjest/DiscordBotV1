/* jshint esversion: 6 */
const dotenv=require('dotenv');
dotenv.config();
const Discord=require('discord.js');
const client=new Discord.Client();
const prefix='!';

client.on('ready', () => {
    console.log('Logged in...');
  });
  
  client.on('message', message => {
    const command=message.content;
    if (!command.startsWith(prefix) || message.author.bot) return;

    if(command=='!smile'){
      message.channel.send(':catStretchedSmile:');
    }
      
   
    

    if(!message.member.roles.cache.has('850518741325971456')){
      message.channel.send('Fuck you^');
    }

    if(command==='Fuck you'){
      message.delete()
      .catch(console.error);
    }
  
  });
 
 client.login(process.env.TOKEN);



  
