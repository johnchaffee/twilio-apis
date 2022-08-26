apiParams = {
  url: "https://api.twilio.com/2010-04-01/Accounts/{{SubAccountSid}}.json",
  method: "POST",
  pathParams: [{ key: "SubAccountSid", value: "{{SubAccountSid}}" }],
  queryParams: [{ key: "Status", value: "active" }],
  headerParams: [
    { key: "Content-Type", value: "application/x-www-form-urlencoded" },
  ],
  authParams: [
    { key: "username", value: "{{AccountSid}}" },
    { key: "password", value: "{{AuthToken}}" },
  ],
}