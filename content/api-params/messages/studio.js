postmanParams = {
  url: "https://studio.twilio.com/v2/Flows/{{FlowSid}}/Executions",
  method: "POST",
  pathParams: [{ key: "FlowSid", value: "{{FlowSid}}" }],
  queryParams: [
    { key: "To", value: "+12063996576" },
    { key: "From", value: "{{From}}" },
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
    { key: "username", value: "{{AccountSid}}" },
    { key: "password", value: "{{AuthToken}}" },
  ],
}
