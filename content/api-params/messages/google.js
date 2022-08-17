postmanParams = {
  url: "https://api.twilio.com/2010-04-01/Accounts/{{AccountSid}}/Messages.json",
  method: "POST",
  pathParams: [
    { key: "AccountSid", value: "{{AccountSid}}" },
  ],
  queryParams: [
    { key: "To", value: "{{GoogleTo}}" },
    { key: "From", value: "{{GoogleFrom}}" },
    { key: "Body", value: "Hello from Google Business Messages + Twilio API!" },
    { key: "StatusCallback", value: "{{StatusCallback}}" },
    { key: "MessagingServiceSid", value: "{{MessagingServiceSid}}" },
  ],
  headerParams: [
    { key: "Content-Type", value: "application/x-www-form-urlencoded" },
  ],
  authParams: [
    { key: "username", value: "{{AccountSid}}" },
    { key: "password", value: "{{AuthToken}}" },
  ],
}
