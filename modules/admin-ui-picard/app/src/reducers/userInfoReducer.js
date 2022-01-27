import {
    LOAD_USER_INFO_FAILURE,
    LOAD_USER_INFO_IN_PROGRESS,
    LOAD_USER_INFO_SUCCESS
} from "../actions/userInfoActions";

/**
 * This file contains redux reducer for actions affecting the state of information about current user
 */

const initialState = {
    isLoading: false,
    org: {},
    roles: [],
    userRole: '',
    user: {}
}

// reducer
const userInfo = (state=initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case LOAD_USER_INFO_IN_PROGRESS: {
            return {
                ...state,
                isLoading: true
            }
        }
        case LOAD_USER_INFO_SUCCESS: {
            const { userInfo } = payload;
            return {
                ...state,
                isLoading: false,
                org: userInfo.org,
                roles: userInfo.roles,
                userRole: userInfo.userRole,
                user: userInfo.user
            }
        }
        case LOAD_USER_INFO_FAILURE: {
            return {
                ...state,
                isLoading: false,
                org: {},
                roles: [],
                userRole: '',
                user: {}
            }
        }
        default:
            return state;
    }
}

export default userInfo;
