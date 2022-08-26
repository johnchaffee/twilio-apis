---
title: "Accounts"
draft: false
weight: 100
tags:
  - accounts
# geekdocNav: false
# geekdocBreadcrumb: false
---

Manage Accounts and Subaccounts.

{{< tabs "accounts" >}}

{{< tab "CREATE" >}}
Create a new Account instance resource as a subaccount of the one used to make the request
{{< api-explorer id=`create` file=`../../../api-params/accounts/create.js` >}}
{{< /tab >}}

{{< tab "FETCH" >}}
Fetch an Account.
{{< api-explorer id=`fetch` file=`../../../api-params/accounts/fetch.js` >}}
{{< /tab >}}

{{< tab "LIST" >}}
Show all accounts.
{{< api-explorer id=`list` file=`../../../api-params/accounts/list.js` >}}
{{< /tab >}}

{{< tab "QUERY" >}}
Show all `query` accounts.
{{< api-explorer id=`query` file=`../../../api-params/accounts/query.js` >}}
{{< /tab >}}

{{< tab "SUSPEND" >}}
Suspend a Subaccount.
{{< api-explorer id=`suspend` file=`../../../api-params/accounts/suspend.js` >}}
{{< /tab >}}

{{< tab "ACTIVATE" >}}
Re-activate a Suspended Subaccount.
{{< api-explorer id=`activate` file=`../../../api-params/accounts/activate.js` >}}
{{< /tab >}}

{{< tab "CLOSE" >}}
Permanently Close a Subaccount.
{{< api-explorer id=`close` file=`../../../api-params/accounts/close.js` >}}
{{< /tab >}}

{{< /tabs >}}
