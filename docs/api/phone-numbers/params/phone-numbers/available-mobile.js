apiParams = {
  url: "https://api.twilio.com/2010-04-01/Accounts/{{AccountSid}}/AvailablePhoneNumbers/{{CountryCode}}/Mobile.json",
  method: "GET",
  pathParams: [
    { key: "AccountSid", value: "", placeholder: "ACabc123abc123abc123abc123abc123" },
    { key: "CountryCode", value: "", placeholder: "US" },
  ],
  queryParams: [
    { key: "SmsEnabled", value: "", placeholder: "True" },
    { key: "VoiceEnabled", value: "", placeholder: "True" },
    { key: "AreaCode", value: "", placeholder: "206" },
  ],
  headerParams: [],
  authParams: [
    { key: "username", value: "", placeholder: "Account SID or API Key SID" },
    { key: "password", value: "", placeholder: "AuthToken or API Key Secret" },
  ],
}
