import React from 'react';
import { StyleFilterBar, StyleSearchBar, StyleFilterContainer, FilterButton, FilterContainer } from './../styles/styled';
import { Search, Close } from '@material-ui/icons';



const FilterBar = ({ title, contactStates, handleFilter, onChangeNameFilter, showFilter, filter, filterName, filterState }) => {
    return (        
        <StyleFilterContainer>
            <FilterContainer>

                {filter &&
                    <>
                        <StyleSearchBar>
                            <label htmlFor="">Name</label>
                            <input name="filterName" onChange={onChangeNameFilter} value={filterName}></input>
                        </StyleSearchBar>
                        <StyleFilterBar >
                            <label>{title} </label>
                            <select name="filterState" onChange={handleFilter} value={filterState}>
                                <option value="0" >---All---</option>
                                
                                {contactStates.length > 0 ?
                                    contactStates.map(contactState =>
                                        <option value={contactState.key} key={contactState.key}>{contactState.value}</option>)
                                    :
                                    <option value="">Loading...</option>
                                }
                            </select>
                        </StyleFilterBar>
                    </>
                }
                <FilterButton onClick={showFilter}>
                    {filter ? <Close fontSize="small" /> : <Search fontSize="small" />}
                </FilterButton>
            </FilterContainer>

        </StyleFilterContainer>
    );
};

export default FilterBar;