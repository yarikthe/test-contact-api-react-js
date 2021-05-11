
const SET_USERS = "SET_USERS";
const SET_CURENT_PAGE = "SET_CURENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const SET_PER_PAGE = "SET_PER_PAGE";

let initialState = {
    users: [],
    pageSize: 10,//Count item on one page
    totalUsersCount: 100, //Count users data
    currentPage: 1, //Current page
};

const reducerUsers = (state = initialState, action) => {

    switch (action.type)
    {
        case SET_USERS:
            return {
                ...state, users:  action.users
            };
        case SET_CURENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            };
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state, totalUsersCount: action.totalCount
            };
        case SET_PER_PAGE:
            return{
                ...state, pageSize: action.perPage
            };
        default:
            return state;
    }

    return state;
}


export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (page) => ({type: SET_CURENT_PAGE, currentPage: page});
export const setTotalCount = (totalCountUsers) => ({type: SET_TOTAL_USERS_COUNT, totalCount: totalCountUsers});
export const setPerPage = (perPage) => ({type: SET_PER_PAGE, perPage: perPage});

export default reducerUsers;