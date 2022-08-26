apiParams = {
  url: "https://preview.twilio.com/HostedNumbers/HostedNumberOrders/{{HostedNumberSid}}",
  method: "GET",
  pathParams: [{ key: "HostedNumberSid", value: "" }],
  queryParams: [],
  headerParams: [],
  authParams: [
    { key: "username", value: "", placeholder: "Enter AccountSID or API Key SID" },
    { key: "password", value: "", placeholder: "Enter AuthToken or API Key Secret" },
  ],
}
