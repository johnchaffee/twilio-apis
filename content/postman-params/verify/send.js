postmanParams = {
  url: "https://verify.twilio.com/v2/Services/{{VerificationServiceSid}}/Verifications",
  method: "POST",
  pathParams: [
    { key: "VerificationServiceSid", value: "{{VerificationServiceSid}}" },
  ],
  queryParams: [
    { key: "To", value: "+12063996576" },
    { key: "Channel", value: "sms" },
    { key: "Locale", value: "" },
  ],
  headerParams: [
    { key: "Content-Type", value: "application/x-www-form-urlencoded" },
  ],
  authParams: [
    { key: "username", value: "{{AccountSid}}" },
    { key: "password", value: "{{AuthToken}}" },
  ],
}
