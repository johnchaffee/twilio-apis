// const loginDialog = document.getElementById("loginDialog")
// let accountSidKeyElement = loginDialog.querySelector("#modal-account-sid-key")
// let accountSidValueElement = loginDialog.querySelector(
//   "#modal-account-sid-value"
// )
// let authTokenKeyElement = loginDialog.querySelector("#modal-auth-token-key")
// let authTokenValueElement = loginDialog.querySelector("#modal-auth-token-value")

// const newEnvVarDialog = document.getElementById("newEnvVarDialog")
// let keyElement = newEnvVarDialog.querySelector("[modal-data-key]")
// let valueElement = newEnvVarDialog.querySelector("[modal-data-value]")
// // let saveBtn = newEnvVarDialog.querySelector("#saveBtn")

// // Fetch localStorage objects and convert to envVars array
// const keys = Object.keys(localStorage).sort()
// let envVars = []
// let envObj = {}
// keys.forEach((key) => {
//   envObj = {}
//   envObj.key = key
//   envObj.value = localStorage[key]
//   envVars.push(envObj)
// })

// // Make sure reguired env vars are present
// if (keys.includes("AccountSid") && keys.includes("AuthToken")) {
//   document.querySelector("#loginBtn").classList.add("d-none")
//   document.querySelector("#logoutBtn").classList.remove("d-none")
// } else {
//   document.querySelector("#loginBtn").classList.remove("d-none")
//   document.querySelector("#logoutBtn").classList.add("d-none")
// }

// // On load -> append query params key value pairs
// // An eventListener will be added to each Delete button
// envVars.forEach((envVar) => {
//   document
//     .querySelector("#{{ .Params.id }} [data-query-params]")
//     .append(createKeyValuePair("{{ .Params.id }}", envVar.key, envVar.value))
// })

// // // New Env Var button click -> "data-add-query-param-btn" button opens the <dialog> modally
// // document
// //   .querySelectorAll("#{{ .Params.id }} [data-add-query-param-btn]")
// //   .forEach((btn) => {
// //     btn.addEventListener("click", function onOpen() {
// //       console.log("CLICK")
// //       if (
// //         btn.id === "loginBtn" &&
// //         typeof loginDialog.showModal === "function"
// //       ) {
// //         loginDialog.showModal()
// //       }
// //       if (
// //         btn.id === "newEnvVarBtn" &&
// //         typeof newEnvVarDialog.showModal === "function"
// //       ) {
// //         newEnvVarDialog.showModal()
// //       }
// //     })
// //   })

// // New Env Var button click -> "data-add-query-param-btn" button opens the <dialog> modally
// document
//   .querySelector("#newEnvVarBtn")
//   .addEventListener("click", function onOpen() {
//     console.log("CLICK ENV VAR BTN")
//     if (typeof newEnvVarDialog.showModal === "function") {
//       newEnvVarDialog.showModal()
//     }
//   })

// // Login button click -> "data-add-query-param-btn" button opens the <dialog> modally
// document
//   .querySelector("#loginBtn")
//   .addEventListener("click", function onOpen() {
//     console.log("CLICK LOGIN BTN")
//     if (typeof loginDialog.showModal === "function") {
//       loginDialog.showModal()
//     }
//   })

// // Login button click -> "data-add-query-param-btn" button opens the <dialog> modally
// document
//   .querySelector("#logoutBtn")
//   .addEventListener("click", function onOpen() {
//     console.log("CLICK LOGOUT BTN")
//     localStorage.removeItem("AuthToken")
//     window.location = window.location.href
//   })

// // Enter key listener -> Listen for the "Enter" key in newEnvVar modal
// newEnvVarDialog.addEventListener("keydown", (e) => {
//   if (e.code === "Enter") {
//     setLocalStorage()
//   }
// })

// // Save listener -> On newEnvVar dialog "close" because of [method="dialog"]
// // Triggered via Cancel & Save buttons or Enter keypress
// newEnvVarDialog.addEventListener("close", function onClose() {
//   if (newEnvVarDialog.returnValue !== "cancel") {
//     setLocalStorage()
//   }
// })

// // Enter key listener -> Listen for the "Enter" key in login modal
// loginDialog.addEventListener("keydown", (e) => {
//   if (e.code === "Enter") {
//     setLocalStorage()
//   }
// })

// // Save listener -> On login dialog "close" because of [method="dialog"]
// // Triggered via Cancel & Save buttons or Enter keypress
// loginDialog.addEventListener("close", function onClose() {
//   if (loginDialog.returnValue !== "cancel") {
//     setLocalStorage()
//   }
// })

// // Store item in localStorage and refresh window
// function setLocalStorage() {
//   if (keyElement.value !== "" && valueElement.value !== "") {
//     localStorage.setItem(keyElement.value, valueElement.value)
//     window.location = window.location.href
//   }
//   if (
//     accountSidKeyElement.value !== "" &&
//     accountSidValueElement.value !== ""
//   ) {
//     localStorage.setItem(
//       accountSidKeyElement.value,
//       accountSidValueElement.value
//     )
//     window.location = window.location.href
//   }
//   if (authTokenKeyElement.value !== "" && authTokenValueElement.value !== "") {
//     localStorage.setItem(authTokenKeyElement.value, authTokenValueElement.value)
//     window.location = window.location.href
//   }
// }
