import { useState } from 'react'

import { IconButtonProps } from './types'

import Button from '../Button'

const IconButton = (props: IconButtonProps) => {
	const [isActive, setIsActive] = useState(false)
	const activeIcon = props.activeIcon || props.iconComponent
	const inactiveIcon = props.inactiveIcon || props.iconComponent
	return (
		<Button
			{...props}
			onActive={setIsActive}
			iconStyles={isActive ? props.activeIconStyle : props.inactiveIconStyle}
			iconComponent={isActive ? activeIcon : inactiveIcon}
		/>
	)
}
export default IconButton
