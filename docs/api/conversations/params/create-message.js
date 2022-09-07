apiParams = {
  url: "https://conversations.twilio.com/v1/Conversations/{{ConversationSid}}/Messages",
  method: "POST",
  pathParams: [{ key: "ConversationSid", value: "", placeholder: "CHabc123abc123abc123abc123abc123" }],
  queryParams: [
    { key: "Author", value: "", placeholder: "Mobile number or Workder identity" },
    { key: "Body", value: "", placeholder: "Hello World!" },
  ],
  headerParams: [
    { key: "Content-Type", value: "application/x-www-form-urlencoded" },
  ],
  authParams: [
    { key: "username", value: "", placeholder: "Account SID or API Key SID" },
    { key: "password", value: "", placeholder: "AuthToken or API Key Secret" },
  ],
}
