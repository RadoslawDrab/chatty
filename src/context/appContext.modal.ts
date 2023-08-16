import { Dispatch } from 'react'

import { Actions, State } from 'reducer/appReducer.modal'

export type AppContext = [state: State, dispatch: Dispatch<Actions>]
