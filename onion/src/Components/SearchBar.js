import React, {useState} from 'react'
import './SearchBar.css'
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import DataCard from './DataCard';



function SearchBar({placeholder, data}){

    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setwordEntered] = useState("");

    const handleFilter = (event) => {
        const searchWord = event.target.value
        setwordEntered(searchWord);
        const newFilter = data.filter((value) => {

            const tagsMatch = value.tags.toLowerCase().includes(searchWord.toLowerCase())
            const recipeMatch = value.recipe.toLowerCase().includes(searchWord.toLowerCase())

            return tagsMatch || recipeMatch;
        });

        if(searchWord === "" ){
            setFilteredData([])
        } else{

        setFilteredData(newFilter);
    }
};

    const clearInput = () => {
        setFilteredData([]);
        setwordEntered("");

    }
    


    return (
        <div>
        <div className="search">
            <div className = "searchInputs">
                <input type= "text" placeholder={placeholder} value = {wordEntered} onChange={handleFilter}/> 
                <div className = "searchIcon">
                    {wordEntered.length === 0 ? <SearchIcon color = "secondary"/>  : <CloseIcon id = "clearBtn" onClick={clearInput}/> }
                    
                </div>
            </div>
        </div>
        {filteredData.length !== 0 ? 
            <div className = "dataResult">
                {filteredData.map((value, key) => {
                    return <a className = "dataItem" href={value.url} target = "_blank" rel="noreferrer"> 
                        <DataCard title = {value.recipe} tags = {value.tags} />
                        </a>
                    
                })}
            </div>
        :
            <div className = "dataResult">
                {data.map((value, key) => {
                    return <a className = "dataItem" href={value.url} target = "_blank" rel="noreferrer"> 
                        <DataCard title = {value.recipe} tags = {value.tags} />
                        </a>
            
                })}
            </div>
            }
        </div>

    )

}
export default SearchBar