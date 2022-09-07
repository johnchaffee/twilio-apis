apiParams = {
  url: "https://api.twilio.com/2010-04-01/Accounts/{{AccountSid}}/Addresses.json",
  method: "GET",
  pathParams: [{ key: "AccountSid", value: "", placeholder: "ACabc123abc123abc123abc123abc123" }],
  queryParams: [
    { key: "CustomerName", value: "", placeholder: "Acme Corp" },
    { key: "PageSize", value: "", placeholder: "10" },
  ],
  headerParams: [],
  authParams: [
    { key: "username", value: "", placeholder: "Account SID or API Key SID" },
    { key: "password", value: "", placeholder: "AuthToken or API Key Secret" },
  ],
}
