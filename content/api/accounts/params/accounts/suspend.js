apiParams = {
  url: "https://api.twilio.com/2010-04-01/Accounts/{{SubAccountSid}}.json",
  method: "POST",
  pathParams: [{ key: "SubAccountSid",  value: "", placeholder: "ACabc123abc123abc123abc123abc123" }],
  queryParams: [{ key: "Status", value: "suspended", placeholder: "suspended" }],
  headerParams: [
    { key: "Content-Type", value: "application/x-www-form-urlencoded" },
  ],
  authParams: [
    { key: "username", value: "", placeholder: "Account SID or API Key SID" },
    { key: "password", value: "", placeholder: "AuthToken or API Key Secret" },
  ],
}
