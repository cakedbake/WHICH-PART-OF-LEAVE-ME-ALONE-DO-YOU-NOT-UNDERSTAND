#!/usr/bin/node

import axios from 'axios'
import discord from 'discord.js'
import dotenv from 'dotenv'

dotenv.config()

const client = new discord.Client({
  intents: [
    1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768, 65536, 1048576, 2097152, 16777216, 33554432
  ]
})

const tags = JSON.parse(process.env.TAGS)

client.login(process.env.TOKEN)

client.on('ready', async () => {
  console.log('ready to bring misery and pain to...')

  try {
	var victim = await client.users.fetch(process.env.TARGET)
  } catch {
	console.error('nobody, because', process.env.TARGET, 'is not a valid user ID!')
	process.exit(1)
  }

  console.log(victim.username + '.')

  const response = await axios.get(`https://e621.net/posts.json?tags=${encodeURIComponent(tags.join('+'))}&limit=320`, { // 320 is the limit
    headers: {
      'User-Agent': 'LeaveMeAlone-inator/1.0'
    }
  })

  let i = 0

  for (const post of response.data.posts) {
    await victim.send('https://e621.net/posts/' + post.id)
    i++
    console.log(`Sent ${i}/${response.data.posts.length} posts`)
  }

  process.exit(0)
})
