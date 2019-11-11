import React, { Component } from 'react';
class ErrorBundery extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError:false }
    }
    componentDidCatch(error,info){
         // You can also log the error to an error reporting service
    logErrorToMyService(error, info)
    }
     static getDerivedStateFromError(error){
         return {hasError:true}

     }
    render() { 
         if (this.state.hasError) {
                return <h1>{'Something went  wrong'}</h1>
            }
            return( this.props.children );
    }
}
 
export default ErrorBunder;