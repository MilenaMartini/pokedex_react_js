import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import PkLogo from '../Images/Pokédex_logo.png';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { Link } from '@mui/material';

const newpk = async (event) => {
  try {
    window.open('pokedex/new', '_self')
    }
  catch(err){
    alert('Algo deu errado :c' + err)
  }
 }


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function Navbar({ pokemonFilter, id }) {
  return (
    <Box sx={{ flexGrow: 1, marginBottom:"2em" }}>
      {/* 1 em equivale a dez pixels */}
      <AppBar position="static" sx={{background:"DarkBlue"}}>
        <Toolbar>
          <Box display="flex" justifyContent="space-between" width="100%">
            <Box component="img" src={PkLogo} height="3em"/>
          <Search onChange={(e) => pokemonFilter(e.target.value)}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Pesquisando..."
              inputProps={{ 'aria-label': 'search' }} />
          </Search>
          </Box>
          <Link to={`/Novo_Pokemon`}>
          <Button size="small" color="inherit" onClick={newpk}> <AddIcon/> </Button>
          </Link>

        </Toolbar>
      </AppBar>
    </Box>
  );
}

