apiParams = {
  url: "https://api.twilio.com/2010-04-01/Accounts/{{AccountSid}}/Addresses.json",
  method: "POST",
  pathParams: [{ key: "AccountSid", value: "", placeholder: "ACabc123abc123abc123abc123abc123" }],
  queryParams: [
    { key: "CustomerName", value: "", placeholder: "Acme Corp" },
    { key: "Street", value: "", placeholder: "123 Main street" },
    { key: "City", value: "", placeholder: "San Francisco" },
    { key: "Region", value: "", placeholder: "CA" },
    { key: "PostalCode", value: "", placeholder: "94123" },
    { key: "IsoCountry", value: "", placeholder: "US" },
  ],
  headerParams: [
    { key: "Content-Type", value: "application/x-www-form-urlencoded" },
  ],
  authParams: [
    { key: "username", value: "", placeholder: "Account SID or API Key SID" },
    { key: "password", value: "", placeholder: "AuthToken or API Key Secret" },
  ],
}
