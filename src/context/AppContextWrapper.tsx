import { useReducer } from 'react'

import { appContext } from './appContext'
import { initialState, reducer } from 'reducer/appReducer'

const AppContextWrapper = (props: any) => {
	const [state, dispatch] = useReducer(reducer, initialState)
	return <appContext.Provider value={[state, dispatch]}>{props.children}</appContext.Provider>
}
export default AppContextWrapper
