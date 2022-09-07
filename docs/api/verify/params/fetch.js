apiParams = {
  url: "https://verify.twilio.com/v2/Services/{{VerificationServiceSid}}",
  method: "GET",
  pathParams: [
    { key: "VerificationServiceSid", value: "", placeholder: "VAabc123abc123abc123abc123abc123" },
  ],
  queryParams: [],
  headerParams: [
    { key: "Content-Type", value: "application/x-www-form-urlencoded" },
  ],
  authParams: [
    { key: "username", value: "", placeholder: "Account SID or API Key SID" },
    { key: "password", value: "", placeholder: "AuthToken or API Key Secret" },
  ],
}
