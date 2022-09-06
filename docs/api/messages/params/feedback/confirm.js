apiParams = {
  url: "https://api.twilio.com/2010-04-01/Accounts/{{AccountSid}}/Messages/{{MessageSid}}/Feedback.json",
  method: "POST",
  pathParams: [
    { key: "AccountSid", value: "" },
    { key: "MessageSid", value: "" },
  ],
  queryParams: [{ key: "Outcome", value: "confirmed" }],
  headerParams: [
    { key: "Content-Type", value: "application/x-www-form-urlencoded" },
  ],
  authParams: [
    { key: "username", value: "", placeholder: "Enter AccountSID or API Key SID" },
    { key: "password", value: "", placeholder: "Enter AuthToken or API Key Secret" },
  ],
}
