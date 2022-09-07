apiParams = {
  url: "https://api.twilio.com/2010-04-01/Accounts/{{AccountSid}}/IncomingPhoneNumbers.json",
  method: "GET",
  pathParams: [
    { key: "AccountSid", value: "", placeholder: "ACabc123abc123abc123abc123abc123" },
  ],
  queryParams: [],
  headerParams: [],
  authParams: [
    { key: "username", value: "", placeholder: "Account SID or API Key SID" },
    { key: "password", value: "", placeholder: "AuthToken or API Key Secret" },
  ],
}