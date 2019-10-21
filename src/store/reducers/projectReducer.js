const initState = {
    projects: [
        {id: 1, title: 'Our husband has gone mad again', content: 'The report reaching us confirms the story!'},
        {id: 2, title: 'The gods are not to blame', content: 'Please dont blame the gods they are innocent'},
        {id: 3, title: 'There was a country', content: 'Truth be told there was country'}
    ]
}

const projectReducer = (state = initState, action) => {
    switch (action.type){
        case 'CREATE_PROJECT': 
            console.log('created project', action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.err);
            return state;
        default:
            return state;
    }
}

export default projectReducer;