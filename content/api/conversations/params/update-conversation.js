apiParams = {
  url: "https://conversations.twilio.com/v1/Conversations/{{ConversationSid}}",
  method: "POST",
  pathParams: [{ key: "ConversationSid", value: "" }],
  queryParams: [
    { key: "FriendlyName", value: "", placeholder: "New Name" },
    { key: "State", value: "", placeholder: "active, inactive, close" },
    { key: "Timers.Inactive", value: "", placeholder: "PT10M" },
    { key: "Timers.Closed", value: "", placeholder: "PT1H" },
    { key: "Attributes", value: "", placeholder: `{"foo":"bar"}` },
  ],
  headerParams: [
    { key: "Content-Type", value: "application/x-www-form-urlencoded" },
  ],
  authParams: [
    { key: "username", value: "", placeholder: "Enter AccountSID or API Key SID" },
    { key: "password", value: "", placeholder: "Enter AuthToken or API Key Secret" },
  ],
}
