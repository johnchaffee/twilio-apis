postmanParams = {
  url: "https://preview.twilio.com/Numbers/ActiveNumbers/{{PhoneNumberSid}}",
  method: "DELETE",
  pathParams: [{ key: "PhoneNumberSid", value: "{{PhoneNumberSid}}" }],
  queryParams: [],
  headerParams: [],
  authParams: [
    { key: "username", value: "{{Username}}" },
    { key: "password", value: "{{Password}}" },
  ],
}
