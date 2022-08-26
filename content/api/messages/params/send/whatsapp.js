apiParams = {
  url: "https://api.twilio.com/2010-04-01/Accounts/{{AccountSid}}/Messages.json",
  method: "POST",
  pathParams: [
    { key: "AccountSid", value: "" },
  ],
  queryParams: [
    { key: "To", value: "whatsapp:+12063996576" },
    { key: "From", value: "whatsapp:+14155238886" },
    { key: "Body", value: "Hello from WhatsApp!" },
    { key: "StatusCallback", value: "" },
    { key: "MessagingServiceSid", value: "" },
  ],
  headerParams: [
    { key: "Content-Type", value: "application/x-www-form-urlencoded" },
  ],
  authParams: [
    { key: "username", value: "" },
    { key: "password", value: "" },
  ],
}
