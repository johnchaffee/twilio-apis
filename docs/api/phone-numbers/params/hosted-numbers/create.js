apiParams = {
  url: "https://preview.twilio.com/HostedNumbers/HostedNumberOrders",
  method: "POST",
  pathParams: [],
  queryParams: [
    { key: "PhoneNumber", value: "" },
    { key: "SmsCapability", value: "true" },
    { key: "FriendlyName", value: "My Hosted Phone Number" },
    { key: "StatusCallbackUrl", value: "{{StatusCallback}}" },
    { key: "StatusCallbackMethod", value: "POST" },
  ],
  headerParams: [],
  authParams: [
    { key: "username", value: "{{AccountSid}}" },
    { key: "password", value: "{{AuthToken}}" },
  ],
}
