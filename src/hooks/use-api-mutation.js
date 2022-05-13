import { SDK } from "@lavita-io/bizberry-sdk"
import { useMutation } from "react-query"

const useAPIMutation = (method, url, params, queryOptions) => {
    const mutate = () => {
        if (method === "POST") {
            SDK.post(url, body, params)
        }
        if (method === "PUT") {
            SDK.put(url, body, params)
        }
        if (method === "PATCH") {
            SDK.patch(url, body, params)
        }
        return useMutation(mutate, ...queryOptions)
    }
}

export { useAPIMutation }
