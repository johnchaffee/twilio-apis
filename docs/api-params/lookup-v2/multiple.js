apiParams = {
  url: "https://lookups.twilio.com/v2/PhoneNumbers/{{Number}}",
  method: "GET",
  pathParams: [{ key: "Number", value: "(206) 399-6576" }],
  queryParams: [
    { key: "Fields", value: "line_type_intelligence,caller_name" },
  ],
  headerParams: [],
  authParams: [
    { key: "username", value: "{{AccountSid}}" },
    { key: "password", value: "{{AuthToken}}" },
  ],
}
