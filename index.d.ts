declare module "ez-discordslash.js"

import { ApplicationCommandDataResolvable, ApplicationCommandScope } from "discord.js"

export interface SlashCommandsOptions {

    client?: Object | any,

    dir?: string,

}
export class SlashCommands {
    
    constructor(options?: SlashCommandsOptions)

    public register(): Promise<ApplicationCommandScope>

    public handle(...args?: any[]): void

    public deleteAll(): void

    public delete(commandName: string): void

    public registerSingleCommand(options?: ApplicationCommandDataResolvable): Promise<ApplicationCommandScope>

}
