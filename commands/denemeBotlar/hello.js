const { SlashCommandBuilder} = require('discord.js');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('hello')
        .setDescription('Changing languages')
        .addStringOption(option =>
			option.setName('language')
				.setDescription('Language changing ...')
				.setRequired(true)),
        category:'denemeBotlar',

       async execute(interaction){
            const locales = {
                pl: 'Witaj',
                de: 'Hallo',
                tr: 'Merhaba',
                ru:'Привет',
                ja:'こんにちは',
                ko:'안녕하세요',

            };
        interaction.reply(locales[interaction.options.getString('language',true)] ?? 'Hello')
     
        },
        
};