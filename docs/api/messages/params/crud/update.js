apiParams = {
  url: "https://api.twilio.com/2010-04-01/Accounts/{{AccountSid}}/Messages/{{MessageSid}}.json",
  method: "POST",
  pathParams: [
    { key: "AccountSid", value: "{{AccountSid}}" },
    { key: "MessageSid", value: "{{MessageSid}}" },
  ],
  queryParams: [{ key: "Body", value: " " }],
  headerParams: [
    { key: "Content-Type", value: "application/x-www-form-urlencoded" },
  ],
  authParams: [
    { key: "username", value: "{{AccountSid}}" },
    { key: "password", value: "{{AuthToken}}" },
  ],
}
