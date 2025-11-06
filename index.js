'use strict';

const Constants = require("./src/util/Constants.js");

module.exports = {
    Client: require("./src/Client.js"),
    
    version: require('./package.json').version,

    // Structures
    Chat: require("./src/structures/Chat.js"),
    PrivateChat: require("./src/structures/PrivateChat.js"),
    GroupChat: require("./src/structures/GroupChat.js"),
    Channel: require("./src/structures/Channel.js"),
    Message: require("./src/structures/Message.js"),
    MessageMedia: require("./src/structures/MessageMedia.js"),
    Contact: require("./src/structures/Contact.js"),
    PrivateContact: require("./src/structures/PrivateContact.js"),
    BusinessContact: require("./src/structures/BusinessContact.js"),
    ClientInfo: require("./src/structures/ClientInfo.js"),
    Location: require("./src/structures/Location.js"),
    Poll: require("./src/structures/Poll.js"),
    ScheduledEvent: require("./src/structures/ScheduledEvent.js"),
    ProductMetadata: require("./src/structures/ProductMetadata.js"),
    List: require("./src/structures/List.js"),
    Buttons: require("./src/structures/Buttons.js"),
    Broadcast: require("./src/structures/Broadcast.js"),
    
    // Auth Strategies
    NoAuth: require("./src/authStrategies/NoAuth.js"),
    LocalAuth: require("./src/authStrategies/LocalAuth.js"),
    RemoteAuth: require("./src/authStrategies/RemoteAuth.js"),
    
    ...Constants
};
