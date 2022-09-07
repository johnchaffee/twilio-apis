apiParams = {
  url: "https://conversations.twilio.com/v1/Conversations/{{ConversationSid}}/Participants",
  method: "POST",
  pathParams: [{ key: "ConversationSid", value: "", placeholder: "CHabc123abc123abc123abc123abc123" }],
  queryParams: [{ key: "Identity", value: "", placeholder: "Worker identity" }],
  headerParams: [
    { key: "Content-Type", value: "application/x-www-form-urlencoded" },
  ],
  authParams: [
    { key: "username", value: "", placeholder: "Account SID or API Key SID" },
    { key: "password", value: "", placeholder: "AuthToken or API Key Secret" },
  ],
}
