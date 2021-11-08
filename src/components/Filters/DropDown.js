import './Filter.css';
import React,{useState} from 'react';
import {filteredProductsLowToHigh,filteredProductsHighToLow,filteredProductsByScore} from '../../store/slices/productSlice';
import {useDispatch} from 'react-redux';


function DropDown() {
    // SHOW OR HIDE DROPDOWN 
    const [isDropdownVisible,setDropdownVisible] = useState(false);

    const dispatch = useDispatch()

    const filterByLowPrices = () => {
        dispatch(filteredProductsLowToHigh());
        setDropdownVisible(!isDropdownVisible);
    }

    const filterByHighPrices = () => {
        dispatch(filteredProductsHighToLow());
        setDropdownVisible(!isDropdownVisible);
    }
    const filterByHighScore = () => {
        dispatch(filteredProductsByScore());
        setDropdownVisible(!isDropdownVisible);
    }

    return (
        <div className="dropdown-container">

            <button onClick={() => setDropdownVisible(!isDropdownVisible)}>FILTROS &#9660;</button>

            <ul className={isDropdownVisible ? 'filter-items' : 'InVisible'}>
                <li className="item"  onClick={filterByLowPrices}>$ Menor preço</li>
                <li className="item"  onClick={filterByHighPrices}>$ Maior preço</li>
                <li className="item"  onClick={filterByHighScore}>% Maior Score</li>
            </ul>
            
        </div>
    )
}

export default DropDown;
