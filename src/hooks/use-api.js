import { SDK } from "@lavita-io/bizberry-sdk"
import { useQuery } from "react-query"

const useAPI = (url, params, queryOptions) => {
    const query = () => {
        SDK.get(url, body, params)
    }
    return useQuery(query, ...queryOptions)
}

export { useAPI }
