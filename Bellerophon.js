/* jshint esversion: 6 */
const Discord=require('discord.js');
const client=new Discord.Client();


client.on('ready', () => {
    console.log('Logged in...');
  });
  
  client.on('message', message => {
    const command=message.content;
    if (message.author.bot) return;
    if(command=='!smile'){
      message.channel.send(':catStretchedSmile:');
    }//ad
    

    if(!message.member.roles.cache.has('850518741325971456')){
      message.channel.send('Fuck you^');
    }

    if(command==='Fuck you'){
      message.delete()
      .catch(console.error);
    }
  
  });
 
 client.login('ODUwNDkwMDUyMTAxNDA2NzUx.YLqelQ.TOEfMVSX1-StnbD2aFohenjUb_M');



  
