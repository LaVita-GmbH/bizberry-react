import { API } from "@lavita-io/bizberry-sdk"
import { useMutation } from "react-query"

/**
 *
 * @param {API} client
 * @returns
 */
const useLogin = client => {
    return useMutation(async values => await client.login(values))
}

export { useLogin }
