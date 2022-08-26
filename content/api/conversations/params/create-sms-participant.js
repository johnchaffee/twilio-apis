apiParams = {
  url: "https://conversations.twilio.com/v1/Conversations/{{ConversationSid}}/Participants",
  method: "POST",
  pathParams: [{ key: "ConversationSid", value: "" }],
  queryParams: [
    { key: "MessagingBinding.Address", value: "" },
    { key: "MessagingBinding.ProxyAddress", value: "" },
  ],
  headerParams: [
    { key: "Content-Type", value: "application/x-www-form-urlencoded" },
  ],
  authParams: [
    { key: "username", value: "" },
    { key: "password", value: "" },
  ],
}
