---
title: "Senders"
draft: false
weight: 200
tags:
  - api
  - postman
  - "messaging services"
# geekdocNav: false
# geekdocBreadcrumb: false
---

{{< tabs "senders" >}}

{{< tab "LIST A2P" >}}
List A2P Use Cases associated with a Messaging Service
{{< api-explorer id=`create` file=`../params/a2p.js` >}}
{{< /tab >}}

{{< tab "LIST PN" >}}
List Phone Numbers in a Messaging Service Number Pool
{{< api-explorer id=`phone-numbers` file=`../params/phone-numbers.js` >}}
{{< /tab >}}

{{< tab "LIST SC" >}}
List Short Codes in a Messaging Service Number Pool
{{< api-explorer id=`short-codes` file=`../params/short-codes.js` >}}
{{< /tab >}}

{{< tab "LIST AS" >}}
List Alpha Senders in a Messaging Service Number Pool
{{< api-explorer id=`alpha-senders` file=`../params/alpha-senders.js` >}}
{{< /tab >}}

{{< tab "ADD PN" >}}
Add a Phone Number to a Messaging Service Number Pool
{{< api-explorer id=`add-phone-number` file=`../params/add-phone-number.js` >}}
{{< /tab >}}

{{< tab "DELETE PN" >}}
Remove a Phone Numbers from a Messaging Service Number Pool
{{< api-explorer id=`delete-phone-number` file=`../params/delete-phone-number.js` >}}
{{< /tab >}}

{{< /tabs >}}