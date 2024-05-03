# API
The communication between the user and the proxy server is done through this REST API. It is specified like this :

| Endpoint           | Request type | Fields to supply (if any)                                                            | Description                                   | Response type (see skeleton below) |
|--------------------|--------------|--------------------------------------------------------------------------------------|-----------------------------------------------|------------------------------------|
| /api/storage       | GET          | None                                                                                 | Returns the list of connected storage servers | servers: String[]                  |
| /api/file          | GET          | None                                                                                 | Returns the list of currently protected files | files: File[]                      |
| /api/file/protect  | POST         | - `threshold` (*number*): number of parts<br/>- `file` (*file*): the file to protect | Protects a file                               | null                               |
| /api/file/retrieve | POST         | - `name` (*string*): the filename                                                    | Retrieves a file                              | File data as a stream of bytes     |
| /api/file/remove   | POST         | - `name` (*string*): the filename                                                    | Removes a file                                | null                               |

#### JSON response skeletons :
##### Valid (except for `/api/file/retrieve`)

```
{
  "code": number,
  "status": "string",
  "data": any // depends on the request, see Response type in the tab
}
```

#### Invalid, error, ...
```
{
  "code": number,
  "status": "error",
  "message": string
}
```
