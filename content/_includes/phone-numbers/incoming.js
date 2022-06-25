postmanParams = {
  url: "https://api.twilio.com/2010-04-01/Accounts/{{AccountSid}}/IncomingPhoneNumbers.json",
  method: "GET",
  pathParams: [
    { key: "AccountSid", value: "{{AccountSid}}" },
  ],
  queryParams: [],
  headerParams: [],
  authParams: [
    { key: "username", value: "{{Username}}" },
    { key: "password", value: "{{Password}}" },
  ],
}