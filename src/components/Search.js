import { Box, Button, FormControl, Input, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import FilterListIcon from '@mui/icons-material/FilterList';
import { filterData, getFilterValues } from "../utils/FilterData";
import './Search.css'
import React, { useEffect, useState } from "react";
import { useRoutes } from "react-router-dom";

const Search = ({getFilterValues}) => {
    const [query, setQuery] = useState({
        purpose: 'for-sale',
        rentFrequency: '',
        categoryExternalID: '',
        minPrice: '',
        maxPrice: '',
        areaMax: '',
        roomsMin: '',
        bathsMin: '',
        sort: '',
        locationExternalIDs: '',
        furnishingStatus: '',
      });

    const clearFilters = () => {
        setQuery({
            purpose: 'for-sale',
            rentFrequency: '',
            categoryExternalID: '',
            minPrice: '',
            maxPrice: '',
            areaMax: '',
            roomsMin: '',
            bathsMin: '',
            sort: '',
            locationExternalIDs: '',
            furnishingStatus: '',
          });
    }

    useEffect(() => {
        getFilterValues({query})
        }, [query]);

    return (
        <>
            <Box display='flex' flexDirection='column' minWidth='20%' height='100vh'
            position='sticky' top='0' left='0' sx={{overflow:'auto'}} className="filter-box">
                <Box position='sticky' display='flex' flexDirection='row' justifyContent='center'>
                    <Typography>Filter properties</Typography>
                    <FilterListIcon />
                    <Button size="small" onClick={clearFilters}>Clear</Button>
                </Box>
                <Box display='flex' flexDirection='column'>
                    {
                        filterData.map((filter) => { 
                            return (
                                <FormControl key={filter.queryName} size="small" sx={{marginTop: '2vh', marginBottom: '2vh'}} variant="standard"> 
                                <InputLabel>{filter.placeholder}</InputLabel>
                                <Select onChange={(e) => {setQuery((prevQuery) => ({
                                    ...prevQuery,
                                    [filter.queryName]: e.target.value,
                                }))}} 
                                value={query[filter.queryName]}>
                                {
                                    filter.items.map((options) => {
                                        return (
                                            <MenuItem key={options.value}
                                            value={options.value} >{options.name}</MenuItem>
                                        );
                                    })
                                }                               
                                </Select>
                                </FormControl>
                            );
                        })
                    }
                </Box>
            </Box>
        </>
    );
}

export default Search;