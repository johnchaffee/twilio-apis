apiParams = {
  url: "https://api.twilio.com/2010-04-01/Accounts/{{AccountSid}}/AvailablePhoneNumbers/{{CountryCode}}/TollFree.json",
  method: "GET",
  pathParams: [
    { key: "AccountSid", value: "{{AccountSid}}" },
    { key: "CountryCode", value: "US" },
  ],
  queryParams: [
    { key: "SmsEnabled", value: "True" },
    { key: "VoiceEnabled", value: "True" },
    { key: "AreaCode", value: "" },
  ],
  headerParams: [],
  authParams: [
    { key: "username", value: "{{AccountSid}}" },
    { key: "password", value: "{{AuthToken}}" },
  ],
}
