type DefaultText = {
	fontWeight: '700' | '600' | '500' | '400' | 'normal' | 'bold' | '100' | '200' | '300' | '800' | '900'
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
			fontFamily: 'PoppinsBold',
			fontWeight: '700',
			fontSize: 36
		},
		2: {
			fontFamily: 'PoppinsBold',
			fontWeight: '700',
			fontSize: 28
		},
		3: {
			fontFamily: 'PoppinsBold',
			fontWeight: '700',
			fontSize: 22
		},
		4: {
			fontFamily: 'PoppinsSemiBold',
			fontWeight: '600',
			fontSize: 16
		}
	},
	button: {
		fontFamily: 'PoppinsSemiBold',
		fontWeight: '600',
		fontSize: 16,
		letterSpacing: 1
	},
	label: {
		fontFamily: 'PoppinsMedium',
		fontWeight: '500',
		fontSize: 16
	},
	title: {
		fontFamily: 'PoppinsMedium',
		fontWeight: '500',
		fontSize: 15,
		lineHeight: 20
	},
	caption: {
		fontFamily: 'PoppinsRegular',
		fontWeight: '400',
		fontSize: 10,
		lineHeight: 10
	},
	body: {
		text: {
			fontFamily: 'SFCompactTextRegular',
			fontWeight: '400',
			fontSize: 14
		},
		caption: {
			fontFamily: 'SFCompactDisplayBold',
			fontWeight: '700',
			fontSize: 12,
			lineHeight: 16
		},
		specialText: {
			fontFamily: 'SFCompactDisplayRegular',
			fontWeight: '400',
			fontSize: 12,
			lineHeight: 16
		}
	}
}
export default styles
