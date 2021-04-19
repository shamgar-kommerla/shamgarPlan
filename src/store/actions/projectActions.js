export const createProject = (project) => {
    return (dispatch,getState,{getFirebase,getFirestore}) => {
        //make async call to the database
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstName: 'Jonas',
            authorLastName: 'Mikkel',
            authorId: 12345,
            createdAt: new Date()
        }).then(() => {
            dispatch({type:'CREATE_PROJECT', project})
        }).catch((err)=> {
            dispatch({type:'CREATE_PROJECT_ERR', err})
        }) 
    }
}

// Here the 'action' is an object i.e.,{type:'CREATE_PROJECT', project}