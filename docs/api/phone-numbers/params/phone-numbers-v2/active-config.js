apiParams = {
  url: "https://preview.twilio.com/Numbers/ActiveNumbers/{{PhoneNumberSid}}",
  method: "POST",
  pathParams: [
    {
      key: "PhoneNumberSid",
      value: "",
      placeholder: "PNabc123abc123abc123abc123abc123",
    },
  ],
  queryParams: [
    {
      key: "Configurations.FriendlyName",
      value: "",
      placeholder: "My Twilio Number",
    },
    {
      key: "Configurations.Sms.Url",
      value: "",
      placeholder: "https://example.com",
    },
    {
      key: "Configurations.Sms.Method",
      value: "",
      placeholder: "POST",
    },
  ],
  headerParams: [],
  authParams: [
    { key: "username", value: "", placeholder: "Account SID or API Key SID" },
    { key: "password", value: "", placeholder: "AuthToken or API Key Secret" },
  ],
}
