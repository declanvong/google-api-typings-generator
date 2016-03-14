// Type definitions for Google Google Cloud Service Registry API alpha
// Project: https://developers.google.com/cloud-serviceregistry/
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.serviceregistry {
    
    interface Endpoint {
        // A user-provided address of the service represented by this endpoint. This can be an IPv4 or IPv6 address, or a hostname.
        address?: string,
        // [Output Only] Creation timestamp in RFC3339 text format.
        creationTimestamp?: string,
        // An optional user-provided description of the endpoint.
        description?: string,
        // Supply the fingerprint value for update requests. The fingerprint value is generated by the server and ensures optimistic concurrency (so that only one update can be performed at a time). The fingerprint changes after each update.
        fingerprint?: string,
        // [Output Only] Unique identifier for the resource; defined by the server.
        id?: string,
        // A user-provided name of the endpoint, which must be unique within the project. The name must comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
        name?: string,
        // An optional user-provided port of the service represented by this endpoint.
        port?: number,
        // [Output Only] Self link for the endpoint.
        selfLink?: string,
        // [Output Only] The current state of the endpoint, as determined by the system.
        state?: string,
        // The visibility of this endpoint. This must be a list of fully-qualified URLs to Compute Engine networks.
        visibility?: EndpointEndpointVisibility,
    }
    
    interface EndpointEndpointVisibility {
        // Google Compute Engine networks for which the name of this endpoint should be resolvable through DNS.
        networks?: string[],        
    }
    
    interface EndpointsListResponse {
        // The endpoints contained in this response.
        endpoints?: Endpoint[],        
        // [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
        nextPageToken?: string,
    }
    
    interface Operation {
        // [Output Only] Reserved for future use.
        clientOperationId?: string,
        // [Output Only] Creation timestamp in RFC3339 text format.
        creationTimestamp?: string,
        // [Output Only] A textual description of the operation, which is set when the operation is created.
        description?: string,
        // [Output Only] The time that this operation was completed. This value is in RFC3339 text format.
        endTime?: string,
        // [Output Only] If errors are generated during processing of the operation, this field will be populated.
        error?: {        
            // [Output Only] The array of errors encountered while processing this operation.
            errors?: {            
                // [Output Only] The error type identifier for this error.
                code?: string,
                // [Output Only] Indicates the field in the request that caused the error. This property is optional.
                location?: string,
                // [Output Only] An optional, human-readable error message.
                message?: string,
            }[],            
        },        
        // [Output Only] If the operation fails, this field contains the HTTP error message that was returned, such as NOT FOUND.
        httpErrorMessage?: string,
        // [Output Only] If the operation fails, this field contains the HTTP error status code that was returned. For example, a 404 means the resource was not found.
        httpErrorStatusCode?: number,
        // [Output Only] The unique identifier for the resource. This identifier is defined by the server.
        id?: string,
        // [Output Only] The time that this operation was requested. This value is in RFC3339 text format.
        insertTime?: string,
        // [Output Only] Type of the resource. Always compute#operation for operation resources.
        kind?: string,
        // [Output Only] Name of the resource.
        name?: string,
        // [Output Only] The type of operation, such as insert, update, or delete, and so on.
        operationType?: string,
        // [Output Only] An optional progress indicator that ranges from 0 to 100. There is no requirement that this be linear or support any granularity of operations. This should not be used to guess when the operation will be complete. This number should monotonically increase as the operation progresses.
        progress?: number,
        // [Output Only] The URL of the region where the operation resides. Only available when performing regional operations.
        region?: string,
        // [Output Only] Server-defined URL for the resource.
        selfLink?: string,
        // [Output Only] The time that this operation was started by the server. This value is in RFC3339 text format.
        startTime?: string,
        // [Output Only] The status of the operation, which can be one of the following: PENDING, RUNNING, or DONE.
        status?: string,
        // [Output Only] An optional textual description of the current status of the operation.
        statusMessage?: string,
        // [Output Only] The unique target ID, which identifies a specific incarnation of the target resource.
        targetId?: string,
        // [Output Only] The URL of the resource that the operation modifies.
        targetLink?: string,
        // [Output Only] User who requested the operation, for example: user@example.com.
        user?: string,
        // [Output Only] If warning messages are generated during processing of the operation, this field will be populated.
        warnings?: {        
            // [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
            code?: string,
            // [Output Only] Metadata about this warning in key: value format. For example:
            // "data": [ { "key": "scope", "value": "zones/us-east1-d" }
            data?: {            
                // [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding).
                key?: string,
                // [Output Only] A warning data value corresponding to the key.
                value?: string,
            }[],            
            // [Output Only] A human-readable description of the warning code.
            message?: string,
        }[],        
        // [Output Only] The URL of the zone where the operation resides. Only available when performing per-zone operations.
        zone?: string,
    }
    
    interface OperationsListResponse {
        // [Output Only] A token used to continue a truncated list request.
        nextPageToken?: string,
        // [Output Only] Operations contained in this list response.
        operations?: Operation[],        
    }
    
    interface EndpointsResource {
        // Deletes an endpoint.
        delete (request: {        
            // The name of the endpoint for this request.
            endpoint: string,
            // The project ID for this request.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
        // Gets an endpoint.
        get (request: {        
            // The name of the endpoint for this request.
            endpoint: string,
            // The project ID for this request.
            project: string,
        }) : gapi.client.Request<Endpoint>;        
        
        // Creates an endpoint.
        insert (request: {        
            // The project ID for this request.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
        // Lists endpoints for a project.
        list (request: {        
            // Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.
            // 
            // The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.
            // 
            // For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.
            // 
            // Compute Engine Beta API Only: If you use filtering in the Beta API, you can also filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. In particular, use filtering on nested fields to take advantage of instance labels to organize and filter results based on label values.
            // 
            // The Beta API also supports filtering on multiple expressions by providing each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
            filter?: string,
            // The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
            maxResults?: number,
            // Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
            // 
            // You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.
            // 
            // Currently, only sorting by name or creationTimestamp desc is supported.
            orderBy?: string,
            // Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
            pageToken?: string,
            // The project ID for this request.
            project: string,
        }) : gapi.client.Request<EndpointsListResponse>;        
        
        // Updates an endpoint. This method supports patch semantics.
        patch (request: {        
            // The name of the endpoint for this request.
            endpoint: string,
            // The project ID for this request.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
        // Updates an endpoint.
        update (request: {        
            // The name of the endpoint for this request.
            endpoint: string,
            // The project ID for this request.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
    }
    
    
    interface OperationsResource {
        // Gets information about a specific operation.
        get (request: {        
            // The name of the operation for this request.
            operation: string,
            // The project ID for this request.
            project: string,
        }) : gapi.client.Request<Operation>;        
        
        // Lists all operations for a project.
        list (request: {        
            // Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.
            // 
            // The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.
            // 
            // For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.
            // 
            // Compute Engine Beta API Only: If you use filtering in the Beta API, you can also filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. In particular, use filtering on nested fields to take advantage of instance labels to organize and filter results based on label values.
            // 
            // The Beta API also supports filtering on multiple expressions by providing each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
            filter?: string,
            // The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
            maxResults?: number,
            // Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
            // 
            // You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.
            // 
            // Currently, only sorting by name or creationTimestamp desc is supported.
            orderBy?: string,
            // Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
            pageToken?: string,
            // The project ID for this request.
            project: string,
        }) : gapi.client.Request<OperationsListResponse>;        
        
    }
    
}

declare module gapi.client.serviceregistry {
    var endpoints: gapi.client.serviceregistry.EndpointsResource; 
    
    var operations: gapi.client.serviceregistry.OperationsResource; 
    
}