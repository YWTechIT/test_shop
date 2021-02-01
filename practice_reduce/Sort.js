const NAME = 'Sort/NAME';
const ASC = 'Sort/ASC';
const DESC = 'Sort/DESC';

export const name = title => ({
    type: NAME,
    title
})

export const asc = title => ({
    type: ASC,
    title
})

export const desc = title => ({
    type: DESC,
    title
})

const initialState = {
    title: ''
}

function sort(state = initialState, action){
    switch(action.type) {
        case NAME:
            return {
                ...state,
                title: action.title
            }
        case ASC:
            return {
                ...state,
                title: action.title
            }
        case DESC:
            return {
                ...state,
                title: action.title
            }
        default:
            return state;
    }   

}

export default sort;