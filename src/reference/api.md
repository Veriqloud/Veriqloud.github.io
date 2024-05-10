# API

The communication between the user and the proxy server is done through this REST API. It is specified like this :

| Endpoint           | Request type | Fields to supply (if any)                                                            | Description                                   | Response type (see skeleton below) |
|--------------------|--------------|--------------------------------------------------------------------------------------|-----------------------------------------------|------------------------------------|
| /api/storage       | GET          | None                                                                                 | Returns the list of connected storage servers | servers: String[]                  |
| /api/file          | GET          | None                                                                                 | Returns the list of currently protected files | files: File[]                      |
| /api/file/protect  | POST         | - `threshold` (*number*): number of parts<br/>- `file` (*file*): the file to protect | Protects a file                               | null                               |
| /api/file/retrieve | POST         | - `name` (*string*): the filename                                                    | Retrieves a file                              | Header `X-File-Integrity` (bool)<br /> File data as a stream of bytes     |
| /api/file/remove   | POST         | - `name` (*string*): the filename                                                    | Removes a file                                | null                               |

<div class="warning">You need to specify <b>X-Remote-User</b> and <b>X-Remote-Email</b> headers in each request. It is what makes Qasmat aware of the user doing the information. See <a href="authentication.md">Authentication</a> page for more details.</div>

#### JSON response skeletons:
##### HTTP codes 2xx (except for `/api/file/retrieve`)

```
{
  "code": number,
  "status": "string",
  "data": any // depends on the request, see Response type in the tab
}
```

##### HTTP codes 3xx - 5xx
```
{
  "code": number,
  "status": "error",
  "message": string
}
```

#### File specification
In our API, a File is defined by these properties:

| Name | Type | Description |
|------|------|-------------|
| date_of_protection | Date | Represents when the file was protected by the user. |
| expired | Boolean | Represents the expiration state of the shares in the databases. |
| filename | String | The name of the file. |
| hash | Int[] | Represents the hash of the file, to verify its integrity. |
| k | Int | The threshold the file is protected with. |
| last_renewal | Date | Last time the file got renewed in the databases. |
