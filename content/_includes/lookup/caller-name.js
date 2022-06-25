postmanParams = {
  url: "https://lookups.twilio.com/v1/PhoneNumbers/{{Number}}",
  method: "GET",
  pathParams: [{ key: "Number", value: "(206) 399-6576" }],
  queryParams: [{ key: "Type", value: "caller-name" }],
  headerParams: [],
  authParams: [
    { key: "username", value: "{{Username}}" },
    { key: "password", value: "{{Password}}" },
  ],
}
