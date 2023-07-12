
const axios = require('axios');
const { SlashCommandBuilder } = require('discord.js');
// at the top of your file
const { EmbedBuilder } = require('discord.js');
const {filmApiKey} = require('./config.json');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('film')
		.setDescription('Gets Random Film!'),
		category:"filmBot",
	async execute(interaction) {
		const options = {
			method: 'GET',
			url: 'https://imdb8.p.rapidapi.com/auto-complete',
			params: { q: 'Lucifer' },
			headers: {
				'X-RapidAPI-Key': filmApiKey,
				'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
			}
		};

		try {
			const response = await axios.request(options);
			 interaction.reply(response.data['d'][0]['l']+ "\n" + response.data['d'][0]['q']);
			// inside a command, event listener, etc.
			const exampleEmbed = new EmbedBuilder()
				.setColor(0x0099FF)
				.setTitle(response.data['d'][0]['l'])
				.setURL('https://www.imdb.com/title/'+response.data['d'][0]['id'])
				.setAuthor({ name: 'Some name', iconURL: 'https://cdn.discordapp.com/avatars/1043988835899559957/d97acf489a0b889ac025516d5ca156e6.png?size=1024', url: 'https://discord.js.org' })
				.setDescription('Some description here')
				.setThumbnail(response.data['d'][0]['i']['imageUrl'])
				.addFields(
					{ name: 'Regular field title', value: 'Some value here' },
					{ name: '\u200B', value: '\u200B' },
					{ name: 'Inline field title', value: 'Some value here', inline: true },
					{ name: 'Inline field title', value: 'Some value here', inline: true },
				)
				.addFields({ name: 'Inline field title', value: 'Some value here', inline: true })
				.setImage(response.data['d'][0]['i']['imageUrl'])
				.setTimestamp()
				.setFooter({ text: 'Some footer text here', iconURL: response.data['d'][0]['i']['imageUrl'] });

			interaction.channel.send({ embeds: [exampleEmbed] });


		} catch (error) {
			console.error(error);
		}
	},
};



/*

async execute(interaction) {
        const options = {
            method: 'GET',
            url: 'https://imdb8.p.rapidapi.com/title/v2/get-popular-movies-by-genre',
            params: {
                genre: '<REQUIRED>',
                limit: '100'
            },
            headers: {
                'X-RapidAPI-Key': '6260cd9428msh4d9b78800f1bcc3p12e69cjsneba301ac5a82',
                'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
            }
        };
        try {
            const response = await axios.request(options);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
      }          

    */