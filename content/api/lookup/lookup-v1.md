---
title: "Lookup v1"
draft: false
weight: 100
tags:
  - api
  - postman
  - lookup
# geekdocNav: false
# geekdocBreadcrumb: false
---

The [Lookup API](https://www.twilio.com/docs/lookup/api) provides a way to retrieve additional information about a phone number.

{{< tabs "lookup" >}}

{{< tab "NUMBER" >}}
Performs basic phone number validation and conversion from **regional formatting** to **E.164** (free).
{{< postman id=`number` file=`../../../_includes/lookup/number.js` >}}
{{< /tab >}}

{{< tab "CARRIER" >}}
Provides carrier info and type (`mobile`, `landline` or `voip`). Costs $0.005 per lookup.
{{< postman id=`carrier` file=`../../../_includes/lookup/carrier.js` >}}
{{< /tab >}}

{{< tab "CALLER NAME" >}}
Provides Caller Name and type (`BUSINESS` or `CONSUMER`). Currently available only in the US and costs $0.01 per lookup.
{{< postman id=`caller-name` file=`../../../_includes/lookup/caller-name.js` >}}
{{< /tab >}}

{{< /tabs >}}
