apiParams = {
  url: "https://api.twilio.com/2010-04-01/Accounts.json",
  method: "GET",
  pathParams: [{ key: "AccountSid", value: "{{AccountSid}}" }],
  queryParams: [
    { key: "Status", value: "active" },
    { key: "PageSize", value: "20" },
  ],
  headerParams: [],
  authParams: [
    { key: "username", value: "{{AccountSid}}" },
    { key: "password", value: "{{AuthToken}}" },
  ],
}
