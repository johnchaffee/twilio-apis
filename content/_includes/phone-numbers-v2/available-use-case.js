postmanParams = {
  url: "https://preview.twilio.com/Numbers/AvailableNumbers/",
  method: "GET",
  pathParams: [],
  queryParams: [
    { key: "Geography.IsoCountry", value: "US" },
    { key: "SavedSearch", value: "twilio.use-case.notifications.sms" },
  ],
  headerParams: [],
  authParams: [
    { key: "username", value: "{{Username}}" },
    { key: "password", value: "{{Password}}" },
  ],
}
