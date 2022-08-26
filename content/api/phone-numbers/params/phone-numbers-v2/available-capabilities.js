apiParams = {
  url: "https://preview.twilio.com/Numbers/AvailableNumbers/",
  method: "GET",
  pathParams: [],
  queryParams: [
    { key: "Geography.IsoCountry", value: "US" },
    { key: "Capabilities.Sms.OutboundConnectivity", value: "true" },
    { key: "Capabilities.Sms.InboundConnectivity", value: "true" },
    {
      key: "Capabilities.Sms.InboundSenderIdPreservation",
      value: "international",
    },
  ],
  headerParams: [],
  authParams: [
    { key: "username", value: "", placeholder: "Enter AccountSID or API Key SID" },
    { key: "password", value: "", placeholder: "Enter AuthToken or API Key Secret" },
  ],
}
