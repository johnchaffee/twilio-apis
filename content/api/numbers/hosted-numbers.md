---
title: "Hosted Numbers"
draft: false
weight: 400
tags:
  - hosted-numbers
# geekdocNav: false
# geekdocBreadcrumb: false
---

How to create and manage Hosted Numbers.

{{< tabs "HostedNumbers" >}}

{{< tab "CREATE" >}}
Create a Hosted Numbers Order request.
{{< api-explorer id=`active` file=`../../../api-params/hosted-numbers/create.js` >}}
{{< /tab >}}

{{< tab "STATUS" >}}
Check Hosted Numbers Order status.
{{< api-explorer id=`country` file=`../../../api-params/hosted-numbers/status.js` >}}
{{< /tab >}}

{{< tab "VERIFY" >}}
Verify phone number ownership with an automated phone call.

When requesting a verification phone call, a 6-digit `verification_code` will be returned, which must be entered by the end user who answers the phone.
{{< api-explorer id=`local` file=`../../../api-params/hosted-numbers/verify.js` >}}
{{< /tab >}}

{{< tab "LOA" >}}
Submit Letter of Authorization.

You must provide an `AddressSid` created using the [Addresses API](../../accounts/addresses/).
{{< api-explorer id=`tollfree` file=`../../../api-params/hosted-numbers/loa.js` >}}
{{< /tab >}}

{{< tab "DELETE" >}}
Remove Hosted Number from your inventory and remove Twilio's SMS Routing Profile.
{{< api-explorer id=`delete` file=`../../../api-params/hosted-numbers/delete.js` >}}
{{< /tab >}}

{{< /tabs >}}
