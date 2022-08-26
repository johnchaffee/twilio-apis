apiParams = {
  url: "https://preview.twilio.com/HostedNumbers/AuthorizationDocuments",
  method: "POST",
  pathParams: [],
  queryParams: [
    {
      key: "HostedNumberOrderSids",
      value: "",
    },
    { key: "AddressSid", value: "" },
    { key: "ContactTitle", value: "President" },
    { key: "ContactPhoneNumber", value: "+12063996576" },
    { key: "Email", value: "owner@example.com" },
    {
      key: "CcEmails",
      value: "person1@example.com&CcEmails=person2@example.com",
    },
  ],
  headerParams: [],
  authParams: [
    { key: "username", value: "", placeholder: "Enter AccountSID or API Key SID" },
    { key: "password", value: "", placeholder: "Enter AuthToken or API Key Secret" },
  ],
}
