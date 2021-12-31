# discord-slash.js
- Easy To Use 
# How To Use
- Create A Dir (i created a Dir/Folder and Named It commands)
- Now Copy This Code
```js
const { Client, Intents } = require("discord.js")

const client = new Client({ intents: [Intents.FLAGS.GUILDS] })

const { SlashCommands } = require("discord-slash.js")

const commands = new SlashCommands({
  client: client,
  dir: "commands"
})
```
- Now Go To Commands Dir and Create A Folder Which Will Be Our Command File 
- Example Command / Ping Command
```js
  module.exports = {
    name: "ping",
    description: "ping Command",
    run: async(i, client) =>{
    
    i.reply({content: "Pong"})
    
    }
    }
```
- Use .register Function To Register The Command
```js
 commands.register()
```
- Then Use .handle Function To Handle The Commands
```js
commands.handle()
```
- Or If You Want Addtional Parms to be added to Commands
```js
commands.handle(parms1, parms2)
```
- To Delete All Commands Use .deleteAll Function
```js
commands.deleteAll()
```
- To Delete A Particular Command Use .delete Function
```js
commands.delete(name)
```
- Add A Single Command use .registerSingleCommand Function
```js
commands.registerSingleCommand({name: "some-name", description: "Some Description"})
```
# Credits
- Developed By Agent Hacker
- Discord : Agent Hacker#0477
