postmanParams = {
  url: "https://conversations.twilio.com/v1/Conversations/{{ConversationSid}}",
  method: "DELETE",
  pathParams: [{ key: "ConversationSid", value: "{{ConversationSid}}" }],
  queryParams: [],
  headerParams: [],
  authParams: [
    { key: "username", value: "{{FrontlineAcctSid}}" },
    { key: "password", value: "{{FrontlineAuthToken}}" },
  ],
}
