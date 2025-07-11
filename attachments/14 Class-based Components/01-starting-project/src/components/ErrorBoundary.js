import { Component } from "react";

class ErrorBoundary extends Component {
    
    constructor() {
        super();
        this.state = { hasError: false };
    }
    
    componentDidCatch(error) { // will be triggered when one of the child components throws an error
        console.log(error);
        
        this.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError) {
            return <p>Something went wrong!</p>;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;