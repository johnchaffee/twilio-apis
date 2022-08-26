apiParams = {
  url: "https://api.twilio.com/2010-04-01/Accounts/{{AccountSid}}/Addresses/{{AddressSid}}/DependentPhoneNumbers.json",
  method: "GET",
  pathParams: [
    { key: "AccountSid", value: "" },
    { key: "AddressSid", value: "" },
  ],
  queryParams: [{ key: "PageSize", value: "" }],
  headerParams: [],
  authParams: [
    { key: "username", value: "" },
    { key: "password", value: "" },
  ],
}