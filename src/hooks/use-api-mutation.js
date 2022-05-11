import { SDK } from "@lavita-io/bizberry-sdk"
import { useMutation } from "react-query"

const useAPIMutation = (method, url, params, queryOptions) => {
    const mutate = () => {
        if (method === "post") {
            SDK.post(url, body, params)
        }
        if (method === "put") {
            SDK.put(url, body, params)
        }
        if (method === "patch") {
            SDK.patch(url, body, params)
        }
        return useMutation(mutate, ...queryOptions)
    }
}

export { useAPIMutation }
