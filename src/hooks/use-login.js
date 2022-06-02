import { useAPI } from "../provider"
import { useMutation } from "react-query"

const useLogin = () => {
    const client = useAPI()
    return useMutation(async values => await client.login(values))
}

export { useLogin }
