import React, { createContext } from "react"

import { API } from "./api"
import { store } from "@lavita-io/bizberry-sdk"

export const APIContext: React.Context<API> = createContext(undefined)
export const StoreContext: React.Context<store.AbstractStore> = createContext(undefined)
