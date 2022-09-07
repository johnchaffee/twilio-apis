apiParams = {
  url: "https://lookups.twilio.com/v2/PhoneNumbers/{{Number}}",
  method: "GET",
  pathParams: [{ key: "Number", value: "", placeholder: "+1234567890" }],
  queryParams: [
    { key: "Fields", value: "line_type_intelligence,caller_name", placeholder: "line_type_intelligence,caller_name" },
  ],
  headerParams: [],
  authParams: [
    { key: "username", value: "", placeholder: "Account SID or API Key SID" },
    { key: "password", value: "", placeholder: "AuthToken or API Key Secret" },
  ],
}
