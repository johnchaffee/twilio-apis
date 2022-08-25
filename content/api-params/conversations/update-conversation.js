apiParams = {
  url: "https://conversations.twilio.com/v1/Conversations/{{ConversationSid}}",
  method: "POST",
  pathParams: [{ key: "ConversationSid", value: "{{ConversationSid}}" }],
  queryParams: [
    { key: "FriendlyName", value: "Update Conversation Name" },
    { key: "State", value: "inactive" },
    { key: "Timers.Inactive", value: "PT10M" },
    { key: "Timers.Closed", value: "PT1H" },
    { key: "Attributes", value: `{"foo":"bar"}` },
  ],
  headerParams: [
    { key: "Content-Type", value: "application/x-www-form-urlencoded" },
  ],
  authParams: [
    { key: "username", value: "{{ConversationAccountSid}}" },
    { key: "password", value: "{{ConversationAuthToken}}" },
  ],
}
