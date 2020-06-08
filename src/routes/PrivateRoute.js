import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import Header from './../components/Header'

export const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {
    // console.log('isAuthenticated', isAuthenticated)
    // console.log('component', Component)
    // console.log('rest',rest)
    // let innerComponent 
    // if(isAuthenticated) innerComponent = (props) => ( <Component {...props} />)
    // else innerComponent = (<Redirect to="/" />)
    // return (
    //     <Route rest component={innerComponent} />
    // )
    if(isAuthenticated) {
        return (
            <div>
                <Header/>
                <Component />
            </div>
        )
    }
    else return (<Redirect to="/" />)
}

// Proposed not working
// export const PrivateRoute = ({
//     isAuthenticated,
//     component: Component,
//     ...rest
// }) => (
//     <Route rest component={(props) => {
//         isAuthenticated ? (
//             <Component {...props} />
//         ) : (
//             <Redirect to="/" />
//         )
//     }}/>
// )

// Basic working without functionality
// export const PrivateRoute = (props) => (
//     <Route {...props} />
// )

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
})

export default connect(mapStateToProps)(PrivateRoute)