apiParams = {
  url: "https://verify.twilio.com/v2/Services/{{VerificationServiceSid}}/VerificationCheck",
  method: "POST",
  pathParams: [
    { key: "VerificationServiceSid", value: "{{VerificationServiceSid}}" },
  ],
  queryParams: [
    { key: "To", value: "{{To}}" },
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
