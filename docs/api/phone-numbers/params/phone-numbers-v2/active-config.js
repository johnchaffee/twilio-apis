apiParams = {
  url: "https://preview.twilio.com/Numbers/ActiveNumbers/{{PhoneNumberSid}}",
  method: "POST",
  pathParams: [{ key: "PhoneNumberSid", value: "" }],
  queryParams: [
    { key: "Configurations.FriendlyName", value: "" },
    { key: "Configurations.Sms.Url", value: "" },
    { key: "Configurations.Sms.Method", value: "" },
  ],
  headerParams: [],
  authParams: [
    { key: "username", value: "" },
    { key: "password", value: "" },
  ],
}
