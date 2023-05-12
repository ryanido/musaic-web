import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1DB954',
    },
    secondary: {
      main: '#B3B3B3',
    },
  },
  typography: {
    fontFamily: ['Poppins', 'sans-serif'].join(','),
    h1: {
      fontSize: '3rem',
      fontWeight: 700,
      letterSpacing: '-0.03em',
      lineHeight: 1.2,
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 500,
      letterSpacing: '-0.02em',
      lineHeight: 1.2,
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 500,
      letterSpacing: '-0.02em',
      lineHeight: 1.2,
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 500,
      letterSpacing: '-0.01em',
      lineHeight: 1.2,
    },
    subtitle1: {
      fontSize: '1.25rem',
      fontWeight: 400,
      letterSpacing: '0.01em',
      lineHeight: 1.5,
    },
  },
});



const albumData = [  {    id: 1,    name: 'Album 1',    artist: 'Artist 1',    imageUrl: 'https://via.placeholder.com/300x300',  },  {    id: 2,    name: 'Album 2',    artist: 'Artist 2',    imageUrl: 'https://via.placeholder.com/300x300',  },  {    id: 3,    name: 'Album 3',    artist: 'Artist 3',    imageUrl: 'https://via.placeholder.com/300x300',  },  {    id: 4,    name: 'Album 4',    artist: 'Artist 4',    imageUrl: 'https://via.placeholder.com/300x300',  },];

const Home = () => {

  return (
    <div>
      <Typography variant="h4">
        Welcome back [user] here's what we've been spinnin'
      </Typography>
      <Grid container spacing={4}>
        {albumData.map((album) => (
          <Grid item xs={12} sm={6} md={4} key={album.id}>
            <img
              src={album.imageUrl}
              alt={`${album.name} by ${album.artist}`}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Home;
