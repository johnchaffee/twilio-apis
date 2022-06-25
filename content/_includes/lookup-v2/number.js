postmanParams = {
  url: "https://lookups.twilio.com/v2/PhoneNumbers/{{Number}}",
  method: "GET",
  pathParams: [{ key: "Number", value: "(206) 399-6576" }],
  queryParams: [],
  headerParams: [],
  authParams: [
    { key: "username", value: "{{Username}}" },
    { key: "password", value: "{{Password}}" },
  ],
}