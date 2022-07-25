postmanParams = {
  url: "https://conversations.twilio.com/v1/Conversations",
  method: "POST",
  pathParams: [],
  queryParams: [
    { key: "FriendlyName", value: "My Conversation" },
    { key: "Timers.Inactive", value: "PT1M" },
    { key: "Timers.Closed", value: "PT10M" },
  ],
  headerParams: [
    { key: "Content-Type", value: "application/x-www-form-urlencoded" },
  ],
  authParams: [
    { key: "username", value: "{{ConversationAccountSid}}" },
    { key: "password", value: "{{ConversationAuthToken}}" },
  ],
}
