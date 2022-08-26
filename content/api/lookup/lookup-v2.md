---
title: "Lookup v2"
draft: false
weight: 200
tags:
  - api
  - postman
  - lookup
# geekdocNav: false
# geekdocBreadcrumb: false
---

The [Lookup v2 API](https://www.twilio.com/docs/lookup/v2-api#) provides a way to retrieve additional information about a phone number.

{{< tabs "lookup" >}}

{{< tab "NUMBER" >}}
Performs basic phone number validation and conversion from **regional formatting** to **E.164** (free).
{{< api-explorer id=`number` file=`../params/lookup-v2/number.js` >}}
{{< /tab >}}

{{< tab "INVALID" >}}
Performs basic phone number validation and conversion from **regional formatting** to **E.164** (free).
{{< api-explorer id=`invalid-number` file=`../params/lookup-v2/invalid-number.js` >}}
{{< /tab >}}

{{< tab "LINE TYPE" >}}
Provides carrier info and type (`mobile`, `landline` or `voip`). Costs $0.005 per lookup.
{{< api-explorer id=`line-type` file=`../params/lookup-v2/line-type.js` >}}
{{< /tab >}}

{{< tab "CALLER NAME" >}}
Provides Caller Name and type (`BUSINESS` or `CONSUMER`). Currently available only in the US and costs $0.01 per lookup.
{{< api-explorer id=`caller-name` file=`../params/lookup-v2/caller-name.js` >}}
{{< /tab >}}

{{< tab "MULTIPLE FIELDS" >}}
A comma-separated list of fields to return. Possible values are `caller_name`, `sim_swap`, `call_forwarding`, `live_activity`, `enhanced_line_type` or `line_type_intelligence`.
{{< api-explorer id=`multiple` file=`../params/lookup-v2/multiple.js` >}}
{{< /tab >}}


{{< /tabs >}}

