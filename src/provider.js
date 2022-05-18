import { QueryClient, QueryClientProvider } from "react-query"

import React from "react"

const BizberryProvider = ({ children }) => {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                retry: false,
                enabled: typeof window !== "undefined",
            },
        },
    })

    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}

export default BizberryProvider
