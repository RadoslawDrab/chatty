import { useState } from 'react'

import { IconButtonProps } from './types.modal'

import Button from '../Button'

import styles from '../styles'

const IconButton = (props: IconButtonProps) => {
	const [isActive, setIsActive] = useState(false)
	const activeIcon = props.activeIcon || props.iconComponent
	const inactiveIcon = props.inactiveIcon || props.iconComponent
	return (
		<Button
			{...props}
			onActive={setIsActive}
			iconStyles={isActive ? props.activeIconStyle ?? styles.svgIconActive : props.inactiveIconStyle ?? styles.svgIconInactive}
			iconComponent={isActive ? activeIcon : inactiveIcon}
		/>
	)
}
export default IconButton
