import { SvgProps } from 'react-native-svg'
import { ButtonProps } from '../types.modal'

export interface IconButtonProps extends ButtonProps {
	iconComponent: React.FC<SvgProps>
	activeIconStyle: SvgProps
	inactiveIconStyle: SvgProps
	activeIcon?: React.FC<SvgProps>
	inactiveIcon?: React.FC<SvgProps>
}
