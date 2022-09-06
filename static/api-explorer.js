// let apiParams
// let updatedKey
// let updatedValue
// let closest
// let this_submit
// let this_method

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

function createKeyValuePair(id, key, value, placeholder) {
  const element = document
    .querySelector(`#${id} [data-key-value-template]`)
    .content.cloneNode(true)
  let thisKey = element.querySelector("[data-key]")
  thisKey.value = key || null
  let thisValue = element.querySelector("[data-value]")
  thisValue.value = value || null
  thisValue.placeholder = placeholder || "Value"

  // Show EnvVar values
  if (thisValue.value === "") {
    thisValue.value = localStorage.getItem(key)
  }

  // Mask passwords and sensitive values
  if (
    thisKey.value === "password" ||
    thisKey.value === "AuthToken" ||
    thisKey.value === "StatusCallback" ||
    thisKey.value === "StatusCallbackUrl" ||
    thisKey.value === "Authorization" ||
    thisKey.value === "BasicAuth"
  ) {
    thisValue.type = "password"
  }

  // Update button
  element.querySelector("[data-update-btn]").addEventListener("click", (e) => {
    closest = e.target.closest("[data-key-value-pair]")
    console.log("UPDATE CLOSEST", closest)
    if (typeof newEnvVarDialog.showModal === "function") {
      console.log("NEW ENV VAR DIALOG", newEnvVarDialog)
      updatedKey = closest.querySelector("[data-key]").value
      console.log("UPDATEDKEY", updatedKey)
      newEnvVarDialog.querySelector("[data-key]").value = updatedKey
      newEnvVarDialog.querySelector("[data-value]").value =
        localStorage.getItem(updatedKey)
      newEnvVarDialog.querySelector("[data-value]").placeholder =
        closest.querySelector("[data-value]").placeholder
      newEnvVarDialog.showModal()

      // Enter key listener -> Listen for the "Enter" key in newEnvVar modal
      newEnvVarDialog.addEventListener("keydown", (e) => {
        if (e.code === "Enter") {
          setLocalStorage()
          thisValue.value = localStorage.getItem(thisKey.value)
        }
      })

      // Save listener -> On newEnvVar dialog "close" because of [method="dialog"]
      // Triggered via Cancel & Save buttons or Enter keypress
      newEnvVarDialog.addEventListener("close", function onClose() {
        if (newEnvVarDialog.returnValue !== "cancel") {
          setLocalStorage()
          thisValue.value = localStorage.getItem(thisKey.value)
        }
      })

      // Store item in localStorage and refresh window
      function setLocalStorage() {
        if (
          newEnvVarDialog.querySelector("[data-key]").value !== "" &&
          newEnvVarDialog.querySelector("[data-value]").value !== ""
        ) {
          updatedValue = newEnvVarDialog.querySelector("[data-value]").value
          // store the updatedValue for the updatedKey
          localStorage.setItem(updatedKey, updatedValue)
          // Update the value of all matching keys that are already loaded in browser
          document.querySelectorAll("[data-key]").forEach((item) => {
            if (item.value === updatedKey) {
              item.parentElement.querySelector("[data-value]").value =
                updatedValue
            }
          })
          // window.location = window.location.href
        }
      }
    }
  })

  // Remove button
  element.querySelector("[data-remove-btn]").addEventListener("click", (e) => {
    closest = e.target.closest("[data-key-value-pair]")
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
