const express = require("express");
const sqlite3 = require('sqlite3');
const { open } = require('sqlite')
const cors = require('cors')


const app = express();
app.use(express.json());
app.use(cors())

const port = 3000;

app.get("/health", async (req, res) => {
  // open the database
  try {

    const db = await open({
      filename: 'blocks.sql',
      driver: sqlite3.Database
    })
    res.json({ ok: true });
  } catch (err) {
    console.error(err)
    res.send(err);
  }
});

app.post("/query", async (req, res) => {
  // open the database
  const query = req.body.query
  if (!query) {
    res.status(400).json({ error: "query is required" })
    return
  }
  try {

    const db = await open({
      filename: 'blocks.sql',
      driver: sqlite3.Database,
      mode: sqlite3.OPEN_READONLY

    })
    const dbRes = await db.all(query)
    res.json(dbRes);

  } catch (err) {
    console.error(err)
    res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
