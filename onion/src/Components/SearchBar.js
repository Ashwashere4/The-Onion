import React, {useState} from 'react'
import './SearchBar.css'
import SearchIcon from '@mui/icons-material/Search';

function SearchBar({placeholder, data}){

    const [filteredData, setFilteredData] = useState([]);

    const handleFilter = (event) => {
        const searchWord = event.target.value
        const newFilter = data.filter((value) => {
            return value.recipe.toLowerCase().includes(searchWord.toLowerCase());
        });

        if(searchWord === "" ){
            setFilteredData([])
        } else{

        setFilteredData(newFilter);
    }
};
    return (
        <div className="search">
            <div className = "searchInputs">
                <input type= "text" placeholder={placeholder} onChange={handleFilter}/> 
                <div className = "searchIcon">
                    <SearchIcon color = "secondary"/> 
                </div>
            </div>
            {filteredData.length !== 0 && (
            <div className = "dataResult">
                {filteredData.map((value, key) => {
                    return <p className = "dataItem"> {value.recipe} </p>
                })}
            </div>
            )}
        </div>
    )
}


export default SearchBar