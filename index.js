const fs = require("fs")

class SlashCommands {

    constructor(options){

        this.client = options.client

        this.dir = options.dir
        
    }

    register(){

    fs.readdir(__dirname + this.dir , (err , files) => {

    files.forEach(x => {
        const command = require(this.dir + "/" + x)
        return this.client.application.commands.create({name: command.name, description: command.description, options: command.options})
    })

        })
    }

    handle(...args){

        client.on("interactionCreate", (interaction) => {
            if(!interaction.isCommand()) return;
            fs.readdir(__dirname + this.dir , (err , files) => {

                files.forEach(x => {

                    const command = require(this.dir + "/" + x)

                    if(interaction.commandName == command.name){

                        command.run(interaction, client , args)

                    }
                })

            })

        })
    }

    deleteAll(){

        this.client.application?.commands.cache.forEach(x => x.delete)

    }

    delete(commandName){

        this.client.application?.commands.delete({name: commandName})

    }

    registerSingleCommand(data){

        return this.client.application?.commands.create(data)

    }

}

module
.exports = 
{
    SlashCommands
}
