postmanParams = {
  url: "https://conversations.twilio.com/v1/Conversations/{{ConversationSid}}/Participants",
  method: "GET",
  pathParams: [{ key: "ConversationSid", value: "{{ConversationSid}}" }],
  queryParams: [{ key: "PageSize", value: "10" }],
  headerParams: [],
  authParams: [
    { key: "username", value: "{{FrontlineAcctSid}}" },
    { key: "password", value: "{{FrontlineAuthToken}}" },
  ],
}
