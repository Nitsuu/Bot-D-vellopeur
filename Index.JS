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
        message.channel.send("**__Voici les commandes du Bot__**\n - !ping : renvoie pong ");
    }
});






'use strict';

// On importe les classes nécessaire au bon fonctionnement du bot
const { Client, MessageEmbed, Intents } = require('discord.js');

// On instancie le client Discord
const client = new Client({ ws: { intents: Intents.ALL }});

// Dès que notre bot est prêt, on affiche un message dans la console
client.on('ready', () => {
    console.log('The bot is ready!');
});

// Dès qu'un nouveau membre rejoint le serveur,
// on récupère les informations du salon via son ID
// puis on récupère les informations du membre,
// et on génère un nouveau message embarqué qu'on envoie
client.on('guildMemberAdd', async (member) => {
    // Récupération des informations du salon
    const channel = await client.channels.fetch('826500313824493638');

    // Récupération des informations du nouveau membre
    const user = await client.users.fetch(member.id);

    // On créé un nouveau message embarqué,
    // et on déclare le titre, la couleur, etc...
    const embed = new MessageEmbed()
        .setTitle(`Bienvenue sur Discord Dévellopeur !`)
        .setColor(0xff0000)
        .setDescription(`${member}, toute l'équipe et notre communauté te souhaite la bienvenue !`)
        .setURL('')
        .setFooter(`N'oubliez pas de respecter les règles du serveur Discord.`)
        .setThumbnail(user.displayAvatarURL());

    // Pour terminer, on envoie le message embarqué
    channel.send(embed);
});

// On se connecte à l'API avec un token (voir la suite du tutoriel)
client.login(process.env.DISCORD_TOKEN);


Client.on("guildMemberAdd", member => {
    console.log("Un Nouveaus Membre est arrivé ! Acceuillez le bien !");
});

Client.on("guildMemberRemove", member => {
    console.log("O non... Un membre à quitter le Serveur !");
});


Client.login("OTY4OTIyMDA5NTA3NjAyNTMz.Yml48A.WVS7Dau54WK1Pd2ZYXIo4pC9FsE")


