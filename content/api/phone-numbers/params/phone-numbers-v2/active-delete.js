apiParams = {
  url: "https://preview.twilio.com/Numbers/ActiveNumbers/{{PhoneNumberSid}}",
  method: "DELETE",
  pathParams: [{ key: "PhoneNumberSid", value: "{{PhoneNumberSid}}" }],
  queryParams: [],
  headerParams: [],
  authParams: [
    { key: "username", value: "{{AccountSid}}" },
    { key: "password", value: "{{AuthToken}}" },
  ],
}
