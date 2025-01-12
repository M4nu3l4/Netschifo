import {Component} from 'react'
import Spinner from 'react-bootstrap/Spinner';

class Loading extends Component{
    render(){
        return(
            <Spinner animation="border" variant="primary" />
        )
    }
}
export default Loading