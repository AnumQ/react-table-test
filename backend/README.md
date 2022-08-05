## Dune Tech Test - Backend

This is a basic backend API that allows a user to query a sqlite db.

## Run the API

```
yarn install
yarn run serve
```

## API Endpoints

There is only one API endpoint and it queries  the sqlite database.

```js
// POST /query
// Request body
{
  "query": "SELECT * FROM blocks LIMIT 1;"
}
```

eg:

```shell
curl \
-X POST  \
-H "Content-Type: application/json" \
-d '{"query": "select * from blocks limit 1;"}' \
localhost:3000/query
```
