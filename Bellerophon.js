/* jshint esversion: 6 */
const Discord = require('discord.js');
const client = new Discord.Client();
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

    if(command==='!yorokobeshounen'||command==='!喜べ少年'){//Kirei w/ cross
      const embed1 =  new Discord.MessageEmbed().setImage('https://i.makeagif.com/media/6-12-2015/nIA0kY.gif') //adding a image
      message.channel.send({embed:embed1});
    }

    if(command==='!thepriestsmiles'){//Kirei w/ cross
      const embed1 =  new Discord.MessageEmbed().setImage('https://i.kym-cdn.com/photos/images/facebook/001/881/881/84b.jpg') //adding a image
      message.channel.send({embed:embed1});
    }

    if(command==='!mapotofu'){//Kirei w/ cross
      const embed1 =  new Discord.MessageEmbed().setImage('https://i.pinimg.com/originals/d9/3c/cd/d93ccd28fedfc910f1670555e08320ca.gif') //adding a image
      message.channel.send({embed:embed1});
    }

    if(!message.member.roles.cache.has('850518741325971456')){
      message.channel.send('Fuck you^');
    }
  
  });
 
 client.login("ODUwNDkwMDUyMTAxNDA2NzUx.YLqelQ.CNjPiN_Nj6lIeGHjfqzdq34vlCo");



  
