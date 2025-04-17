# Logs

The proxy server and storage servers of **Qasmat** produce logs that might be helpful for troubleshooting the solution in case of a problem. These logs are accessible via the command:

```
kubectl -n <namespace of the solution (qasmat)> logs <name of the pod>
```

The logs are organized into different levels (debug, warn, error, etc.) and provide more information than the API responses.
