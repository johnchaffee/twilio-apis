apiParams = {
  url: "https://conversations.twilio.com/v1/Conversations/{{ConversationSid}}/Participants/{{ParticipantSid}}",
  method: "POST",
  pathParams: [
    { key: "ConversationSid", value: "" },
    { key: "ParticipantSid", value: "" },
  ],
  queryParams: [
    { key: "DateUpdated", value: "2019-05-15T13:37:35Z" },
    { key: "Attributes", value: `{"role":"driver"}` },
  ],
  headerParams: [
    { key: "Content-Type", value: "application/x-www-form-urlencoded" },
  ],
  authParams: [
    { key: "username", value: "", placeholder: "Enter AccountSID or API Key SID" },
    { key: "password", value: "", placeholder: "Enter AuthToken or API Key Secret" },
  ],
}
