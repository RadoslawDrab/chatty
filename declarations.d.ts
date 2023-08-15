declare module '*.svg' {
	import React from 'react'
	import { SvgProps } from 'react-native-svg'
	const content: React.FC<SvgProps>
	export default content
}
declare module '@env' {
	export const GRAPHQL_SERVER_URL: string
	export const GRAPHQL_TOKEN: string
}
