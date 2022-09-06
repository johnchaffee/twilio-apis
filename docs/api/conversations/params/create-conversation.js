apiParams = {
  url: "https://conversations.twilio.com/v1/Conversations",
  method: "POST",
  pathParams: [],
  queryParams: [
    { key: "FriendlyName", value: "", placeholder: "My Conversation" },
    { key: "Timers.Inactive", value: "", placeholder: "PT10M, PT1H" },
    { key: "Timers.Closed", value: "", placeholder: "PT1H, PT4H" },
  ],
  headerParams: [
    { key: "Content-Type", value: "application/x-www-form-urlencoded" },
  ],
  authParams: [
    { key: "username", value: "", placeholder: "Enter AccountSID or API Key SID" },
    { key: "password", value: "", placeholder: "Enter AuthToken or API Key Secret" },
  ],
}
