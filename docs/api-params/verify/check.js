postmanParams = {
  url: "https://verify.twilio.com/v2/Services/{{VerificationServiceSid}}/VerificationCheck",
  method: "POST",
  pathParams: [
    { key: "VerificationServiceSid", value: "{{VerificationServiceSid}}" },
  ],
  queryParams: [
    { key: "To", value: "+12063996576" },
    { key: "Code", value: "123456" },
  ],
  headerParams: [
    { key: "Content-Type", value: "application/x-www-form-urlencoded" },
  ],
  authParams: [
    { key: "username", value: "{{AccountSid}}" },
    { key: "password", value: "{{AuthToken}}" },
  ],
}
