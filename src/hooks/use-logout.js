import { useAPI } from "../provider"
import { useMutation } from "react-query"

const useLogout = () => {
    const client = useAPI()
    return useMutation(async () => await client.logout())
}

export { useLogout }
