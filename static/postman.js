let postmanParams

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
  element.querySelector("[data-key]").value = key || null
  element.querySelector("[data-value]").value = value || null
  // Mask sensitive fields
  if (
    element.querySelector("[data-key]").value === "AuthToken" ||
    element.querySelector("[data-key]").value === "Authorization" ||
    element.querySelector("[data-key]").value === "BasicAuth"
  ) {
    element.querySelector("[data-value]").type = "password"
  }
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
