apiParams = {
  url: "https://api.twilio.com/2010-04-01/Accounts/{{AccountSid}}/Messages.json",
  method: "POST",
  pathParams: [
    { key: "AccountSid", value: "", placeholder: "ACabc123abc123abc123abc123abc123" },
  ],
  queryParams: [
    { key: "To", value: "", placeholder: "whatsapp:+1234567890" },
    { key: "From", value: "whatsapp:+14155238886", placeholder: "whatsapp:+14155238886" },
    { key: "Body", value: "Your appointment is coming up on July 21 at 3PM" },
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
