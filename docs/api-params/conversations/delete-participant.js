apiParams = {
  url: "https://conversations.twilio.com/v1/Conversations/{{ConversationSid}}/Participants/{{ParticipantSid}}",
  method: "DELETE",
  pathParams: [
    { key: "ConversationSid", value: "{{ConversationSid}}" },
    { key: "ParticipantSid", value: "{{ParticipantSid}}" },
  ],
  queryParams: [],
  headerParams: [],
  authParams: [
    { key: "username", value: "{{ConversationAccountSid}}" },
    { key: "password", value: "{{ConversationAuthToken}}" },
  ],
}
