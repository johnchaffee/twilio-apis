apiParams = {
  url: "https://conversations.twilio.com/v1/Conversations/{{ConversationSid}}",
  method: "GET",
  pathParams: [{ key: "ConversationSid", value: "" }],
  queryParams: [],
  headerParams: [],
  authParams: [
    { key: "username", value: "", placeholder: "Enter AccountSID or API Key SID" },
    { key: "password", value: "", placeholder: "Enter AuthToken or API Key Secret" },
  ],
}
