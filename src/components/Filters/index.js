import React from 'react';
import './Filter.css';
import DropDown from './DropDown';
import OrdemAlfabeticaButton from './OrdemAlfabeticaButton';

function Filters() {

    return (
        <div className="filters-container">
            <DropDown/>
            <OrdemAlfabeticaButton/>
        </div>
    )
}

export default Filters;
