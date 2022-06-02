import { useAPI } from "./use-api"
import { useMutation } from "react-query"

const useLogin = () => {
    const client = useAPI()
    return useMutation(async values => await client.login(values))
}

export { useLogin }
