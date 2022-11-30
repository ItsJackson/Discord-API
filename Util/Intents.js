const Bitfield = require("./Bitfield");

class Intents extends Bitfield {
    constructor(...bits) {
        super(bits)
    }
}

Intents.Flags = {
    Guilds: 1n << 0n,
    GuildMembers: 1n << 1n,
    GuildBans: 1n << 2n,
    GuildEmojisAndStickers: 1n << 3n,
    GuildIntegrations: 1n << 4n,
    GuildWebhooks: 1n << 5n,
    GuildInvites: 1n << 6n,
    GuildVoiceStates: 1n << 7n,
    GuildPresences: 1n << 8n,
    GuildMessages: 1n << 9n,
    GuildMessageReactions: 1n << 10n,
    GuildMessageTyping: 1n << 11n,
    DirectMessages: 1n << 12n,
    DirectMessageReactions: 1n << 13n,
    DirectMessageTyping: 1n << 14n,
    MessageContent: 1n << 15n,
    GuildScheduledEvents: 1n << 16n,
    AutoModerationConfiguration: 1n << 20n,
    AutoModerationExecution: 1n << 21n
}

Intents.All = Object.values(Intents.Flags).reduce((a, b) => a | b, Bitfield.defaultBit)

module.exports = Intents