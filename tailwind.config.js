const withMT = require("@material-tailwind/react/utils/withMT");
const colors = require("tailwindcss/colors");

module.exports = withMT({
    content: ["./src/**/*.{js,jsx,ts,tsx}",
        "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
        "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        container: {
            center: true,
            sm: "540px",
            md: "720px",
            lg: "960px",
            xl: "1140px",
            "2xl": "1320px",
            padding: {
                DEFAULT: '16px',
            },
        },
        extend: {
            fontFamily: {
                body: ["Montserrat", "sans-serif"],
            },
            colors: {
                transparent: "transparent",
                primary: {
                    BB9C66: "#BB9C66",
                    F6E18D: "#F6E18D",
                    A89142: "#A89142",
                    "051A3A": "#051A3A",
                },
                secondary: {
                    D0E7E6: "#D0E7E6",
                    AEC7C3: "#AEC7C3",
                    '224376': "#224376",
                    "122F5B": "#122F5B",
                    "2056A9": "#2056A9",
                }
            },
        },
    },
    plugins: [],
});