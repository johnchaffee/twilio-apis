apiParams = {
  url: "https://api.twilio.com/2010-04-01/Accounts/{{AccountSid}}/Addresses.json",
  method: "GET",
  pathParams: [{ key: "AccountSid", value: "{{AccountSid}}" }],
  queryParams: [{ key: "CustomerName", value: "ChafCo" }],
  headerParams: [],
  authParams: [
    { key: "username", value: "{{AccountSid}}" },
    { key: "password", value: "{{AuthToken}}" },
  ],
}
