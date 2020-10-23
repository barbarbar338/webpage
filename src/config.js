import {
    faDiscord,
    faGithub,
    faInstagram,
    faTwitter,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export default {
    SOCIAL_MEDIA: [
        {
            COLOR: "#f14e32",
            URL: "https://github.com/barbarbar338",
            ICON: faGithub,
            ROUTE: "/github",
        },
        {
            COLOR: "aqua",
            URL: "https://twitter.com/ben_baris_d",
            ICON: faTwitter,
            ROUTE: "/twitter",
        },
        {
            COLOR: "lightcoral",
            URL: "https://www.instagram.com/ben_baris.d",
            ICON: faInstagram,
            ROUTE: "/instagram",
        },
        {
            COLOR: "red",
            URL: "https://youtube.com/ProjectHammer",
            ICON: faYoutube,
            ROUTE: "/youtube",
        },
        {
            COLOR: "#7289da",
            URL: "https://discordapp.com/users/331846231514939392",
            ICON: faDiscord,
            ROUTE: "/discord",
        },
    ],
};
