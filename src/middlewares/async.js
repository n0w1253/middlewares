export default function( { dispatch } ) {
    return next => action => {
       // console.log(action)

        // if action does not have payload or, the payload does not have a .then
        // property we don't care about it, send it on
        if (!action.payload || !action.payload.then) {
            return next(action)
        }

        // make sure the action's promise resolves
        action.payload.then(response => {    //same as function(response){ }
            //create a new action with the old type, but
            //replace the promise withe the response data
           const newAction = { ...action, payload: response }
           dispatch(newAction)   //send it through everything (the middleware stack) again
        })
    }

    // next => action => {  }
    // ES5 syntax
    //return function(next) {
    //   return function(action) {
    //       console.log(action)
    //       next(action)
    //   }
    //}
}