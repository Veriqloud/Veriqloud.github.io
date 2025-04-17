# API

> ⚠️ Direct access to the  API will be available soon.

| Endpoint  | Request type and fields to supply  | Description  | Response type |
| --- | --- | --- | --- |
| /api/storage  | GET  | Returns information about connected storage servers | servers: String[], locations: String[], hosts: String[], pings: Number[]|
| /api/file | GET  | Returns the list of currently protected files and a percentage of storage use | files: File[], percentage: Number |
| /api/file/access | GET </br>- `with` (*query param, `me` or `others`*) : which way of file access | Return the list of currently shared files (shared with us, or files we shared with others) | files: File[] |
| /api/file/access/modify | POST</br> - `mails` (*{ "mails": [\<list of mails\>] }*): mails of user to change permissions</br> - `files` (*{ "files": [\<list of filenames\>] }*): </br>- `permission` (*`add_read` or `revoke_read`*): the permission | Change an user access to a file owned by the demanding user | null
| /api/configuration  | GET  | Returns a list of information about the configuration | version: String, limit: Number, max_file_size: Number |
| /api/file/protect | POST</br> - `threshold` (*number*): number of parts<br/>- `storage_servers` (*list*): list of storage servers's player name (Charlie1)<br/>- `file` (*file*): the file to protect | Protects a file  | null  |
| /api/file/retrieve | POST</br> - `name` (*string*): the filename | Retrieves a file | File data as a stream of bytes  |
| /api/file/remove  | POST</br> - `name` (*string*): the filename | Removes a file | null  |
| /api/file/multiprotect | POST</br> - `threshold` (*number*): threshold in the main proxy<br/>- `storage_servers` (*list*): list of storage servers's player name (Charlie1) for the main proxy<br/>- `threshold_secondary` (*number*): threshold for the secondary shares<br/>- `sub_networks`: [[{"proxy_url": "<url of the sub_proxy>"}, {"threshold": <threshold in the sub_proxy>, "storage_servers": ["<name of a storage in the sub network>"]}], <other>]<br/>- `file` (*file*): the file to protect | Protects a file with the multiss protocol  | null  |
| /api/file/multiretrieve | POST</br> - `name` (*string*): the filename | Retrieves a file protected by multiss | File data as a stream of bytes  |
| /api/file/multiremove  | POST</br> - `name` (*string*): the filename | Removes a file protected by multiss | null  |
| /ping  | GET  | Checks if the proxy is online | null |
