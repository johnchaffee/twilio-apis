apiParams = {
  url: "https://conversations.twilio.com/v1/Conversations/{{ConversationSid}}/Messages",
  method: "GET",
  pathParams: [{ key: "ConversationSid", value: "" }],
  queryParams: [
    { key: "PageSize", value: "10" },
    { key: "Order", value: "desc" },
  ],
  headerParams: [],
  authParams: [
    { key: "username", value: "", placeholder: "Enter AccountSID or API Key SID" },
    { key: "password", value: "", placeholder: "Enter AuthToken or API Key Secret" },
  ],
}
