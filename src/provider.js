import {APIContext, StoreContext} from "./context"

import { QueryClientProvider } from "react-query"
import React from "react"

export const BizberryProvider = ({ children, queryClient, store, api }) => {
    return (
        <QueryClientProvider client={queryClient}>
            <StoreContext.Provider value={store}>
                <APIContext.Provider value={api}>{children}</APIContext.Provider>
            </StoreContext.Provider>
        </QueryClientProvider>
    )
}
