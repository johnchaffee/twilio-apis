postmanParams = {
  url: "https://preview.twilio.com/Numbers/ActiveNumbers/{{PhoneNumberSid}}",
  method: "POST",
  pathParams: [{ key: "PhoneNumberSid", value: "{{PhoneNumberSid}}" }],
  queryParams: [
    { key: "AccountSid", value: "{{SubAccountSid}}" },
  ],
  headerParams: [],
  authParams: [
    { key: "username", value: "{{Username}}" },
    { key: "password", value: "{{Password}}" },
  ],
}