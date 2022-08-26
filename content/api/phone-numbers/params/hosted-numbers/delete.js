apiParams = {
  url: "https://api.twilio.com/2010-04-01/Accounts/{{AccountSid}}/IncomingPhoneNumbers/{{PhoneNumberSid}}.json",
  method: "DELETE",
  pathParams: [
    { key: "AccountSid", value: "{{AccountSid}}" },
    { key: "PhoneNumberSid", value: "{{PhoneNumberSid}}" },
  ],
  queryParams: [],
  headerParams: [],
  authParams: [
    { key: "username", value: "{{AccountSid}}" },
    { key: "password", value: "{{AuthToken}}" },
  ],
}
