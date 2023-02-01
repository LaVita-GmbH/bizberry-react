import { LoginValuesType } from "@lavita-io/bizberry-sdk"
import { useAPI } from "./use-api"
import { useMutation } from "@tanstack/react-query"

const useLogin = () => {
    const client = useAPI()
    return useMutation(async (values: LoginValuesType) => await client?.login(values), { mutationKey: ["bizberry-react", "access", "auth", "user"]})
}

export { useLogin }
