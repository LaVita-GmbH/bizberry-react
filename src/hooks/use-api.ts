import { APIContext, StoreContext } from "../context"
import React, { useContext } from "react"

export const useAPI = () => useContext(APIContext)
export const useStore = () => useContext(StoreContext)
