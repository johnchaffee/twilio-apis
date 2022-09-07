apiParams = {
  url: "https://preview.twilio.com/HostedNumbers/HostedNumberOrders/{{HostedNumberSid}}",
  method: "POST",
  pathParams: [{ key: "HostedNumberSid", value: "", placeholder: "HRabc123abc123abc123abc123abc123" }],
  queryParams: [
    { key: "VerificationType", value: "", placeholder: "phone-call" },
    { key: "Status", value: "", placeholder: "pending-verification" },
  ],
  headerParams: [],
  authParams: [
    { key: "username", value: "", placeholder: "Account SID or API Key SID" },
    { key: "password", value: "", placeholder: "AuthToken or API Key Secret" },
  ],
}
