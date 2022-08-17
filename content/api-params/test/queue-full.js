postmanParams = {
  url: "https://api.twilio.com/2010-04-01/Accounts/{{TestAccountSid}}/Messages.json",
  method: "POST",
  pathParams: [
    { key: "TestAccountSid", value: "{{TestAccountSid}}" },
  ],
  queryParams: [
    { key: "To", value: "{{To}}" },
    { key: "From", value: "+15005550008" },
    { key: "Body", value: "Ahoy there!" },
  ],
  headerParams: [
    { key: "Content-Type", value: "application/x-www-form-urlencoded" },
  ],
  authParams: [
    { key: "username", value: "{{TestUsername}}" },
    { key: "password", value: "{{TestPassword}}" },
  ],
}
