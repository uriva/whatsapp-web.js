'use strict';

const PrivateContact = require("../structures/PrivateContact.js");
const BusinessContact = require("../structures/BusinessContact.js");

class ContactFactory {
    static create(client, data) {
        if(data.isBusiness) {
            return new BusinessContact(client, data);
        }

        return new PrivateContact(client, data);
    }
}

module.exports = ContactFactory;