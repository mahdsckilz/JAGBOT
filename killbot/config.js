module.exports = {
  /**
   * Discord Bot settings. These are mandatory and will affect what the bot
   *   posts about, and where it posts to.
   */
  bot: {
    // The alliance your guild belongs to
    alliance: process.env.ALBION_ALLIANCE="ZergPolice",
    // The ID of the discord channel to post to.
    feedChannelId: process.env.ALBION_FEED_CHANNEL_ID="360722354852069376",
	//feedChannelId: process.env.ALBION_FEED_CHANNEL_ID="350214742771761152",
    // The name of your guild (or guilds, if the guild is large).
    guilds: process.env.ALBION_GUILDS=["Just a Game"],
      //? process.env.ALBION_GUILDS.split(',') : [],
    // The Discord token of the Bot to post through.
    token: process.env.DISCORD_TOKEN="MzYwNzAwMzc1Nzg5MjA3NTU1.DKZYMw.Ijwj_PUW2sfUrUliavblxZqWX1s",
  }
};
