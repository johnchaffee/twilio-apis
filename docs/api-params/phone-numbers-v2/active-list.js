apiParams = {
  url: "https://preview.twilio.com/Numbers/ActiveNumbers/",
  method: "GET",
  pathParams: [],
  queryParams: [
    { key: "PhoneNumber", value: "+18336451195" },
    { key: "Geography.IsoCountry", value: "US" },
    { key: "Type", value: "" },
  ],
  headerParams: [],
  authParams: [
    { key: "username", value: "{{AccountSid}}" },
    { key: "password", value: "{{AuthToken}}" },
  ],
}