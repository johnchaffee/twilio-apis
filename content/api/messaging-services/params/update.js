apiParams = {
  url: "https://messaging.twilio.com/v1/Services/{{MessagingServiceSid}}",
  method: "POST",
  pathParams: [
    { key: "MessagingServiceSid", value: "" },
  ],
  queryParams: [{ key: "FriendlyName", value: "My Messaging Service" }],
  headerParams: [
    { key: "Content-Type", value: "application/x-www-form-urlencoded" },
  ],
  authParams: [
    { key: "username", value: "" },
    { key: "password", value: "" },
  ],
}
