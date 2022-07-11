postmanParams = {
  url: "https://conversations.twilio.com/v1/Conversations/{{ConversationSid}}/Participants",
  method: "POST",
  pathParams: [{ key: "ConversationSid", value: "{{ConversationSid}}" }],
  queryParams: [
    { key: "MessagingBinding.Address", value: "+12063996576" },
    { key: "MessagingBinding.ProxyAddress", value: "{{FrontlineNumber}}" },
  ],
  headerParams: [
    { key: "Content-Type", value: "application/x-www-form-urlencoded" },
  ],
  authParams: [
    { key: "username", value: "{{FrontlineAcctSid}}" },
    { key: "password", value: "{{FrontlineAuthToken}}" },
  ],
}
