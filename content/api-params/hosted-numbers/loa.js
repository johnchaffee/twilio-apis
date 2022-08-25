apiParams = {
  url: "https://preview.twilio.com/HostedNumbers/AuthorizationDocuments",
  method: "POST",
  pathParams: [],
  queryParams: [
    {
      key: "HostedNumberOrderSids",
      value: "{{HostedNumberSid}}",
    },
    { key: "AddressSid", value: "{{AddressSid}}" },
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
    { key: "username", value: "{{AccountSid}}" },
    { key: "password", value: "{{AuthToken}}" },
  ],
}
