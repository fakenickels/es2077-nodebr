// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var Async = require("serbet/src/Async.bs.js");
var Decco = require("decco/src/Decco.js");
var Serbet = require("serbet/src/Serbet.bs.js");
var Js_dict = require("bs-platform/lib/js/js_dict.js");
var Js_json = require("bs-platform/lib/js/js_json.js");
var Belt_Option = require("bs-platform/lib/js/belt_Option.js");

function body_in_encode(v) {
  return Js_dict.fromArray([[
                "name",
                Decco.stringToJson(v.name)
              ]]);
}

function body_in_decode(v) {
  var dict = Js_json.classify(v);
  if (typeof dict === "number") {
    return Decco.error(undefined, "Not an object", v);
  }
  if (dict.TAG !== /* JSONObject */2) {
    return Decco.error(undefined, "Not an object", v);
  }
  var name = Decco.stringFromJson(Belt_Option.getWithDefault(Js_dict.get(dict._0, "name"), null));
  if (!name.TAG) {
    return {
            TAG: /* Ok */0,
            _0: {
              name: name._0
            }
          };
  }
  var e = name._0;
  return {
          TAG: /* Error */1,
          _0: {
            path: ".name" + e.path,
            message: e.message,
            value: e.value
          }
        };
}

function body_out_encode(v) {
  return Js_dict.fromArray([[
                "message",
                Decco.stringToJson(v.message)
              ]]);
}

function body_out_decode(v) {
  var dict = Js_json.classify(v);
  if (typeof dict === "number") {
    return Decco.error(undefined, "Not an object", v);
  }
  if (dict.TAG !== /* JSONObject */2) {
    return Decco.error(undefined, "Not an object", v);
  }
  var message = Decco.stringFromJson(Belt_Option.getWithDefault(Js_dict.get(dict._0, "message"), null));
  if (!message.TAG) {
    return {
            TAG: /* Ok */0,
            _0: {
              message: message._0
            }
          };
  }
  var e = message._0;
  return {
          TAG: /* Error */1,
          _0: {
            path: ".message" + e.path,
            message: e.message,
            value: e.value
          }
        };
}

var endpoint = Serbet.jsonEndpoint(undefined, {
      path: "/json",
      verb: /* POST */1,
      body_in_decode: body_in_decode,
      body_out_encode: body_out_encode,
      handler: (function (body, _req) {
          return Async.async({
                      message: body.name
                    });
        })
    });

exports.body_in_encode = body_in_encode;
exports.body_in_decode = body_in_decode;
exports.body_out_encode = body_out_encode;
exports.body_out_decode = body_out_decode;
exports.endpoint = endpoint;
/* endpoint Not a pure module */