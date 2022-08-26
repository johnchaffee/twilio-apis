apiParams = {
  url: "https://api.twilio.com/2010-04-01/Accounts/{{AccountSid}}/Messages.json",
  method: "POST",
  pathParams: [
    { key: "AccountSid", value: "" },
  ],
  queryParams: [
    { key: "To", value: "" },
    { key: "From", value: "" },
    { key: "Body", value: "" },
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
