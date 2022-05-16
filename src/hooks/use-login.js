import { API } from "@lavita-io/bizberry-sdk"
import { useMutation } from "react-query"

const useLogin = () => {
    return useMutation((values) => API.current.login(values))
}

export { useLogin }
