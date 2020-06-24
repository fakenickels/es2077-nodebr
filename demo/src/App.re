open Async;

type user = {
  id: int,
  email: string,
};

let saveUserInDatabase = (_user: user) => {
  Ok() |> async
};

let processUser = user => {
  {...user, id: user.id + 2} |> async;
};

let newUser = () => {
  {id: 1, email: "hey papa"} |> async;
};

open Serbet.Endpoint;

let hello =
  Serbet.endpoint({
    verb: GET,
    path: "/",
    handler: _req => {
      let%Async user = newUser();

      OkString(user.email) |> async;
    },
  });

let app = Serbet.application([
 hello,
 HelloJsonEndpoint.endpoint,
]);
