apiParams = {
  url: "https://conversations.twilio.com/v1/Conversations/{{ConversationSid}}/Messages/{{MessageSid}}",
  method: "POST",
  pathParams: [
    { key: "ConversationSid", value: "", placeholder: "CHabc123abc123abc123abc123abc123" },
    { key: "MessageSid", value: "", placeholder: "IMabc123abc123abc123abc123abc123" },
  ],
  queryParams: [
    { key: "DateUpdated", value: "", placeholder: "2019-05-15T13:37:35Z" },
    { key: "Attributes", value: "", placeholder: `{"flag":true}` },
  ],
  headerParams: [
    { key: "Content-Type", value: "application/x-www-form-urlencoded" },
  ],
  authParams: [
    { key: "username", value: "", placeholder: "Account SID or API Key SID" },
    { key: "password", value: "", placeholder: "AuthToken or API Key Secret" },
  ],
}
