const Discord = require("discord.js");
const{ SlashCommandBuilder } = require("@discordjs/builders");
const Client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES
    ]
});

const data = new SlashCommandBuilder()
    .setName("hey")
    .setDescription("Bienvenue")
    .addUserOption(option => option
        .setName("utilisateur")
        .setDescription("utilisateur que vous souhaitez mentionnez")
        .setRequired(false));



const prefix = "!";

Client.on("ready", () => {

    //Client.application.commands.create(data);
    Client.guilds.cache.get("949999873778942072").commands.create(data);

    console.log("bot operationnel");
});

Client.on("interactionCreate", interaction => {
    if(interaction.isCommand()){
        if(interaction.commandName === "hey"){
            let user = interaction.options.getUser("utilisateur");

            if(user != undefined){
                interaction.reply("Salut ! <@" + user.id + ">");
            }
            else {
            interaction.reply("Salut !")
            }
        }
    }
});

Client.on("messageCreate", message => {
    if(message.author.bot) return;

    //-ping
    if(message.content === prefix + "ping"){
        message.reply("pong")
    }
    else if (message.content === prefix + "help"){
        message.channel.send("**__Voici les commandes du Bot__**\n - -ping : renvoie pong ");
    }
});



Client.on("guildMemberAdd", member => {
    console.log("Un Nouveaus Membre est arrivé ! Acceuillez le bien !");
});

Client.on("guildMemberRemove", member => {
    console.log("O non... Un membre à quitter le Serveur !");
});





Client.login("OTQ5OTk4Mzc3MzE4MzYzMTk2.YiSg7w.oUq7NErt_Iwol9rb-yAgzof7J0o")






