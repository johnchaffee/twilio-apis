postmanParams = {
  url: "https://api.twilio.com/2010-04-01/Accounts/{{AccountSid}}/Messages/{{MessageSid}}.json",
  method: "DELETE",
  pathParams: [
    { key: "AccountSid", value: "{{AccountSid}}" },
    { key: "MessageSid", value: "{{MessageSid}}" },
  ],
  queryParams: [],
  headerParams: [],
  authParams: [
    { key: "username", value: "{{Username}}" },
    { key: "password", value: "{{Password}}" },
  ],
}