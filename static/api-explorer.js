let apiParams
let updatedKey

function updateResponseStatus(id, status) {
  console.log(`updateResponseStatus: .querySelector(#${id} [data-status])`)
  document.querySelector(`#${id} [data-status]`).textContent = status
}

function updateResponseBody(id, data) {
  const jsonBody = JSON.stringify(data, null, 2)
  console.log(
    `updateResponseBody: .querySelector(#${id} [data-json-response-body])`
  )
  document.querySelector(`#${id} [data-json-response-body]`).textContent =
    jsonBody
}

function updateRequestBody(id, myRequest) {
  const jsonReq = JSON.stringify(myRequest, null, 2)
  console.log(
    `updateRequestBody: .querySelector(#${id} [data-json-request-body])`
  )
  document.querySelector(`#${id} [data-json-request-body]`).textContent =
    jsonReq
}

function createKeyValuePair(id, key, value) {
  const element = document
    .querySelector(`#${id} [data-key-value-template]`)
    .content.cloneNode(true)
  let thisKey = element.querySelector("[data-key]")
  thisKey.value = key || null
  let thisValue = element.querySelector("[data-value]")
  thisValue.value = value || null

  // Show EnvVar values
  let curlyBraces
  let nonCurlyBraces
  let curlyBraceKey
  if (thisValue.value.match(/\{\{\w+}}/)) {
    curlyBraces = thisValue.value.match(/\{\{\w+}}/).toString()
    nonCurlyBraces = thisValue.value.replace(curlyBraces, "")
    curlyBraceKey = curlyBraces.replaceAll(/[{}]/g, "")
    thisValue.value = nonCurlyBraces + localStorage.getItem(curlyBraceKey)
  }

  // Mask passwords and sensitive values
  if (
    thisKey.value === "AuthToken" ||
    thisKey.value === "Authorization" ||
    thisKey.value === "BasicAuth"
  ) {
    thisValue.type = "password"
  }

  // Update button
  element.querySelector("[data-update-btn]").addEventListener("click", (e) => {
    let closest = e.target.closest("[data-key-value-pair]")
    console.log("UPDATE CLOSEST", closest)
    if (typeof newEnvVarDialog.showModal === "function") {
      console.log("NEW ENV VAR DIALOG", newEnvVarDialog)
      updatedKey = closest.querySelector("[data-key]").value
      console.log("UPDATED KEY", updatedKey)
      if (updatedKey === "username") {
        updatedKey = "AccountSid"
        console.log("UPDATED KEY = username", updatedKey)
      }
      if (updatedKey === "password") {
        updatedKey = "AuthToken"
        console.log("UPDATED KEY = password", updatedKey)
      }
      newEnvVarDialog.querySelector("[data-key]").value = updatedKey
      newEnvVarDialog.querySelector("[data-value]").value =
        localStorage.getItem(updatedKey)
      newEnvVarDialog.showModal()

      // Enter key listener -> Listen for the "Enter" key in newEnvVar modal
      newEnvVarDialog.addEventListener("keydown", (e) => {
        if (e.code === "Enter") {
          setLocalStorage()
        }
      })

      // Save listener -> On newEnvVar dialog "close" because of [method="dialog"]
      // Triggered via Cancel & Save buttons or Enter keypress
      newEnvVarDialog.addEventListener("close", function onClose() {
        if (newEnvVarDialog.returnValue !== "cancel") {
          setLocalStorage()
        }
      })

      // Store item in localStorage and refresh window
      function setLocalStorage() {
        if (
          newEnvVarDialog.querySelector("[data-key]").value !== "" &&
          newEnvVarDialog.querySelector("[data-value]").value !== ""
        ) {
          localStorage.setItem(
            updatedKey,
            newEnvVarDialog.querySelector("[data-value]").value
          )
          // window.location = window.location.href
        }
      }
    }
  })

  // Remove button
  element.querySelector("[data-remove-btn]").addEventListener("click", (e) => {
    let closest = e.target.closest("[data-key-value-pair]")
    closest.remove()
    if (id === "settings") {
      let localStorageKey = closest.querySelector("[data-key]").value
      localStorage.removeItem(localStorageKey)
      window.location = window.location.href
    }
  })
  return element
}

function keyValuePairsToObjects(id, container) {
  const pairs = container.querySelectorAll(`#${id} [data-key-value-pair]`)
  console.log("PAIRS:", pairs)
  return [...pairs].reduce((data, pair) => {
    const key = pair.querySelector("[data-key]").value
    console.log("KEY:", key)
    let value = pair.querySelector("[data-value]").value
    console.log("VALUE:", value)
    if (value.match(/{{\w+}}/)) {
      console.log(`value is {{envVar}} -> fetch variable from localStorage`)
      let valueEnvVar = value.replaceAll(/[{}]/g, "")
      console.log("VALUE ENV VAR:", valueEnvVar)
      value = localStorage.getItem(valueEnvVar)
      console.log("VALUE:", value)
      console.log(`localStorage.getItem(${valueEnvVar})`)
    }
    if (key === "" || value === null || value === "") return data
    return { ...data, [key]: value }
  }, {})
}
