apiParams = {
  url: "https://conversations.twilio.com/v1/Conversations/{{ConversationSid}}/Messages/{{MessageSid}}",
  method: "POST",
  pathParams: [
    { key: "ConversationSid", value: "" },
    { key: "MessageSid", value: "" },
  ],
  queryParams: [
    { key: "DateUpdated", value: "2019-05-15T13:37:35Z" },
    { key: "Attributes", value: `{"flag":true}` },
  ],
  headerParams: [
    { key: "Content-Type", value: "application/x-www-form-urlencoded" },
  ],
  authParams: [
    { key: "username", value: "" },
    { key: "password", value: "" },
  ],
}
