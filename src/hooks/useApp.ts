import { useContext } from 'react'

import { appContext } from 'context/appContext'

const useApp = () => {
	const context = useContext(appContext)
	return context
}

export default useApp
