import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined'; import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { colors } from '@mui/material';
import { auth } from '../auth/FirebaseConfig';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="twitter.com">
                Musaic
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}
// Spotify theme
const theme = createTheme(
    {
        palette: {
            primary: {
                main: '#1DB954',
            },
            secondary: {
                main: '#191414',
            },
            // background: {
            //     default: '#2b2d30'
            // },
            // text: {
            //     primary: '#FFFFFF',
            //     secondary: '#FFFFFF',
            // }
        },
        typography: {
            fontFamily: [
                'Montserrat',
                'sans-serif',
            ].join(','),
        },

    }
);

export default function SignIn() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        signInWithEmailAndPassword(auth, data.get('email'), data.get('password'))
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user);
                // ...
            }
            ).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            }
            );
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <PlayCircleOutlineOutlinedIcon sx={{ width: 250, height: 250, color: 'primary.main' }} />
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                {/* Go to signup page */}
                                <Link href="/signup" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>
    );
}