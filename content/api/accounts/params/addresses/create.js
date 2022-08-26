apiParams = {
  url: "https://api.twilio.com/2010-04-01/Accounts/{{AccountSid}}/Addresses.json",
  method: "POST",
  pathParams: [{ key: "AccountSid", value: "{{AccountSid}}" }],
  queryParams: [
    { key: "CustomerName", value: "ChafCo" },
    { key: "Street", value: "4830 NE Dotson Loop" },
    { key: "City", value: "Bainbridge Island" },
    { key: "Region", value: "WA" },
    { key: "PostalCode", value: "98110" },
    { key: "IsoCountry", value: "US" },
  ],
  headerParams: [
    { key: "Content-Type", value: "application/x-www-form-urlencoded" },
  ],
  authParams: [
    { key: "username", value: "{{AccountSid}}" },
    { key: "password", value: "{{AuthToken}}" },
  ],
}
