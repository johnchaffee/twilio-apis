apiParams = {
  url: "https://verify.twilio.com/v2/Services/{{VerificationServiceSid}}",
  method: "DELETE",
  pathParams: [
    { key: "VerificationServiceSid", value: "" },
  ],
  queryParams: [],
  headerParams: [
    { key: "Content-Type", value: "application/x-www-form-urlencoded" },
  ],
  authParams: [
    { key: "username", value: "", placeholder: "Enter AccountSID or API Key SID" },
    { key: "password", value: "", placeholder: "Enter AuthToken or API Key Secret" },
  ],
}
