apiParams = {
  url: "https://api.twilio.com/2010-04-01/Accounts/{{AccountSid}}/Messages.json",
  method: "POST",
  pathParams: [
    { key: "AccountSid", value: "", placeholder: "ACabc123abc123abc123abc123abc123" },
  ],
  queryParams: [
    { key: "To", value: "messenger:1234567890123456", placeholder: "messenger:1234567890123456" },
    { key: "From", value: "messenger:1234567890123456", placeholder: "messenger:1234567890123456" },
    { key: "Body", value: "Hello from Facebook Messenger", placeholder: "Hello from Facebook Messenger" },
    { key: "StatusCallback", value: "", placeholder: "https://example.com" },
    { key: "MessagingServiceSid", value: "", placeholder: "MGabc123abc123abc123abc123abc123" },
  ],
  headerParams: [
    { key: "Content-Type", value: "application/x-www-form-urlencoded" },
  ],
  authParams: [
    { key: "username", value: "", placeholder: "Account SID or API Key SID" },
    { key: "password", value: "", placeholder: "AuthToken or API Key Secret" },
  ],
}
