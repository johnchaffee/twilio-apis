apiParams = {
  url: "https://preview.twilio.com/HostedNumbers/HostedNumberOrders",
  method: "POST",
  pathParams: [],
  queryParams: [
    { key: "PhoneNumber", value: "" },
    { key: "SmsCapability", value: "true" },
    { key: "FriendlyName", value: "", placeholder: "My Hosted Phone Number" },
    { key: "StatusCallbackUrl", value: "" },
    { key: "StatusCallbackMethod", value: "POST" },
  ],
  headerParams: [],
  authParams: [
    { key: "username", value: "", placeholder: "Enter AccountSID or API Key SID" },
    { key: "password", value: "", placeholder: "Enter AuthToken or API Key Secret" },
  ],
}
