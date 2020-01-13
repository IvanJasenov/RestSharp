(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{210:function(e,t,o){"use strict";o.r(t);var r=o(0),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"error-handling"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#error-handling"}},[e._v("#")]),e._v(" Error Handling")]),e._v(" "),o("p",[e._v("If there is a network transport error (network is down, failed DNS lookup, etc), "),o("code",[e._v("RestResponse.ResponseStatus")]),e._v(" will be set to "),o("code",[e._v("ResponseStatus.Error")]),e._v(", otherwise it will be "),o("code",[e._v("ResponseStatus.Completed")]),e._v(".")]),e._v(" "),o("p",[e._v("If an API returns a 404, "),o("code",[e._v("ResponseStatus")]),e._v(" will still be "),o("code",[e._v("Completed")]),e._v(". If you need access to the HTTP status code returned you will find it at "),o("code",[e._v("RestResponse.StatusCode")]),e._v(".\nThe "),o("code",[e._v("Status")]),e._v(" property is an indicator of completion independent of the API error handling.")]),e._v(" "),o("p",[e._v("Normally, RestSharp doesn't throw an exception if the request fails.")]),e._v(" "),o("p",[e._v("However, it is possible to configure RestSharp to throw in different situations, when it normally doesn't throw\nin favour of giving you the error as a property.")]),e._v(" "),o("table",[o("thead",[o("tr",[o("th",[e._v("Property")]),e._v(" "),o("th",[e._v("Behavior")])])]),e._v(" "),o("tbody",[o("tr",[o("td",[o("code",[e._v("FailOnDeserialization")])]),e._v(" "),o("td",[e._v("Changes the default behavior when failed deserialization results in a successful response with an empty "),o("code",[e._v("Data")]),e._v(" property of the response. Setting this property to "),o("code",[e._v("true")]),e._v(" will tell RestSharp to consider failed deserialization as an error and set the "),o("code",[e._v("ResponseStatus")]),e._v(" to "),o("code",[e._v("Error")]),e._v(" accordingly.")])]),e._v(" "),o("tr",[o("td",[o("code",[e._v("ThrowOnDeserialization")])]),e._v(" "),o("td",[e._v("Changes the default behavior when failed deserialization results in empty "),o("code",[e._v("Data")]),e._v(" property of the response. Setting this property to "),o("code",[e._v("true")]),e._v(" will tell RestSharp to throw when deserialization fails.")])]),e._v(" "),o("tr",[o("td",[o("code",[e._v("ThrowOnAnyError")])]),e._v(" "),o("td",[e._v("Setting this property to "),o("code",[e._v("true")]),e._v(" changes the default behavior and forces RestSharp to throw if any errors occurs when making a request or during deserialization.")])])])]),e._v(" "),o("p",[e._v("Those properties are available for the "),o("code",[e._v("IRestClient")]),e._v(" instance and will be used for all request made with that instance.")]),e._v(" "),o("p",[e._v("There are also slight differences on how different overloads handle exceptions.")]),e._v(" "),o("p",[e._v("Asynchronous generic methods "),o("code",[e._v("GetAsync<T>")]),e._v(", "),o("code",[e._v("PostAsync<T>")]),e._v(" and so on, which aren't a part of "),o("code",[e._v("IRestClient")]),e._v(" interface\n(those methods are extension methods) return "),o("code",[e._v("Task<T>")]),e._v(". It means that there's no "),o("code",[e._v("IRestResponse")]),e._v(" to set the response status to error.\nWe decided to throw an exception when such a request fails. It is a trade-off between the API\nconsistency and usability of the library. Usually, you only need the content of "),o("code",[e._v("RestResponse")]),e._v(" instance to diagnose issues\nand most of the time the exception would tell you what's wrong.")])])}),[],!1,null,null,null);t.default=s.exports}}]);