const { SlashCommandBuilder } = require('discord.js');




module.exports = {
    data: new SlashCommandBuilder()
        .setName('cuk')
        .setDescription('Cukunun boyunu ölçer')
        .addUserOption(option => option.setName('target')
            .setDescription('etiket')
            .setRequired(true)),
    category: 'denemeBotlar',
    async execute(interaction) {
        const member = interaction.options.getMember('target');
       
        const x = Math.floor(Math.random() * 10);
        var dick = '<';
        for (let index = 0; index <= x; index++) {
            dick += '=';
        }
        dick += '8';

        if (member.user.id === '438357201007017985')  {
            dick = '<=8';
        }
        if (member.user.id === '337928153391431681')  {
            dick = '<=8';
        }
        if (member.user.id === '518133497089490983')  {
            dick = '<=8';
        }
        

        return interaction.reply({ content: `${member.user.username}' dick is : ${dick}`, ephemeral: false });
    },
};
