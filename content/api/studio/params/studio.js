apiParams = {
  url: "https://studio.twilio.com/v2/Flows/{{FlowSid}}/Executions",
  method: "POST",
  pathParams: [{ key: "FlowSid", value: "" }],
  queryParams: [
    { key: "To", value: "" },
    { key: "From", value: "" },
    {
      key: "Parameters",
      value: `{"applicant":"Fred","job":"ACME","recruiter":"John"}
    `,
    },
  ],
  headerParams: [
    { key: "Content-Type", value: "application/x-www-form-urlencoded" },
  ],
  authParams: [
    { key: "username", value: "" },
    { key: "password", value: "" },
  ],
}
