apiParams = {
  url: "https://api.twilio.com/2010-04-01/Accounts/{{AccountSid}}/Messages/{{MessageSid}}/Feedback.json",
  method: "POST",
  pathParams: [
    { key: "AccountSid", value: "", placeholder: "ACabc123abc123abc123abc123abc123" },
    { key: "MessageSid", value: "", placeholder: "SMabc123abc123abc123abc123abc123" },
  ],
  queryParams: [{ key: "Outcome", value: "confirmed", placeholder: "confirmed" }],
  headerParams: [
    { key: "Content-Type", value: "application/x-www-form-urlencoded" },
  ],
  authParams: [
    { key: "username", value: "", placeholder: "Account SID or API Key SID" },
    { key: "password", value: "", placeholder: "AuthToken or API Key Secret" },
  ],
}
