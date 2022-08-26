apiParams = {
  url: "https://conversations.twilio.com/v1/Conversations/{{ConversationSid}}",
  method: "DELETE",
  pathParams: [{ key: "ConversationSid", value: "{{ConversationSid}}" }],
  queryParams: [],
  headerParams: [],
  authParams: [
    { key: "username", value: "{{AccountSid}}" },
    { key: "password", value: "{{AuthToken}}" },
  ],
}
