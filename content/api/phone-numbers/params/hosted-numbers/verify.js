apiParams = {
  url: "https://preview.twilio.com/HostedNumbers/HostedNumberOrders/{{HostedNumberSid}}",
  method: "POST",
  pathParams: [{ key: "HostedNumberSid", value: "{{HostedNumberSid}}" }],
  queryParams: [
    { key: "VerificationType", value: "phone-call" },
    { key: "Status", value: "pending-verification" },
  ],
  headerParams: [],
  authParams: [
    { key: "username", value: "{{AccountSid}}" },
    { key: "password", value: "{{AuthToken}}" },
  ],
}
