import {Config} from 'tailwindcss';

const config: Config = {
    content: [
        './src/**/*.{html,ts}',
    ],
    theme: {
        extend:{
            colors:{
                background: '#F3F4F6',
                text: '#1F1F1F',
                accent: '#EE8866',
                secondaire: '#B8B0A1',
                hover: '#FA7D44',

                // optionnel colors nuances accent
                accentLight: '#f3a892',
                accentDark: '#c45e4f'
            }
        },
    },
    plugins: [],
}

export default config;