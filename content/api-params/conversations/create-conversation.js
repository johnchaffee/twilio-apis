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
    { key: "username", value: "{{AccountSid}}" },
    { key: "password", value: "{{AuthToken}}" },
  ],
}
