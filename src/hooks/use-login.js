import { useMutation } from "react-query"

const useLogin = (client) => {
    return useMutation((values) => client.login(values))
}

export { useLogin }
