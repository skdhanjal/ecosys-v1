import React from 'react';
import '../styles/app.scss';

import Welcome from './Welcome';
import FilterSearch from './FilterSearch';

export default () => (
    <div className="app-header">
        <Welcome name="Mr. Dhanjal"/>
        <FilterSearch/>
    </div>
);
