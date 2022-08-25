apiParams = {
  url: "https://conversations.twilio.com/v1/Conversations/{{ConversationSid}}/Participants/{{ParticipantSid}}",
  method: "GET",
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