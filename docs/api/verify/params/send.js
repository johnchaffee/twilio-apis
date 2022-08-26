apiParams = {
  url: "https://verify.twilio.com/v2/Services/{{VerificationServiceSid}}/Verifications",
  method: "POST",
  pathParams: [
    { key: "VerificationServiceSid", value: "" },
  ],
  queryParams: [
    { key: "To", value: "" },
    { key: "Channel", value: "sms" },
    { key: "Locale", value: "" },
  ],
  headerParams: [
    { key: "Content-Type", value: "application/x-www-form-urlencoded" },
  ],
  authParams: [
    { key: "username", value: "" },
    { key: "password", value: "" },
  ],
}
