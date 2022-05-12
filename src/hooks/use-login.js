import { API } from "@lavita-io/bizberry-sdk"
import { useMutation } from "react-query"

const useLogin = () => {
    return useMutation(API.current.login)
}

export { useLogin }