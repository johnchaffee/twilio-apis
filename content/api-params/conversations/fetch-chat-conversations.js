postmanParams = {
  url: "https://conversations.twilio.com/v1/ParticipantConversations",
  method: "GET",
  pathParams: [],
  queryParams: [
    { key: "PageSize", value: "10" },
    { key: "Identity", value: "jchaffee+worker1@twilio.com" },
  ],
  headerParams: [],
  authParams: [
    { key: "username", value: "{{ConversationAccountSid}}" },
    { key: "password", value: "{{ConversationAuthToken}}" },
  ],
}
