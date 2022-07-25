postmanParams = {
  url: "https://lookups.twilio.com/v1/PhoneNumbers/{{Number}}",
  method: "GET",
  pathParams: [{ key: "Number", value: "(206) 399-6576" }],
  queryParams: [{ key: "CountryCode", value: "" }],
  headerParams: [],
  authParams: [
    { key: "username", value: "{{AccountSid}}" },
    { key: "password", value: "{{AuthToken}}" },
  ],
}
