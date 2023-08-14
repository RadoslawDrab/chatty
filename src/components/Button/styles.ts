import { StyleSheet } from 'react-native'

import lib from 'styles/library'

export default StyleSheet.create({
	button: {
		backgroundColor: lib.colors.primary[500],
		paddingVertical: 5,
		paddingHorizontal: 10,
		text: {
			color: lib.colors.white,
			...lib.typography.button
		}
	},
	buttonAlt: {
		backgroundColor: 'transparent'
	},
	active: {
		backgroundColor: lib.colors.primary[700]
	},
	disabled: {
		backgroundColor: lib.colors.gray[300]
	}
})
