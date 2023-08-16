import { useState } from 'react'

const usePress = () => {
	const [isPressed, setIsPressed] = useState<boolean>(false)
	function onPressIn() {
		setIsPressed(true)
	}
	function onPressOut() {
		setIsPressed(false)
	}
	return { isPressed, onPressIn, onPressOut }
}

export default usePress
