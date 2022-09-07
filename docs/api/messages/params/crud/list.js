apiParams = {
  url: "https://api.twilio.com/2010-04-01/Accounts/{{AccountSid}}/Messages.json",
  method: "GET",
  pathParams: [
    { key: "AccountSid", value: "", placeholder: "ACabc123abc123abc123abc123abc123" },
  ],
  queryParams: [
    { key: "To", value: "", placeholder: "+1234567890" },
    { key: "From", value: "", placeholder: "+1234567890" },
    { key: "DateSent", value: "", placeholder: "2022-09-15" },
    { key: "PageSize", value: "", placeholder: "10" },
  ],
  headerParams: [],
  authParams: [
    { key: "username", value: "", placeholder: "Account SID or API Key SID" },
    { key: "password", value: "", placeholder: "AuthToken or API Key Secret" },
  ],
}
