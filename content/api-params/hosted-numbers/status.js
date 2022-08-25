apiParams = {
  url: "https://preview.twilio.com/HostedNumbers/HostedNumberOrders/{{HostedNumberSid}}",
  method: "GET",
  pathParams: [{ key: "HostedNumberSid", value: "{{HostedNumberSid}}" }],
  queryParams: [],
  headerParams: [],
  authParams: [
    { key: "username", value: "{{AccountSid}}" },
    { key: "password", value: "{{AuthToken}}" },
  ],
}
