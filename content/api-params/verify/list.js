postmanParams = {
  url: "https://verify.twilio.com/v2/Services",
  method: "GET",
  pathParams: [],
  queryParams: [],
  headerParams: [
    { key: "Content-Type", value: "application/x-www-form-urlencoded" },
  ],
  authParams: [
    { key: "username", value: "{{AccountSid}}" },
    { key: "password", value: "{{AuthToken}}" },
  ],
}
