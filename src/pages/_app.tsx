import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import {darkTheme, lightTheme} from "@/themes";
import {UIProvider} from "@/context/ui";


export default function App({Component, pageProps}: AppProps) {
    return (
        <UIProvider>
        <ThemeProvider theme={darkTheme}>
            <CssBaseline/>
            <Component {...pageProps} />
        </ThemeProvider>
        </UIProvider>
    )

}
