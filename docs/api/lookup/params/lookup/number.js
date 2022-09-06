apiParams = {
  url: "https://lookups.twilio.com/v1/PhoneNumbers/{{Number}}",
  method: "GET",
  pathParams: [{ key: "Number", value: "" }],
  queryParams: [{ key: "CountryCode", value: "" }],
  headerParams: [],
  authParams: [
    { key: "username", value: "", placeholder: "Enter AccountSID or API Key SID" },
    { key: "password", value: "", placeholder: "Enter AuthToken or API Key Secret" },
  ],
}
