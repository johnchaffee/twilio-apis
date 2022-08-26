apiParams = {
  url: "https://api.twilio.com/2010-04-01/Accounts/{{AccountSid}}/AvailablePhoneNumbers/{{CountryCode}}/Mobile.json",
  method: "GET",
  pathParams: [
    { key: "AccountSid", value: "" },
    { key: "CountryCode", value: "" },
  ],
  queryParams: [
    { key: "SmsEnabled", value: "True" },
    { key: "VoiceEnabled", value: "True" },
    { key: "AreaCode", value: "" },
  ],
  headerParams: [],
  authParams: [
    { key: "username", value: "", placeholder: "Enter AccountSID or API Key SID" },
    { key: "password", value: "", placeholder: "Enter AuthToken or API Key Secret" },
  ],
}
