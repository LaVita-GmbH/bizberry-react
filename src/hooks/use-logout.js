import { API } from "@lavita-io/bizberry-sdk"
import { useMutation } from "react-query"

/**
 * 
 * @param {API} client 
 * @returns 
 */
const useLogout = (client) => {
    return useMutation(async () => await client.logout())
}

export { useLogout }