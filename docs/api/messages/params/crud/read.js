apiParams = {
  url: "https://api.twilio.com/2010-04-01/Accounts/{{AccountSid}}/Messages/{{MessageSid}}.json",
  method: "GET",
  pathParams: [
    { key: "AccountSid", value: "{{AccountSid}}" },
    { key: "MessageSid", value: "{{MessageSid}}" },
  ],
  queryParams: [],
  headerParams: [],
  authParams: [
    { key: "username", value: "{{AccountSid}}" },
    { key: "password", value: "{{AuthToken}}" },
  ],
}
