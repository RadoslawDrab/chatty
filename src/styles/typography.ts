type DefaultText = {
	fontWeight: string
	fontSize: number
	fontFamily: string
}
interface Styles {
	heading: {
		1: DefaultText
		2: DefaultText
		3: DefaultText
		4: DefaultText
	}
	button: Button
	label: DefaultText
	title: TextExtended
	caption: TextExtended
	body: {
		text: DefaultText
		caption: TextExtended
		specialText: TextExtended
	}
}
interface Button extends DefaultText {
	letterSpacing: number
}
interface TextExtended extends DefaultText {
	lineHeight: number
}
const styles: Styles = {
	heading: {
		1: {
			fontFamily: 'Poppins',
			fontWeight: '700',
			fontSize: 36
		},
		2: {
			fontFamily: 'Poppins',
			fontWeight: '700',
			fontSize: 28
		},
		3: {
			fontFamily: 'Poppins',
			fontWeight: '700',
			fontSize: 22
		},
		4: {
			fontFamily: 'Poppins',
			fontWeight: '600',
			fontSize: 16
		}
	},
	button: {
		fontFamily: 'Poppins',
		fontWeight: '600',
		fontSize: 16,
		letterSpacing: 1
	},
	label: {
		fontFamily: 'Poppins',
		fontWeight: '500',
		fontSize: 16
	},
	title: {
		fontFamily: 'Poppins',
		fontWeight: '500',
		fontSize: 15,
		lineHeight: 20
	},
	caption: {
		fontFamily: 'Poppins',
		fontWeight: '400',
		fontSize: 10,
		lineHeight: 10
	},
	body: {
		text: {
			fontFamily: 'SF Compact Text',
			fontWeight: '400',
			fontSize: 14
		},
		caption: {
			fontFamily: 'SF Compact Display',
			fontWeight: '700',
			fontSize: 12,
			lineHeight: 16
		},
		specialText: {
			fontFamily: 'SF Compact Display',
			fontWeight: '400',
			fontSize: 12,
			lineHeight: 16
		}
	}
}
export default styles
