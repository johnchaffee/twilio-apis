apiParams = {
  url: "https://api.twilio.com/2010-04-01/Accounts/{{AccountSid}}/Addresses/{{AddressSid}}.json",
  method: "GET",
  pathParams: [
    { key: "AccountSid", value: "{{AccountSid}}" },
    { key: "AddressSid", value: "{{AddressSid}}" },
  ],
  queryParams: [],
  headerParams: [],
  authParams: [
    { key: "username", value: "{{AccountSid}}" },
    { key: "password", value: "{{AuthToken}}" },
  ],
}