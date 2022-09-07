apiParams = {
  url: "https://conversations.twilio.com/v1/Conversations/{{ConversationSid}}/Participants/{{ParticipantSid}}",
  method: "POST",
  pathParams: [
    {
      key: "ConversationSid",
      value: "",
      placeholder: "CHabc123abc123abc123abc123abc123",
    },
    {
      key: "ParticipantSid",
      value: "",
      placeholder: "MBabc123abc123abc123abc123abc123",
    },
  ],
  queryParams: [
    { key: "DateUpdated", value: "", placeholder: "2019-05-15T13:37:35Z" },
    { key: "Attributes", value: "", placeholder: `{"role":"driver"}` },
  ],
  headerParams: [
    { key: "Content-Type", value: "application/x-www-form-urlencoded" },
  ],
  authParams: [
    {
      key: "username",
      value: "",
      placeholder: "Account SID or API Key SID",
    },
    {
      key: "password",
      value: "",
      placeholder: "AuthToken or API Key Secret",
    },
  ],
}
