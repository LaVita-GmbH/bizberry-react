import { API } from "./api"
import { createContext } from "react"
import { store } from "@lavita-io/bizberry-sdk"

export const APIContext = createContext<API | undefined>(undefined)
export const StoreContext = createContext<store.AbstractStore | undefined>(undefined)
