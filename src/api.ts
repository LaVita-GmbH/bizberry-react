import { UseMutationOptions, UseQueryOptions, useMutation, useQuery } from "react-query"

import { API as SdkAPI } from "@lavita-io/bizberry-sdk"

export class API extends SdkAPI {

    queryPrefix: string = "bizberry-react"

    get_query_key(method: string, url: string) {
        return [this.queryPrefix, ...url.split('/').filter(v => v !== "")]
    }

    useGet(url: string, params?: object, queryOptions?: Omit<UseQueryOptions, 'queryKey' | 'queryFn'>) {
        return useQuery(this.get_query_key("GET", url), async () => {
            return await this.get(url, params)
        }, queryOptions)
    }

    usePost(url: string, body: object, params?: object, queryOptions?: UseMutationOptions) {
        return useMutation(this.get_query_key("POST", url), async () => {
            return await this.post(url, body, params)
        }, queryOptions)
    }

    usePatch(url: string, body: object, params?: object, queryOptions?: UseMutationOptions) {
        return useMutation(this.get_query_key("PATCH", url), async () => {
            return await this.patch(url, body, params)
        }, queryOptions)
    }

    useDelete(url: string, params?: object, queryOptions?: UseMutationOptions) {
        return useMutation(this.get_query_key("DELETE", url), async () => {
            return await this.delete(url, params)
        }, queryOptions)
    }
}
