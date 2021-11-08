import React from 'react';
import {filteredProductsAlphabetically} from '../../store/slices/productSlice';
import {useDispatch} from 'react-redux';

function OrdemAlfabeticaButton() {

    const dispatch = useDispatch();

    return (
        <div className="OrdemAlfabeticaButton-container">
            <button onClick={() => dispatch(filteredProductsAlphabetically())}>ORDEM ALFABÉTICA</button>
        </div>
    )
}

export default OrdemAlfabeticaButton;
