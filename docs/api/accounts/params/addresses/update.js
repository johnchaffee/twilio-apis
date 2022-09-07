apiParams = {
  url: "https://api.twilio.com/2010-04-01/Accounts/{{AccountSid}}/Addresses/{{AddressSid}}.json",
  method: "POST",
  pathParams: [
    { key: "AccountSid", value: "", placeholder: "ACabc123abc123abc123abc123abc123" },
    { key: "AddressSid", value: "", placeholder: "ADabc123abc123abc123abc123abc123" },
  ],
  queryParams: [
    { key: "CustomerName", value: "", placeholder: "Acme Corp" },
    { key: "Street", value: "", placeholder: "123 Main street" },
  ],
  headerParams: [
    { key: "Content-Type", value: "application/x-www-form-urlencoded" },
  ],
  authParams: [
    { key: "username", value: "", placeholder: "Account SID or API Key SID" },
    { key: "password", value: "", placeholder: "AuthToken or API Key Secret" },
  ],
}
