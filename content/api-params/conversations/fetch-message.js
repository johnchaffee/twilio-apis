postmanParams = {
  url: "https://conversations.twilio.com/v1/Conversations/{{ConversationSid}}/Messages/{{MessageSid}}",
  method: "GET",
  pathParams: [
    { key: "ConversationSid", value: "{{ConversationSid}}" },
    { key: "MessageSid", value: "{{MessageSid}}" },
  ],
  queryParams: [],
  headerParams: [],
  authParams: [
    { key: "username", value: "{{ConversationAccountSid}}" },
    { key: "password", value: "{{ConversationAuthToken}}" },
  ],
}
