import { UseMutationOptions, UseQueryOptions, useMutation, useQuery, useQueryClient } from "react-query"

import { API as SdkAPI } from "@lavita-io/bizberry-sdk"

export class API extends SdkAPI {
    queryPrefix: string = "bizberry-react"

    get_query_key(method: string, url: string, params?: object) {
        const key: any[] = [this.queryPrefix, ...url.split('/').filter(v => v !== "")]
        if (params) {
            key.push(params)
        }

        return key
    }

    useGet(url: string, params?: object, queryOptions?: Omit<UseQueryOptions, 'queryKey' | 'queryFn'>) {
        return useQuery(this.get_query_key("GET", url, params), async () => {
            return await this.get(url, params)
        }, queryOptions)
    }

    usePost(url: string, params?: object, queryOptions?: UseMutationOptions) {
        const queryClient = useQueryClient()
        return useMutation(this.get_query_key("POST", url, params), async ( body: object ) => {
            const response = await this.post(url, body, params)
            await queryClient.invalidateQueries(this.get_query_key("GET", url))
            return response
        }, queryOptions)
    }

    usePatch(url: string, params?: object, queryOptions?: UseMutationOptions) {
        const queryClient = useQueryClient()
        return useMutation(this.get_query_key("PATCH", url, params), async ( body: object ) => {
            const response = await this.patch(url, body, params)
            await queryClient.invalidateQueries(this.get_query_key("GET", url).slice(0, -1))
            return response
        }, queryOptions)
    }

    useDelete(url: string, params?: object, queryOptions?: UseMutationOptions) {
        const queryClient = useQueryClient()
        return useMutation(this.get_query_key("DELETE", url, params), async () => {
            const response = await this.delete(url, params)
            await queryClient.invalidateQueries(this.get_query_key("GET", url).slice(0, -1))
            return response
        }, queryOptions)
    }
}
