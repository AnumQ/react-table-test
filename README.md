## The assignment

You are a frontend software engineer and you just inherited a project written by an intern. The project is an application that allows you to run arbitrary SQL queries against a database.

It is structured using two directories:

- **backend**: A simple API that supports a single endpoint: `POST /query`. It takes a SQL query as payload and returns the result of that query. See `backend/README.md` for more details.
- **frontend**: A React application that allows a user to type a SQL query and visualize the results returned by the API in a table.

You can run the project using the following steps:

1. Start the API in one terminal:

```shell
cd ./backend
yarn install
yarn run serve
```

2. Start the React app in another terminal:

```shell
cd ./frontend
yarn install
yarn run start
```

3. Open your browser and navigate to `http://localhost:1234`. You should be able to see the rudimental application written by the intern.

Please note that you can only run queries on the `blocks` table.

For instance, these queries are valid:

- `SELECT * FROM "blocks";`
- `SELECT "time", "number", "difficulty" FROM "blocks" ORDER BY "difficulty" DESC;`

But this query is _not_ valid: `SELECT * FROM blah;`.

### Objective 1

As a first objective, we would like you to takeover the project and improve the code quality and the application:

- Clean up the codebase: remove hacks, fix bugs if you find any, and make it more maintainable if possible
- Improve the UI/UX: add any necessary features or UI touches to make the tool feel more like a modern web application

Please use this part to really showcase your skills and knowledge of what makes a good modern application, and apply good engineering principles and best practices.

**Important**: Please _do not_ add new libraries to the project. We especially do not want to see any UI component libraries. The only 3rd party libraries allowed for this test are the following ones:

- API fetching/caching (e.g. React Query, useSwr, axios, etc.)
- State management (e.g. redux, mobx, recoil, etc.)
- Icon library (react-icons etc)
- Any libraries related to testing

### Objective 2

Some queries might return a lot of results. As the second objective, we would like to add client side paging to the table so that only 20 rows are displayed at a time.
A user should be able to navigate through pages and always be able to see the current page number they are on.

### Objective 3

As the final objective, we would like to be able to sort results in the table. Please add toggles to each column so that users can sort entries using a specific column order:

- Only one column should be selected for sorting at a given time,
- The user should be able to sort by ascending or descending order, and,
- The user should be able to remove any sorting and just see the original order.

## Final notes

Please progress through the objectives in order. They are ranked by priority (i.e. the first objective is more important than the second etc.)

Don't worry if you don't finish everything. We would much rather you take a little bit longer to do things properly than rush through the objectives by cutting corners.
