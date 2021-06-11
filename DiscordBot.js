/* jshint esversion: 6 */
const Discord = require('discord.js');
const client = new Discord.Client();
const config=require('./config.json');
const prefix='!';
const sqlite3 = require('sqlite3').verbose();

// open database in memory
let db = new sqlite3.Database('C:/sqlitetools/timelogger.db', sqlite3.OPEN_READWRITE,(err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the in-memory SQlite database.');
});

db.run('CREATE TABLE minutesReading(time integer)');

client.on('ready', () => {
    console.log('Logged in...');
  });
  
  client.on('message', msg => {//
    if (!msg.content.startsWith(prefix) || msg.author.bot) return;

    const args=msg.content.slice(prefix.length).trim().split(/ +/); // Makes an array by cutting off prefix, removing excess whitespace and returns an array of strings. Don't need trim()?
    const command=args.shift().toLowerCase();//Shift returns and removes first array item
   
    if(args.length===0){
      if(command==='yorokobeshounen'||command==='!喜べ少年'){//Kirei w/ cross
        const embed1 =  new Discord.MessageEmbed().setImage('https://i.makeagif.com/media/6-12-2015/nIA0kY.gif') //adding a image
        msg.channel.send({embed:embed1});
      }else if(command==='smile'){//The priest smiles
        const embed1 =  new Discord.MessageEmbed().setImage('https://i.kym-cdn.com/photos/images/facebook/001/881/881/84b.jpg') //adding a image
        msg.channel.send({embed:embed1});
      }else if(command==='mapotofu'){//Kirei and mapotofu
        const embed1 =  new Discord.MessageEmbed().setImage('https://i.pinimg.com/originals/d9/3c/cd/d93ccd28fedfc910f1670555e08320ca.gif') //adding a image
        msg.channel.send({embed:embed1});
      }else if(command==='reactiontest'){//Reacts :catStretchedSmile: emote to message
        msg.react('850549716927250482');
      }
    }else{
      if(command==='mimic'){
        msg.reply(args.join(' '));
      }
      if(msg.member.roles.cache.has('850518741325971456')){//Sends message if I (Admin role) put in a command
        msg.channel.send('喜べ、少年');
        }
    }
  });
 client.login(config.token);