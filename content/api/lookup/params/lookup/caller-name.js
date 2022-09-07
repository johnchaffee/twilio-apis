apiParams = {
  url: "https://lookups.twilio.com/v1/PhoneNumbers/{{Number}}",
  method: "GET",
  pathParams: [{ key: "Number", value: "", placeholder: "+1234567890" }],
  queryParams: [{ key: "Type", value: "caller-name", placeholder: "caller-name" }],
  headerParams: [],
  authParams: [
    { key: "username", value: "", placeholder: "Account SID or API Key SID" },
    { key: "password", value: "", placeholder: "AuthToken or API Key Secret" },
  ],
}
