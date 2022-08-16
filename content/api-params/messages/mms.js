postmanParams = {
  url: "https://api.twilio.com/2010-04-01/Accounts/{{AccountSid}}/Messages.json",
  method: "POST",
  pathParams: [
    { key: "AccountSid", value: "{{AccountSid}}" },
  ],
  queryParams: [
    { key: "To", value: "+12063996576" },
    { key: "From", value: "{{From}}" },
    { key: "Body", value: "This is the ship that made the Kessel Run in fourteen parsecs?" },
    { key: "MediaUrl", value: "https://c1.staticflickr.com/3/2899/14341091933_1e92e62d12_b.jpg" },
    { key: "StatusCallback", value: "{{StatusCallback}}" },
    { key: "MessagingServiceSid", value: "" },
  ],
  headerParams: [
    { key: "Content-Type", value: "application/x-www-form-urlencoded" },
  ],
  authParams: [
    { key: "username", value: "{{AccountSid}}" },
    { key: "password", value: "{{AuthToken}}" },
  ],
}