const { SlashCommandBuilder} = require('discord.js');
const wait = require('node:timers/promises').setTimeout;

module.exports = {
	data: new SlashCommandBuilder()
		.setName('anan')
		.setDescription('replies with a orhan evladi')
		.setNSFW(false),
        category:"fun",
		
	async execute(interaction) {
		await interaction.reply('orhan!!!!!!');
		await wait(2000);
		await interaction.editReply('Orhan Evladı!!!');
	},
};