import { Actions, State } from './appReducer.modal'

const initialState: State = {
	user: { id: '', firstName: '', lastName: '', email: '', role: '' },
	rooms: []
}
function reducer(state: State, action: Actions): State {
	switch (action.type) {
		case 'SET_USER': {
			return { ...state, ...action.user }
		}
		case 'SET_USERS_ROOMS': {
			return { ...state, rooms: action.rooms }
		}
		default: {
			return state
		}
	}
}

export { initialState, reducer }
