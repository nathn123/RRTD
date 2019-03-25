import * as React from 'react';
import { MapTileProps } from '../store/map/types';

export default class MapTile extends React.Component<MapTileProps> {
    constructor(props: MapTileProps) {
        super(props);
    }

    render() {
        return (
            <img src={this.props.src} />
        )
    }
}
