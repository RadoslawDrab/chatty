import { useMutation } from '@apollo/client'

import { SEND_MESSAGE } from 'api/mutations'
import { GET_ROOM } from 'api/queries'

import { Message } from 'api/types.modal'

const useMessage = () => {
	const [mutationFunction, { loading, error, data }] = useMutation<Message, { body: string; roomId: string }>(SEND_MESSAGE, {
		refetchQueries: [GET_ROOM]
	})
	return { mutation: mutationFunction, loading, error, data }
}

export default useMessage
