apiParams = {
  url: "https://api.twilio.com/2010-04-01/Accounts/{{SubAccountSid}}.json",
  method: "GET",
  pathParams: [{ key: "SubAccountSid", value: "{{SubAccountSid}}" }],
  queryParams: [],
  headerParams: [],
  authParams: [
    { key: "username", value: "{{AccountSid}}" },
    { key: "password", value: "{{AuthToken}}" },
  ],
}
