apiParams = {
  url: "https://preview.twilio.com/HostedNumbers/HostedNumberOrders/{{HostedNumberSid}}",
  method: "POST",
  pathParams: [{ key: "HostedNumberSid", value: "" }],
  queryParams: [
    { key: "VerificationType", value: "phone-call" },
    { key: "Status", value: "pending-verification" },
  ],
  headerParams: [],
  authParams: [
    { key: "username", value: "", placeholder: "Enter AccountSID or API Key SID" },
    { key: "password", value: "", placeholder: "Enter AuthToken or API Key Secret" },
  ],
}
