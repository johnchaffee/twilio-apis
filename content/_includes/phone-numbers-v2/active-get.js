postmanParams = {
  url: "https://preview.twilio.com/Numbers/ActiveNumbers/{{PhoneNumberSid}}",
  method: "GET",
  pathParams: [{ key: "PhoneNumberSid", value: "{{PhoneNumberSid}}" }],
  queryParams: [],
  headerParams: [],
  authParams: [
    { key: "username", value: "{{Username}}" },
    { key: "password", value: "{{Password}}" },
  ],
}
