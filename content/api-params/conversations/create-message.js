postmanParams = {
  url: "https://conversations.twilio.com/v1/Conversations/{{ConversationSid}}/Messages",
  method: "POST",
  pathParams: [{ key: "ConversationSid", value: "{{ConversationSid}}" }],
  queryParams: [
    { key: "Author", value: "{{Author}}" },
    { key: "Body", value: "Hello there" },
  ],
  headerParams: [
    { key: "Content-Type", value: "application/x-www-form-urlencoded" },
  ],
  authParams: [
    { key: "username", value: "{{ConversationAccountSid}}" },
    { key: "password", value: "{{ConversationAuthToken}}" },
  ],
}
