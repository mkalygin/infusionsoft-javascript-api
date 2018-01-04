module.exports = IContactService = require('typedef')

// ContactService is used to manage contacts. You can add, update and find
// contacts in addition to managing follow up sequences, tags and action sets.
.interface('IContactService') .define({

    // Creates a new contact record from the data passed in the associative array
    __xmlrpc__add: function(apiKey, data) {},

    // Merge two contacts together
    __xmlrpc__merge: function(apiKey, contactId, duplicateContactId) {},

    // Adds a contact to a follow-up sequence (campaigns were the original name of
    // follow-up sequences)
    __xmlrpc__addToCampaign: function(apiKey, contactId, campaignId) {},

    // Adds a tag to a contact record
    __xmlrpc__addToGroup: function(apiKey, contactId, groupId) {},

    // Returns the Id number of the next follow-up sequence step for the given
    // contact
    __xmlrpc__getNextCampaignStep: function(apiKey, contactId,
        followUpSequenceId) {},

    // Finds all contacts with the given email address. This searches the Email,
    // Email 2, and Email 3 fields
    __xmlrpc__findByEmail: function(apiKey, email, selectedFields) {},

    // Load data from a specific contact record
    __xmlrpc__load: function(apiKey, contactId, selectedFields) {},

    // Pauses a follow-up sequence for the given contact record
    __xmlrpc__pauseCampaign: function(apiKey, contactId, sequenceId) {},

    // Removes a follow-up sequence from a contact record
    __xmlrpc__removeFromCampaign: function(apiKey, contactId,
        followUpSequenceId) {},

    // Removes a tag from a contact (groups were the original name of tags)
    __xmlrpc__removeFromGroup: function(apiKey, contactId, TagId) {},

    // Resumes a follow-up sequence that has been stopped/paused for a given
    // contact
    __xmlrpc__resumeCampaignForContact: function(apiKey, contactId, seqId) {},

    // Immediately performs the given follow-up sequence stepId for the given
    // contacts
    __xmlrpc__rescheduleCampaignStep: function(apiKey, contactIds,
        sequenceStepId) {},

  // Link two contacts
  __xmlrpc__linkContacts: function(apiKey, contactId1, contactId2, linkId)

    // Runs an action set on a given contact record
    __xmlrpc__runActionSequence: function(apiKey, contactId, actionSetId) {},

    // Adds or updates a contact record based on matching data
    __xmlrpc__addWithDupCheck: function(apiKey, data, dupCheckType) {},

    // Updates the data on a contact record
    __xmlrpc__update: function(apiKey, contactId, data) {}

});