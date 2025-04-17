# Licensing

**Qasmat** is commercialized under different licenses, each of which limits certain parameters.

| **License**   | **Essential** | **Pro** | **Elite** |
|---------------|---------------|---------|-----------|
| **Parameter** |               |         |           |
| **Number of storage servers** | 3         | 5       | 10        |
| **Number of users**          | 10        | 50      | 100       |
| **Amount of storage\***      | 1 TB      | 5 TB    | 10 TB     |
| **Maximum file size**        | 1 GB      | 5 GB    | 10 GB     |

**\*Warning:** The amount of storage corresponds to the amount **to be protected**, not *distributed*. For example, if you store a file of 1 GB on 3 storage servers, the amount is 1 GB, not 3 GB.

Of course, it is possible to contact us for a custom license.

## Usage

You will receive an encrypted license from VeriQloud, which the proxy server needs to run. When running the binary, the following argument is required: `-p <path to encrypted license>`. This license is then decrypted and applied. Below is a table summarizing the software's behavior when a limit is reached.

| **Parameter**             | **Behavior**                                                                 |
|---------------------------|------------------------------------------------------------------------------|
| **Number of storage servers** | The operation is blocked, and a message appears in the logs.                |
| **Number of users**       | The operation is blocked, and a message appears in the logs.                |
| **Amount of storage\***   | The operation is blocked, and a message appears in the logs and on the graphical interface. |
| **Maximum file size**     | The operation is blocked, and a message appears on the graphical interface. |
