postmanParams = {
  url: "https://messaging.twilio.com/v1/Services/{{MessagingServiceSid}}/AlphaSenders",
  method: "GET",
  pathParams: [
    { key: "MessagingServiceSid", value: "{{MessagingServiceSid}}" },
  ],
  queryParams: [{ key: "PageSize", value: "20" }],
  headerParams: [
    { key: "Content-Type", value: "application/x-www-form-urlencoded" },
  ],
  authParams: [
    { key: "username", value: "{{AccountSid}}" },
    { key: "password", value: "{{AuthToken}}" },
  ],
}
