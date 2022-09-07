apiParams = {
  url: "https://preview.twilio.com/Numbers/AvailableNumbers/",
  method: "GET",
  pathParams: [],
  queryParams: [
    { key: "Geography.IsoCountry", value: "", placeholder: "US" },
    {
      key: "Capabilities.Sms.OutboundConnectivity",
      value: "",
      placeholder: "true",
    },
    {
      key: "Capabilities.Sms.InboundConnectivity",
      value: "",
      placeholder: "true",
    },
    {
      key: "Capabilities.Sms.InboundSenderIdPreservation",
      value: "",
      placeholder: "international",
    },
  ],
  headerParams: [],
  authParams: [
    { key: "username", value: "", placeholder: "Account SID or API Key SID" },
    { key: "password", value: "", placeholder: "AuthToken or API Key Secret" },
  ],
}
