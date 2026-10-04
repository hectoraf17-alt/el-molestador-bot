const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ 
  intents: [
    GatewayIntentBits.Guilds, 
    GatewayIntentBits.GuildMessages, 
    GatewayIntentBits.MessageContent
  ] 
});

client.once('ready', () => {
    console.log(`ola imbeciles ya etoy online krajo`);
});

client.on('messageCreate', async message => {
    if (message.author.bot) return;

    const texto = message.content.toLowerCase();

    // Si alguien escribe "hola"
    if (texto.includes('hola')) {
        await message.reply(`soy un molestador sal de aqui ${message.author.username}? o te saco un ojo jaja era broma kk`);
    }

    // El chiste automático estilo el servidor de tu primera foto
    if (texto.includes('soy mas bobo que vos')) {
        await message.reply('no por que 1+1=11 jaja imbecil');
    }
});

client.login(process.env.DISCORD_TOKEN);
