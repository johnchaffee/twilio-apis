apiParams = {
  url: "https://api.twilio.com/2010-04-01/Accounts/{{AccountSid}}/Addresses/{{AddressSid}}.json",
  method: "POST",
  pathParams: [
    { key: "AccountSid", value: "" },
    { key: "AddressSid", value: "" },
  ],
  queryParams: [
    { key: "CustomerName", value: "ChafCo" },
    { key: "Street", value: "4830 NE Dotson Loop" },
  ],
  headerParams: [
    { key: "Content-Type", value: "application/x-www-form-urlencoded" },
  ],
  authParams: [
    { key: "username", value: "", placeholder: "Enter AccountSID or API Key SID" },
    { key: "password", value: "", placeholder: "Enter AuthToken or API Key Secret" },
  ],
}
