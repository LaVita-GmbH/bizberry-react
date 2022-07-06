import {APIContext, StoreContext} from "./context"
import { QueryClient, QueryClientProvider } from "react-query"

import { API } from "./api"
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { store } from "@lavita-io/bizberry-sdk"

type BizberryProviderOptions = {
    children: any,
    queryClient: QueryClient,
    store: store.AbstractStore,
    api: API,
}

export const BizberryProvider = ({ children, queryClient, store, api }: BizberryProviderOptions) => {
    return (
        <QueryClientProvider client={queryClient}>
            <StoreContext.Provider value={store}>
                <APIContext.Provider value={api}>{children}</APIContext.Provider>
            </StoreContext.Provider>
        </QueryClientProvider>
    )
}
