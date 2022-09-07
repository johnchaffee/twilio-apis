apiParams = {
  url: "https://preview.twilio.com/HostedNumbers/HostedNumberOrders",
  method: "POST",
  pathParams: [],
  queryParams: [
    { key: "PhoneNumber", value: "", placeholder: "+1234567890" },
    { key: "SmsCapability", value: "", placeholder: "true" },
    { key: "FriendlyName", value: "", placeholder: "My Hosted Phone Number" },
    { key: "StatusCallbackUrl", value: "", placeholder: "https://example.com" },
    { key: "StatusCallbackMethod", value: "", placeholder: "POST" },
  ],
  headerParams: [],
  authParams: [
    { key: "username", value: "", placeholder: "Account SID or API Key SID" },
    { key: "password", value: "", placeholder: "AuthToken or API Key Secret" },
  ],
}
