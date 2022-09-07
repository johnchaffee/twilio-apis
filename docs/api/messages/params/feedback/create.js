apiParams = {
  url: "https://api.twilio.com/2010-04-01/Accounts/{{AccountSid}}/Messages.json",
  method: "POST",
  pathParams: [
    { key: "AccountSid", value: "", placeholder: "ACabc123abc123abc123abc123abc123" },
  ],
  queryParams: [
    { key: "To", value: "", placeholder: "+1234567890" },
    { key: "From", value: "", placeholder: "+1234567890" },
    { key: "Body", value: "", placeholder: "Hello World!" },
    { key: "ProvideFeedback", value: "true", placeholder: "true" },
  ],
  headerParams: [
    { key: "Content-Type", value: "application/x-www-form-urlencoded" },
  ],
  authParams: [
    { key: "username", value: "", placeholder: "Account SID or API Key SID" },
    { key: "password", value: "", placeholder: "AuthToken or API Key Secret" },
  ],
}
