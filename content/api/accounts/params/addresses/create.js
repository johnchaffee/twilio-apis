apiParams = {
  url: "https://api.twilio.com/2010-04-01/Accounts/{{AccountSid}}/Addresses.json",
  method: "POST",
  pathParams: [{ key: "AccountSid", value: "" }],
  queryParams: [
    { key: "CustomerName", value: "" },
    { key: "Street", value: "" },
    { key: "City", value: "" },
    { key: "Region", value: "" },
    { key: "PostalCode", value: "" },
    { key: "IsoCountry", value: "" },
  ],
  headerParams: [
    { key: "Content-Type", value: "application/x-www-form-urlencoded" },
  ],
  authParams: [
    { key: "username", value: "", placeholder: "Enter AccountSID or API Key SID" },
    { key: "password", value: "", placeholder: "Enter AuthToken or API Key Secret" },
  ],
}
