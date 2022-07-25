postmanParams = {
  url: "https://verify.twilio.com/v2/Services/{{VerificationServiceSid}}",
  method: "DELETE",
  pathParams: [
    { key: "VerificationServiceSid", value: "{{VerificationServiceSid}}" },
  ],
  queryParams: [],
  headerParams: [
    { key: "Content-Type", value: "application/x-www-form-urlencoded" },
  ],
  authParams: [
    { key: "username", value: "{{AccountSid}}" },
    { key: "password", value: "{{AuthToken}}" },
  ],
}
