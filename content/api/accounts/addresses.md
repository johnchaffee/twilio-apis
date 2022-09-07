---
title: "Addresses"
draft: false
weight: 200
tags:
  - addresses
# geekdocNav: false
# geekdocBreadcrumb: false
---

Create and manage addresses.

{{< tabs "addresses" >}}

{{< tab "LIST" >}}
Show all addresses.
{{< api-explorer id=`list` file=`../params/addresses/list.js` >}}
{{< /tab >}}

{{< tab "FETCH" >}}
Fetch an Address.
{{< api-explorer id=`fetch` file=`../params/addresses/fetch.js` >}}
{{< /tab >}}

{{< tab "PHONE NUMBERS" >}}
List Dependent Phone Number Subresources.
{{< api-explorer id=`pns` file=`../params/addresses/pns.js` >}}
{{< /tab >}}

{{< tab "CREATE" >}}
Create an Address.
{{< api-explorer id=`create` file=`../params/addresses/create.js` >}}
{{< /tab >}}

{{< tab "UPDATE" >}}
Update a customer name and street address.
{{< api-explorer id=`update` file=`../params/addresses/update.js` >}}
{{< /tab >}}

{{< tab "DELETE" >}}
Delete an Address.
{{< api-explorer id=`delete` file=`../params/addresses/delete.js` >}}
{{< /tab >}}

{{< /tabs >}}
