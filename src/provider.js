import { QueryClient, QueryClientProvider } from "react-query"
import React, {createContext, useContext} from "react"

const APIContext = createContext()
const StoreContext = createContext()

export const BizberryProvider = ({ children, queryClient, store, api }) => {
    return <QueryClientProvider client={queryClient}>
        <StoreContext.Provider value={store}>
            <APIContext.Provider value={api}>
                {children}
            </APIContext.Provider>
        </StoreContext.Provider>
    </QueryClientProvider>
}

export const useAPI = () => useContext(APIContext)
export const useStore = () => useContext(StoreContext)
