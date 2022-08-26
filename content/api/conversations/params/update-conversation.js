apiParams = {
  url: "https://conversations.twilio.com/v1/Conversations/{{ConversationSid}}",
  method: "POST",
  pathParams: [{ key: "ConversationSid", value: "" }],
  queryParams: [
    { key: "FriendlyName", value: "Update Conversation Name" },
    { key: "State", value: "inactive" },
    { key: "Timers.Inactive", value: "PT10M" },
    { key: "Timers.Closed", value: "PT1H" },
    { key: "Attributes", value: `{"foo":"bar"}` },
  ],
  headerParams: [
    { key: "Content-Type", value: "application/x-www-form-urlencoded" },
  ],
  authParams: [
    { key: "username", value: "", placeholder: "Enter AccountSID or API Key SID" },
    { key: "password", value: "", placeholder: "Enter AuthToken or API Key Secret" },
  ],
}
