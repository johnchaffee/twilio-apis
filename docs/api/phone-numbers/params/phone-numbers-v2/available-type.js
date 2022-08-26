apiParams = {
  url: "https://preview.twilio.com/Numbers/AvailableNumbers/",
  method: "GET",
  pathParams: [],
  queryParams: [
    { key: "Geography.IsoCountry", value: "US" },
    { key: "Type", value: "local" },
    { key: "PageSize", value: "5" },
  ],
  headerParams: [],
  authParams: [
    { key: "username", value: "{{AccountSid}}" },
    { key: "password", value: "{{AuthToken}}" },
  ],
}
