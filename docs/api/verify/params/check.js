apiParams = {
  url: "https://verify.twilio.com/v2/Services/{{VerificationServiceSid}}/VerificationCheck",
  method: "POST",
  pathParams: [
    { key: "VerificationServiceSid", value: "", placeholder: "VAabc123abc123abc123abc123abc123" },
  ],
  queryParams: [
    { key: "To", value: "", placeholder: "+1234567890" },
    { key: "Code", value: "", placeholder: "123456" },
  ],
  headerParams: [
    { key: "Content-Type", value: "application/x-www-form-urlencoded" },
  ],
  authParams: [
    { key: "username", value: "", placeholder: "Account SID or API Key SID" },
    { key: "password", value: "", placeholder: "AuthToken or API Key Secret" },
  ],
}
