const express = require("express");
const app = express();

// Store values as keys which can be used as verification to the guild.
const dbValue = `123
456
789
101112
mypassword123
`

// Create a log once the bot is online.
app.listen(3000, () => {
  console.log("Project is running!")
})
// Creating web page face for the bot.
app.get("/", (req, res) => {
  res.write("<title> My Title </title>")

  res.write("<p>" + " Hello World! " + "</p>")
  res.write("<p>" + " I am the ____ Bot for the ____ Discord server. " + "</p>")
  res.write(`
  <section>
		<h4>Here are some things I can do:</h4>
		<ul>
			<li>Bind, unbind, or deactivate your ___ license key from your Discord</li>
			<li>Give you the Verified role in the Discord server</li>
			<li>Provide details about your license key upon request</li>
		</ul>
	</section>
  `)
  res.write("<a href = 'https://discord.gg/myserver'> A link to the Discord server </a>")
  res.write("<p>" + "  " + "</p>")
  res.write("<a href = 'https://discord.com/api/oauth2/authorize?client_id=123456789&permissions=268651520&scope=bot'> Add me to your own server! </a>")
  res.write("<p>" + "  " + "</p>")
  res.write("<p>" + " <em> Coded by ____ (ID) </em> " + "</p>")
  res.send();
})

const Discord = require("discord.js")
// Create new client and pass intents the bot will need.
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES", "DIRECT_MESSAGES"], partials: ["CHANNEL"] });
//const actions = ['give', 'remove', 'has']

// When user sends message, check one of the if statements for a command that matches the users message content.
client.on("messageCreate", message => {
  const mySecret = process.env['token']
  if (message.content === "! ____ ") {
    message.reply({
      content: '>  ____ : Online\n> Please open  ____  before sending any commands!',
    })
  }
  else if (message.content === "!ping") {
    message.reply({
      content: "> PONG!"
    })
  }
  else if (message.content.includes("!verify") && message.content.length === 51) {
    /*
      let myRole = message.guild.roles.cache.find(role => role.name === "Verified");
      if (message.member.roles.cache.has(myRole.id)) {
        message.reply({
          content: "> You already have the role!"
        })
      }
      */
    if (1 === 2) { }
    else {
		// The code below is for adding a role to a user from a DM.
      if (dbValue.includes(message.content.substring(8))) {
        try {
          message.reply({
            content: "> This may take a moment..."
          })
          async function asyncCall() {
            await client.destroy();
            await client.login(process.env.token);
            const member1 = await client.guilds.cache.get("guildID").members.fetch(message.author.id);
            if (member1.roles.cache.has("roleID")) {
              message.reply({
                content: "> You already have the role!"
              })
              return;
            }
            else {
              member1.roles.add("roleID")
              message.reply({
                content: "> Welcome to the server <@" + message.author.id + ">"
              })
              return;
            }
          }
          asyncCall();
		  // This code below is for adding a role to a user from a guild.
          //let role = message.guild.roles.cache.find(r => r.name === "Verified");
          //let member = message.mentions.members.first();
          //message.member.roles.add(role).catch(console.error);

        }
        catch (error) {
          message.reply({
            content: "> Failed!"
          })
        }
      }

    }


  }
  else if (message.content === "!verify -r") {
    try {
      message.reply({
        content: "> This may take a moment..."
      })
      async function removeVerify() {
        await client.destroy();
        await client.login(process.env.token);
        const member1 = await client.guilds.cache.get("12345").members.fetch(message.author.id);
        if (member1.roles.cache.has("12345")) {
          member1.roles.remove("12345")
          message.reply({
            content: "> Success!"
          })
        }
        else {
          message.reply({
            content: "You do not have the role!"
          })
        }
      }
      removeVerify();
      //let role = message.guild.roles.cache.find(r => r.name === "Verified");
      //let member = message.mentions.members.first();
      //message.member.roles.remove(role).catch(console.error);
    }
    catch (error) {
      message.reply({
        content: "> Failed!"
      })

    }

  }
  else if (message.content === "!verify -h") {
    message.reply({
      content: "> **!verify**\n> Adds the verified role to your Discord\n> **!verify -r**\n> Removes the verified role from your Discord\n> **!verify -h**\n> Displays all available verification commands\n\nYou can only use the verification commands in the <#12345> channel."
    })

  }
  /*
  else if (message.content === "!verify" && message.channel.id !== "12345") {
    message.reply({
      content: "> You may only use this command in the <#12345> channel!\n\ndiscord.gg/myserver"
    })
  }
  
  else if (message.content === "!verify -r" && message.channel.id !== "12345") {
    message.reply({
      content: "> You may only use this command in the <#12345> channel!\n\ndiscord.gg/myserver"
    })
  }
*/
  else if (message.content === "!help") {
    message.reply({
      content: "__ ____  Commands__\n> These commands should solely be used in private (DM / private server) and are only accessible while  ____  is running\n> **!bind**: binds license key to Discord\n> **!unbind**: unbinds license from Discord\n> **!deactivate**: logs the current user on the license key out\n> **!details**: Displays all information about the license key\n> Use any of the commands above with the \"-h\" flag to learn more about the command\n> Example: !bind -h\n\n__Global commands__\n> These commands may be used anywhere where  ____   ____  is active\n> **!verify**: Authenticates your Discord and gives you the Verified role\n> **!verify -h**: Displays further information about the !verify command\n> **!verify -r**: Removes the Verified role from your Discord\n> **!help**: Displays all information about  ____   ____  and commands\n> **! ____ **: Checks the status of  ____  (the **!ping** command can be used as well)\n\nIf you wish to add me to your own server, tap my name, then tap 'Add to Server'"
    })
  }
  else if (message.content.includes("fuck") || message.content.includes("shit") || message.content.includes("bitch") || message.content.includes("cunt") || message.content.includes("faggot") || message.content.includes("pussy") || message.content.includes("dick") || message.content.includes("prick") || message.content.includes("motherfucker") || message.content.includes("damnit") || message.content.includes("ass") || message.content.includes("Fuck") || message.content.includes("Shit") || message.content.includes("Bitch") || message.content.includes("Cunt") || message.content.includes("Faggot")
    || message.content.includes("Pussy") || message.content.includes("Dick") || message.content.includes("Prick") || message.content.includes("Motherfucker") || message.content.includes("fucker") || message.content.includes("Fucker") || message.content.includes("damnit") || message.content.includes("Ass")) {
    message.delete().catch(console.error)
  }
})
// Login the bot.
client.login(process.env.token);