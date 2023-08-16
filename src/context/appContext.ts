import React from 'react'

import { initialState } from 'reducer/appReducer'

import { AppContext } from './appContext.modal'

export const appContext = React.createContext<AppContext>([initialState, () => {}])
