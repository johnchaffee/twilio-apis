apiParams = {
  url: "https://conversations.twilio.com/v1/Conversations",
  method: "POST",
  pathParams: [],
  queryParams: [
    { key: "FriendlyName", value: "My Conversation" },
    { key: "Timers.Inactive", value: "PT10M" },
    { key: "Timers.Closed", value: "PT1H" },
  ],
  headerParams: [
    { key: "Content-Type", value: "application/x-www-form-urlencoded" },
  ],
  authParams: [
    { key: "username", value: "", placeholder: "Enter AccountSID or API Key SID" },
    { key: "password", value: "", placeholder: "Enter AuthToken or API Key Secret" },
  ],
}
