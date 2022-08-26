apiParams = {
  url: "https://conversations.twilio.com/v1/Conversations/{{ConversationSid}}/Participants",
  method: "GET",
  pathParams: [{ key: "ConversationSid", value: "" }],
  queryParams: [{ key: "PageSize", value: "10" }],
  headerParams: [],
  authParams: [
    { key: "username", value: "" },
    { key: "password", value: "" },
  ],
}
