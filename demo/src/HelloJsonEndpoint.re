open Async;
open Serbet;

[@decco]
type body_in = {
  name: string
};

[@decco]
type body_out = {
  message: string
};

let endpoint = 
  Serbet.jsonEndpoint({
    verb: POST,
    path: "/json",
    body_in_decode: body_in_decode,
    body_out_encode: body_out_encode,
    handler: (body, _req) => {
      {message: body.name } |> async;
    },
  });
