postmanParams = {
  url: "https://conversations.twilio.com/v1/Conversations/{{ConversationSid}}/Messages",
  method: "GET",
  pathParams: [{ key: "ConversationSid", value: "{{ConversationSid}}" }],
  queryParams: [
    { key: "PageSize", value: "10" },
    { key: "Order", value: "desc" },
  ],
  headerParams: [],
  authParams: [
    { key: "username", value: "{{ConversationAccountSid}}" },
    { key: "password", value: "{{ConversationAuthToken}}" },
  ],
}
