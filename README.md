# The Whichpartofleavemethefuckalonedoyounotunderstand-inator (now using [e621.net](https://e621.net/)!)

# Required `.env` or environment variables
- `TOKEN`: your Discord bot token
- `TARGET`: the ID of the user who's DMs shall be irrecoverably tarnished
- `TAGS`: an array of the things you desire to tarnish the victim's DMs with

## Usage:
- Install all packages:
```bash
npm install
```
- Run the bot with:
```bash
node index.js
```
- The bot will fetch 320 (maximum allowed by API) posts and then sequentially send each post's URL to your victim.
- It will exit with code `0` after it is done.