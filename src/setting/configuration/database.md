# Database

Both the proxy and the storage servers require a database to manage files, users, and shares. Two backends are supported for the database. No additional configuration is required; simply set the environment variable `DATABASE_URL` as follows:

### SQLite
- Supported formats for `DATABASE_URL` are:
  - File paths (e.g., `test.db`)
  - [URIs](https://sqlite.org/uri.html) (e.g., `file://test.db`)
  - Special identifiers (e.g., `:memory:`)

  Example: `DATABASE_URL=mydatabase.db`

### PostgreSQL
- `DATABASE_URL` must be a [PostgreSQL connection string](https://www.postgresql.org/docs/9.4/static/libpq-connect.html#LIBPQ-CONNSTRING).

  Example: `DATABASE_URL="postgresql://<user>:<password>@localhost:5432/<database name>"`
- The user in the URL must be the owner of the database and have all privileges on it.
