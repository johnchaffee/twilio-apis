postmanParams = {
  url: "https://messaging.twilio.com/v1/Services/{{MessagingServiceSid}}",
  method: "DELETE",
  pathParams: [
    { key: "MessagingServiceSid", value: "{{MessagingServiceSid}}" },
  ],
  queryParams: [],
  headerParams: [
    { key: "Content-Type", value: "application/x-www-form-urlencoded" },
  ],
  authParams: [
    { key: "username", value: "{{AccountSid}}" },
    { key: "password", value: "{{AuthToken}}" },
  ],
}
