import { useAPI } from "./use-api"
import { useMutation } from "@tanstack/react-query"

const useLogout = () => {
    const client = useAPI()
    return useMutation(async () => await client?.logout())
}

export { useLogout }
