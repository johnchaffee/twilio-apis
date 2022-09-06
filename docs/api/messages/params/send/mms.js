apiParams = {
  url: "https://api.twilio.com/2010-04-01/Accounts/{{AccountSid}}/Messages.json",
  method: "POST",
  pathParams: [
    { key: "AccountSid", value: "" },
  ],
  queryParams: [
    { key: "To", value: "" },
    { key: "From", value: "" },
    { key: "Body", value: "This is the ship that made the Kessel Run in fourteen parsecs?" },
    { key: "MediaUrl", value: "https://c1.staticflickr.com/3/2899/14341091933_1e92e62d12_b.jpg" },
    { key: "StatusCallback", value: "" },
    { key: "MessagingServiceSid", value: "" },
  ],
  headerParams: [
    { key: "Content-Type", value: "application/x-www-form-urlencoded" },
  ],
  authParams: [
    { key: "username", value: "", placeholder: "Enter AccountSID or API Key SID" },
    { key: "password", value: "", placeholder: "Enter AuthToken or API Key Secret" },
  ],
}