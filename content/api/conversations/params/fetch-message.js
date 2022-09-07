apiParams = {
  url: "https://conversations.twilio.com/v1/Conversations/{{ConversationSid}}/Messages/{{MessageSid}}",
  method: "GET",
  pathParams: [
    { key: "ConversationSid", value: "", placeholder: "CHabc123abc123abc123abc123abc123" },
    { key: "MessageSid", value: "", placeholder: "IMabc123abc123abc123abc123abc123" },
  ],
  queryParams: [],
  headerParams: [],
  authParams: [
    { key: "username", value: "", placeholder: "Account SID or API Key SID" },
    { key: "password", value: "", placeholder: "AuthToken or API Key Secret" },
  ],
}
