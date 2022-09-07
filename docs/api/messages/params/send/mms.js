apiParams = {
  url: "https://api.twilio.com/2010-04-01/Accounts/{{AccountSid}}/Messages.json",
  method: "POST",
  pathParams: [
    { key: "AccountSid", value: "", placeholder: "ACabc123abc123abc123abc123abc123" },
  ],
  queryParams: [
    { key: "To", value: "", placeholder: "+1234567890" },
    { key: "From", value: "", placeholder: "+1234567890" },
    { key: "Body", value: "This is the ship that made the Kessel Run in fourteen parsecs?" },
    { key: "MediaUrl", value: "https://c1.staticflickr.com/3/2899/14341091933_1e92e62d12_b.jpg" },
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