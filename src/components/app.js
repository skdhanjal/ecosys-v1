import React from 'react';
import '../styles/app.scss';

import Welcome from './Welcome';
import FilterSearchContainer from '../containers/FilterSearchContainer';

export default () => (
    <div className="app-header">
        <Welcome name="Mr. Dhanjal"/>
        <FilterSearchContainer/>
    </div>
);
