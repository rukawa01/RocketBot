const { SlashCommandBuilder} = require('discord.js');
const wait = require('node:timers/promises').setTimeout;

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!')
		.setNSFW(false),
		cooldown: 5,
		category:"fun",
		
	async execute(interaction) {
		// sadece taglayan kişi görür
		if (interaction.commandName === 'ping') {
			
			await interaction.deferReply();
			await interaction.followUp('Ping Thinking ...');
			await wait(2000);
			await interaction.editReply({content: 'Bekleme için sorry al sana pong şimdi köyüne', ephemeral : true});
			await wait(2000);
			await interaction.followUp('Pong again!');
		}
	},
};