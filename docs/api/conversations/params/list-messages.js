apiParams = {
  url: "https://conversations.twilio.com/v1/Conversations/{{ConversationSid}}/Messages",
  method: "GET",
  pathParams: [{ key: "ConversationSid", value: "", placeholder: "CHabc123abc123abc123abc123abc123" }],
  queryParams: [
    { key: "PageSize", value: "", placeholder: "10" },
    { key: "Order", value: "", placeholder: "asc, desc" },
  ],
  headerParams: [],
  authParams: [
    { key: "username", value: "", placeholder: "Account SID or API Key SID" },
    { key: "password", value: "", placeholder: "AuthToken or API Key Secret" },
  ],
}
