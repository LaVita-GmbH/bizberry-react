import { useAPI } from "./use-api"
import { useMutation } from "react-query"

export const useOTP = () => {
    const client = useAPI()
    return useMutation(async (values: object) => {
        if (!client) return
        return await client.post("/access/auth/otp", {tenant: { id: client.tenant }, ...values}, undefined, undefined, false), { mutationKey: ["bizberry-react", "access", "auth", "reset"]}
    })
}
