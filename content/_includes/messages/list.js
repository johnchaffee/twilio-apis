postmanParams = {
  url: "https://api.twilio.com/2010-04-01/Accounts/{{AccountSid}}/Messages.json",
  method: "GET",
  pathParams: [
    { key: "AccountSid", value: "{{AccountSid}}" },
  ],
  queryParams: [
    { key: "To", value: "" },
    { key: "From", value: "" },
    { key: "DateSent", value: "" },
    { key: "PageSize", value: "2" },
  ],
  headerParams: [],
  authParams: [
    { key: "username", value: "{{Username}}" },
    { key: "password", value: "{{Password}}" },
  ],
}
