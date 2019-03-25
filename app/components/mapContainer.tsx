import * as React from 'react';
import { ParsedMap, MapState, MapContainerProps } from '../store/map/types';
import { connect } from 'react-redux';

interface Props {
    state:MapState,
    ownProps:MapContainerProps
}

class MapContainer extends React.Component<Props> {
    constructor(props:any) { // TODO how ?
        super(props)
    }

    render () {
        console.log('test 1 ');
        console.log(this.props.state);
        console.log(this.props.ownProps);
        return null;
    }
}
function mapStateToProps(state:MapState, ownProps:MapContainerProps) {
    return {
        state,
        ownProps
    };
}
export default connect(
    mapStateToProps
)(MapContainer)