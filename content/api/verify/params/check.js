apiParams = {
  url: "https://verify.twilio.com/v2/Services/{{VerificationServiceSid}}/VerificationCheck",
  method: "POST",
  pathParams: [
    { key: "VerificationServiceSid", value: "" },
  ],
  queryParams: [
    { key: "To", value: "" },
    { key: "Code", value: "123456" },
  ],
  headerParams: [
    { key: "Content-Type", value: "application/x-www-form-urlencoded" },
  ],
  authParams: [
    { key: "username", value: "", placeholder: "Enter AccountSID or API Key SID" },
    { key: "password", value: "", placeholder: "Enter AuthToken or API Key Secret" },
  ],
}
