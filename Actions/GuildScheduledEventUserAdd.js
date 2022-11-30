const { EventTypes } = require("../Util/Constants");
const BaseAction = require("./BaseAction");

class GuildScheduledEventUserAdd extends BaseAction {
    constructor(data = {}, client) {
        super(client)
        this._patch(data)
    }

    _patch(data) {
        const packet = data.d
        const guild = this.client.guilds.cache.get(packet.guild_id)
        const event = guild.guildScheduledEvents.cache.get(packet.guild_scheduled_event_id)
        if(event) {
            const user = event.users._add({ user: this.client.users.cache.get(packet.user_id) }, { cache: true })
            return this.client.emit(EventTypes.GuildScheduledEventUserAdd, user)
        }
    }
}

module.exports = GuildScheduledEventUserAdd