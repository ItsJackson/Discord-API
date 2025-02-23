const Base = require("../Base/base");
const Collection = require("../Util/Collection");
const SystemChannelFlags = require("../Util/SystemChannelFlags");
const PartialChannel = require("./PartialChannel");
const PartialRole = require("./PartialRole");
class PartialGuild extends Base {
    constructor(data = {}, client) {
        super(client)
        this.name = data.name ?? null
        this.description = data.description ?? null
        this.verificationLevel = data.verification_level ?? null
        this.defaultMessageNotifications = data.default_message_notifications ?? null
        this.explicitContentFilter = data.explicit_content_filter ?? null
        this.preferredLocale = data.preferred_locale ?? null
        this.afkTimeout = data.afk_timeout ?? null
        this.roles = new Collection(data.roles?.map(o => [o.id, new PartialRole(o, this.client)]))
        this.channels = new Collection(data.channels?.map(o => [o.id, new PartialChannel(o, this.client)]))
        this.afkChannelId = data.afk_channel_id ?? null
        this.systemChannelId = data.system_channel_id ?? null
        this.systemChannelFlags = new SystemChannelFlags(data.system_channel_flags ? BigInt(data.system_channel_flags) : 0n)
        this.iconHash = data.icon_hash ?? null
    }
}

module.exports = PartialGuild