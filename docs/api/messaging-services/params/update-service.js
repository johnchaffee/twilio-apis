apiParams = {
  url: "https://messaging.twilio.com/v1/Services/{{MessagingServiceSid}}",
  method: "POST",
  pathParams: [
    { key: "MessagingServiceSid", value: "", placeholder: "MGabc123abc123abc123abc123abc123" },
  ],
  queryParams: [{ key: "FriendlyName", value: "", placeholder: "My Messaging Service" }],
  headerParams: [
    { key: "Content-Type", value: "application/x-www-form-urlencoded" },
  ],
  authParams: [
    { key: "username", value: "", placeholder: "Account SID or API Key SID" },
    { key: "password", value: "", placeholder: "AuthToken or API Key Secret" },
  ],
}
