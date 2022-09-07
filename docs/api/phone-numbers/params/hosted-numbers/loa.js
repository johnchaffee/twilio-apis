apiParams = {
  url: "https://preview.twilio.com/HostedNumbers/AuthorizationDocuments",
  method: "POST",
  pathParams: [],
  queryParams: [
    {
      key: "HostedNumberOrderSids",
      value: "",
    },
    {
      key: "AddressSid",
      value: "",
      placeholder: "ADabc123abc123abc123abc123abc123",
    },
    { key: "ContactTitle", value: "", placeholder: "President" },
    { key: "ContactPhoneNumber", value: "", placeholder: "+1234567890" },
    { key: "Email", value: "", placeholder: "owner@example.com" },
    {
      key: "CcEmails",
      value: "",
      placeholder: "person1@example.com&CcEmails=person2@example.com",
    },
  ],
  headerParams: [],
  authParams: [
    { key: "username", value: "", placeholder: "Account SID or API Key SID" },
    { key: "password", value: "", placeholder: "AuthToken or API Key Secret" },
  ],
}
