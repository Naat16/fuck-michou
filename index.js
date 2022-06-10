const Discord = require("discord.js");
const Client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES
    ]
});

const prefix = "?";

Client.on("ready", () => {
    console.log("bot opérationnel");
});

Client.login("OTgzNzUxNjA5NTg0NjExMzM5.GDB-at.0foMaOu2Z-AxMhVJJbS3ZucQvgI7DuuCk79KKk");

Client.on("messageCreate", message => {
    if (message.author.bot) return;

    if(message.content === prefix + "ping"){
        message.reply("11 pire commandant!");
    }
    if(message.content === prefix + "11"){
        message.reply("<@693049593054756884> est le pire families et le pire commandant, il est bien sure full hrp");
    }
    if(message.content === prefix + "Nerox"){
        message.reply("<@604060150139191296> est beaucoup trop inlove de 36 vous trouvez pas ?");
    }
    if(message.content === prefix + "Naat"){
        message.reply("<@349144107479728133> est le meilleur Ripoux");
    }
    if(message.content === prefix + "wyclock"){
        message.reply("<@697458133664006166> ne sait pas conduire il fait accident sur accident la preuve il à le bras casser !");
    }
    if(message.content === prefix + "Kenobi"){
        message.reply("<@329306683975401475> c'est l'heure de Kenobi c'est sorti");
    }
    if(message.content === prefix + "help"){
        const embed = new Discord.MessageEmbed()
            .setTitle("Liste des Commandes")
            .setColor("#0099ff")
            // .setURL("https://google.fr/")
        message.channel.send({ embeds: [embed]});
    }
    if(message.content === prefix + "amende"){
        const embed = new Discord.MessageEmbed()
            .setTitle("Calculateur d'amende")
            .setColor("#0099ff")
            .setURL("https://docs.google.com/spreadsheets/d/1Yr1vQUydXiazWcxgCzCJ5nF1IP7mFLj_t3A3lRp-3A0/edit?usp=sharing");
        message.channel.send({ embeds: [embed]});
    }
    if(message.content === prefix + "site"){
        const embed = new Discord.MessageEmbed()
            .setTitle("Le site police arrive quand Naat se bougera le cul !")
            .setColor("#0099ff")
        message.channel.send({ embeds: [embed]})
    }
});