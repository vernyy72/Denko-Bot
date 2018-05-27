const Discord = require('discord.js');
const client = new Discord.Client();
const settings = require('./settings.json');
const weather = require('weather-js');

client.on('ready',()=> {
	console.log('Online!');
});

var prefix = ">"
client.on('message', message => {
	let args = message.content.split(' ').slice(1);
	var argresult = args.join(' ');
	function denkofact() {
		var rand = ['I\’m getting depressed just thinking that Denko might be sick, or that something happened to her… (´･ω･`)',
		'I don\’t know how to say it, but I think it might be mutual… (´･ω･`) ',
		'Sorry, I haven\’t had much experience talking to girls… (´･ω･`) ',
		'What I\’m sending… well, I\’m worried about her lack of reply, so I\’ve sent her around 600 emails. They\’re mostly reports on my current mental state, I guess…? (´･ω･`)',
		'600 emails and still no reply, so I\’m really thinking something might have happened… (´･ω･`) ',
		'Alright, alright, maybe people think I\’m creepy! But even so, I\’m really, honestly in love with this girl! ',
		'Well, Denko\’s socks can\’t possibly be dirty! Unlike mine… (´･ω･`)',
		'OH GOD I WAS SO NERVOUS I PANICKED AND HUNG UP ON HER (\´\；ω\；\`)',
		'I was bullied in grade school, but I\’ve been fine since college.',
		'Oh! You must be popular, huh? (´･ω･`)',
		'Are you guys trying to trick me since I don\’t have much experience with girls? I\’m wondering when I should send another email… (´･ω･`)',
		'Denko helped me out when I was being badly bullied in high school. ',
		'Denko\’s smart and kind, so she was like everyone\’s role model. ',
		'When I sat next to her in class, I often borrowed her notebooks and erasers and we became friends. We made eye contact a lot in class, too… (´･ω･`) ',
		'I SENT 600 EMAILS BECAUSE THERE WAS A CHANCE SOMETHING HAPPENED AND I WAS WORRIED. I\’m telling the truth here, okay? ',
		'THAT\’S JUST BEING A STALKER (\´･ω･\`) I don\’t want Denko to hate me… (\´･ω･\`) ',
		'Do you think I should bring a present? Tell me what would make girls happy… (´･ω･`) ',
		'I went to email my brother about trying to be free tomorrow night, but he changed his address and number… (´･ω･`) ',
		'ALSO YOU GUYS CALLING ME CREEPY AND HOPELESS ARE REALLY MAKING ME LOSE CONFIDENCE. (´･ω･`) ',
		'What should I ask? I’ve never talked with girls… I don\’t know what I should talk about… (´･ω･`) ',
		'I just emailed Denko about what kinds of clothes she likes men to wear. Uh oh, I wonder if she\’ll figure out I like her… ',
		'Oh, since you guys call me creepy and scary, I\’m wondering if I should send an email asking if I\’m scary… (´･ω･`) ',
		'Well, I\’d be happy if I got that many emails from her… (´･ω･`) ',
		'Still no reply… What do I do? I\’m getting worried… (´･ω･`)',
		'I got an email from Denko! “Maybe a little scary…” Only a little is okay, right? I want to make sure there\’s no misunderstanding… (´･ω･`) ',
		'Yikes… Am I really that bad…? (´･ω･`) It\’s not like I want to punch people or kill people out of love for Denko, right?',
		'I really have no clue how to handle three-dimensional women. ',
		'It\’s so easy to confess in games, but so hard in three dimensions… Now I know that all too well… (´･ω･`) ',
		'Actually… I\’m starting to feel like it might be best for me to wholeheartedly confess to Denko. Is that just me? (´･ω･`) ',
		'I\’m trying to think about what to write, but other than “I love you,” I\’m drawing a blank… (´･ω･`) ',
		'Subject: To Denko\nThinking on it now, our meeting was a cherry blossom blooming in high school. And now, it’s spring again just the same. Before I met you, Denko, I felt like I was in a cold winter. It’s been so long since we were in high school together, but my feelings are just the same as they were that spring. You’ve helped me when I was bullied, haven’t you, Denko? Back then, I thought, “Why does this girl not have the wings an angel should have?” I suppose you must have left them in your mother’s stomach… Even when we met eyes, I didn’t have the courage. And we could never talk to each other. But now, I’m different! Denko, I know you may not want to marry me yet, but please, go out with me!\nWell? (´･ω･`) ',
		'If Denko and I start dating, I hope we can read this thread and laugh about it together… (´･ω･`) ',
		'I GOT AN EMAIL FROM DENKOOOOO!! I\’m too scared to open it dskald;ksa ',
		'She followed it up with “Don\’t email me anymore.” What\’s this? And here I thought I knew her feelings… ',
		'But I mean, suddenly asking not to email her is REALLY selfish… Maybe I should wait until her anger has settled? Or should I try to calm her? ',
		'Okay, I\’ll call her, then. Calling now...\nNope, guess she’s talking with someone… (´･ω･`) I\’ll wait a bit…  ',
		'Once I get a hold of her, I\’ll ask if she wants to go to McDonald\’s to have the teriyaki burger, and ask why she\’s mad. (´･ω･`) ',
		'I really feel like she\’s mad at me all of a sudden… I\’ll keep calling until she comes on! I\’ll report once she does. (´･ω･`) ',
		'Maybe I\’ll go to her house, but if we\’re dating, then it\’s not stalking, okay?! (´･ω･`) ',
		];

    return rand[Math.floor(Math.random()*rand.length)];
	}
	console.log('I saw a prefix');
	if (message.content === 'jew') {
			message.reply('Oy Vey! :^)');
	} else

	if (!message.content.startsWith(prefix)) return;
	if (message.author.bot) return;

	if (message.content === prefix + 'ping') {
		message.channel.send(`\`${Date.now() - message.createdTimestamp} ms\``);
		message.channel.send('(´･ω･`)');
	} else

	if (message.content.startsWith(prefix + 'denko')) {
		message.reply(denkofact());
	} else

	if (message.content.startsWith(prefix + 'setgame')) {
		client.user.setActivity(argresult);
	} else

	if (message.content.startsWith(prefix + 'setstatus')) {
		if(!argresult) argresult = 'online';
		client.user.setStatus(argresult);
	} else

	if (message.content.startsWith(prefix + 'weather')) {
		weather.find({search: args.join(" "), degreeType: 'F'}, function(err, result) {
			if (result === undefined || result.length === 0) {
				message.channel.send('I don\'t know that place. (´･ω･`)');
				return;
			}

			if (err) {
				message.channel.send('Oops! That\'s an error! (´･ω･`)');
				return;
			}

			var current = result[0].current;
			var location = result[0].location;
			const embed = new Discord.RichEmbed()
				.setDescription(`**${current.skytext}**`)
				.setAuthor(`Weather for ${current.observationpoint}`)
				.setThumbnail(current.imageUrl)
				.setColor(0x00AE86)
				.addField('Temperature', `${current.temperature} Degrees`, true)
				.addField('Feels Like', `${current.feelslike} Degrees`, true)

				message.channel.send({embed});
				message.channel.send('I wonder if denko would be proud. (´･ω･`)')
		});
	} else

	if (message.content.startsWith(prefix + 'leaderboard')) {
		if (message.content === prefix + 'leaderboard') {
			const embed = new Discord.RichEmbed()
				.setDescription('Updated: 5/26/2018')
				.setAuthor('School Shooting Leaderboard')
				.setColor(0xFF0000)
				.addField('#1 Beslan School Siege',' (2004)')
				.addField('#2 Walisongo School',' (2000)')
				.addField('#3 Eastern University',' (1990)')
				.addField('#4 Peshawar',' (2014)')
				.addField('#5 Garissa University College',' (2015)')
				.addField('#5.5 Kyanguli Fire',' (2001)')
				.addField('#6 Bath School',' (1927)')
				.addField('#7 Thammasat University',' (1976)')
				.addField('#8 Virginia Tech',' (2007)')
				.addField('#9 Ma\'alot Massacre',' (1974)')
				.addField('#10 Sandy Hook Elementary',' (2012)')

				message.channel.send({embed});
				message.channel.send('`>Leaderboard x` for more information on a specific shooting. `>Leaderboard score` for more information on scoring.');
				message.channel.send('Leaderboard is ordered by deaths, not by score! (´･ω･`)');
			}
		if (message.content === prefix + 'leaderboard score') {
			message.channel.send('Kills are worth 1 Point! Injuries are worth a half a point! If there\'s a range of kills/injuries than the smallest number is counted. Getting away with it is worth +100 points! An Hero is worth +50 points! Death by cop is worth +25 points! Getting arrested (or executed) is worth nothing!');
			message.channel.send('Please don\'t v\& me I don\'t condone this! (´･ω･`)');
		}
		if (message.content === prefix + 'leaderboard 1') {
			const embed = new Discord.RichEmbed()
				.setDescription('September 1, 2004')
				.setAuthor('Beslan School Siege')
				.setColor(0xFF0000)
				.addField('Location:','Beslan, North Ossetia-Alania')
				.addField('Country:','Russia')
				.addField('Killed:','334')
				.addField('Injured:','783')
				.addField('Perpetrators:','Riyad-us Saliheen')
				.addField('Fate of Perpetrators:','Mostly Death by Cop')
				.addField('Score:','__**750.5 points**__')
				message.channel.send({embed});
		}
		if (message.content === prefix + 'leaderboard 2') {
			const embed = new Discord.RichEmbed()
				.setDescription('May 28, 2000')
				.setAuthor('Walisongo School Massacre')
				.setColor(0xFF0000)
				.addField('Location:','Central Sulawesi')
				.addField('Country:','Indonesia')
				.addField('Killed:','165-191')
				.addField('Injured:','Unkown, Hundreds')
				.addField('Perpetrators:','Christian Militants')
				.addField('Fate of Perpetrators:','Arrested')
				.addField('Score:','__**215 points**__')
				message.channel.send({embed});
		}
		if (message.content === prefix + 'leaderboard 3') {
			const embed = new Discord.RichEmbed()
				.setDescription('September 5, 1990')
				.setAuthor('Eastern University Massacre')
				.setColor(0xFF0000)
				.addField('Location:','Chenkalady')
				.addField('Country:','Sri Lanka')
				.addField('Killed:','158')
				.addField('Injured:','Unknown')
				.addField('_Suspected_ Perpetrators:','Sri Lankan Army and the Home Guards')
				.addField('Fate of Perpetrators:','Got Away With It')
				.addField('Score:','__**258 points**__')
				message.channel.send({embed});
		}
		if (message.content === prefix + 'leaderboard 4') {
			const embed = new Discord.RichEmbed()
				.setDescription('December 16, 2014')
				.setAuthor('Peshawar Massacre')
				.setColor(0xFF0000)
				.addField('Location:','Peshawar')
				.addField('Country:','Pakistan')
				.addField('Killed:','149')
				.addField('Injured:','114')
				.addField('Perpetrators:','Tehrik-i-Taliban')
				.addField('Fate of Perpetrators:','Death by Cop')
				.addField('Score:','__**231 points**__')
				message.channel.send({embed});
		}
		if (message.content === prefix + 'leaderboard 5') {
			const embed = new Discord.RichEmbed()
				.setDescription('April 2, 2015')
				.setAuthor('Garissa University College Attack')
				.setColor(0xFF0000)
				.addField('Location:','Garissa')
				.addField('Country:','Kenya')
				.addField('Killed:','148')
				.addField('Injured:','79')
				.addField('Perpetrators:','Al-Shabaab')
				.addField('Fate of Perpetrators:','Death by Cop & Arrested')
				.addField('Score:','__**212.5 points**__')
				message.channel.send({embed});
		}
		if (message.content === prefix + 'leaderboard 5.5') {
			const embed = new Discord.RichEmbed()
				.setDescription('March 24, 2001')
				.setAuthor('Kyanguli Fire Tragedy')
				.setColor(0xFF0000)
				.addField('Location:','Machakos County')
				.addField('Country:','Kenya')
				.addField('Killed:','67')
				.addField('Injured:','Unknown')
				.addField('Perpetrators:','Davis Opiyo and Felix Ngumbao')
				.addField('Fate of Perpetrators:','Arrested')
				.addField('Score:','__**67 points**__')
				message.channel.send({embed});
		}
		if (message.content === prefix + 'leaderboard 6') {
			const embed = new Discord.RichEmbed()
				.setDescription('May 18, 1927')
				.setAuthor('Bath School Disaster')
				.setColor(0xFF0000)
				.addField('Location:','Bath Township, Michigan')
				.addField('Country:','United States')
				.addField('Killed:','44')
				.addField('Injured:','58')
				.addField('Perpetrator:','Andrew Kehoe')
				.addField('Fate of Perpetrator:','An Hero')
				.addField('Score:','__**123 points**__')
				message.channel.send({embed});
		}
		if (message.content === prefix + 'leaderboard 7') {
			const embed = new Discord.RichEmbed()
				.setDescription('October 6, 1976')
				.setAuthor('Thammasat University Massacre')
				.setColor(0xFF0000)
				.addField('Location:','Sanam Luang')
				.addField('Country:','Thailand')
				.addField('Killed:','46-100+')
				.addField('Injured:','167')
				.addField('Perpetrators:','Numerous right-wing coalitions and military outfits')
				.addField('Fate of Perpetrators:','Got away with it!')
				.addField('Score:','__**229.5 points**__')
				message.channel.send({embed});
		}
		if (message.content === prefix + 'leaderboard 8') {
			const embed = new Discord.RichEmbed()
				.setDescription('April 16, 2007')
				.setAuthor('Virginia Tech Shooting')
				.setColor(0xFF0000)
				.addField('Location:','Blacksburg, Virginia')
				.addField('Country:','United States')
				.addField('Killed:','32')
				.addField('Injured:','17')
				.addField('Perpetrator:','Seung-Hui Cho (조승희)')
				.addField('Fate of Perpetrator:','An Hero')
				.addField('Score:','__**90.5 points**__')
				message.channel.send({embed});
		}
		if (message.content === prefix + 'leaderboard 9') {
			const embed = new Discord.RichEmbed()
				.setDescription('May 15, 1974')
				.setAuthor('Ma\'alot Massacre')
				.setColor(0xFF0000)
				.addField('Location:','Ma\'alot')
				.addField('Country:','Israel')
				.addField('Killed:','31')
				.addField('Injured:','70')
				.addField('Perpetrators:','Democratic Front for the Liberation of Palestine')
				.addField('Fate of Perpetrators:','Death by Cop')
				.addField('Score:','__**91 points**__')
				message.channel.send({embed});
		}
		if (message.content === prefix + 'leaderboard 10') {
			const embed = new Discord.RichEmbed()
				.setDescription('December 14, 2012')
				.setAuthor('Sandy Hook Elementary School Shooting')
				.setColor(0xFF0000)
				.addField('Location:','NewTown, Connecticut')
				.addField('Country:','United States')
				.addField('Killed:','28')
				.addField('Injured:','2')
				.addField('Perpetrator:','Adam Lanza')
				.addField('Fate of Perpetrator:','An Hero')
				.addField('Score:','__**79 points**__')
				message.channel.send({embed});
		}
	}
});

client.login(settings.token);
