import { Box, Button, Divider, Drawer, FormControl, Input, InputLabel, Menu, MenuItem, Select, Stack, Typography } from "@mui/material";
import { filterData } from "../utils/FilterData";
import React, { useEffect, useState } from "react";
import ClearIcon from '@mui/icons-material/Clear';
import { baseUrl, fetchApi } from "../utils/FetchApi";

const Search = ({ setFilteredProperties, explorePurpose, setIsLoading }) => {
    const [query, setQuery] = useState({
        purpose: `${explorePurpose}`,
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

    const getFilteredProperty = async ({ query }) => {
        setIsLoading(true);
        const purpose = query.purpose || `${explorePurpose}`;
        const rentFrequency = query.rentFrequency || 'yearly';
        const minPrice = query.minPrice || '0';
        const maxPrice = query.maxPrice || '1000000';
        const roomsMin = query.roomsMin || '0';
        const bathsMin = query.bathsMin || '0';
        const sort = query.sort || 'price-desc';
        const areaMax = query.areaMax || '35000';
        const locationExternalIDs = query.locationExternalIDs || '5002';
        const categoryExternalID = query.categoryExternalID || '4';

        fetchApi(`${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`)
            .then((data) => setFilteredProperties(data.hits))
            .then(() => setIsLoading(false));
    }

    const clearFilters = () => {
        setQuery({
            purpose: `${explorePurpose}`,
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
        getFilteredProperty({ query })
    }, [query]);

    return (
        <>
            <Stack minWidth='250px' height='100vh'
                position='sticky' top='0' left='0'
                sx={{ overflow: 'auto', p: 2 }} className="filter-box" spacing={2} border={1} borderColor='black' borderRadius={2} bgcolor='#ccccca'>
                <Stack direction='row' justifyContent='space-between' alignItems='center'>
                    <Stack direction='row' alignItems='center'>
                        <Stack>
                            <Typography sx={{ fontWeight: 'bold', fontFamily: 'monospace' }}>Filter Properties</Typography>
                        </Stack>
                    </Stack>
                    <Button size="small" onClick={clearFilters} sx={{ borderRadius: 2, border: 2, borderColor: '#8b8484', color: '#8b8484', '&:hover': { borderColor: '#6a6969', color: '#6a6969' } }}>
                        <Stack direction='row' alignItems='center'>
                            <ClearIcon fontSize="small" />
                            Clear
                        </Stack>
                    </Button>
                </Stack>
                <Box display='flex' flexDirection='column'>
                    {
                        filterData.map((filter) => {
                            return (
                                <FormControl key={filter.queryName} size="small" sx={{ marginTop: '2vh', marginBottom: '2vh' }} variant="filled">
                                    <InputLabel >{filter.placeholder}</InputLabel>
                                    <Select size="small" onChange={(e) => {
                                        setQuery((prevQuery) => ({
                                            ...prevQuery,
                                            [filter.queryName]: e.target.value,
                                        }))
                                    }}
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
            </Stack>
        </>
    );
}

export default Search;