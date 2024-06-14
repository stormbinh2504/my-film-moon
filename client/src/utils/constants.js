export const PATH_NAME = {
    LOGIN: "/login",
    PAGE_404: "/404",
    NOT_FOUND: "/notfound",
    HOME: "/",
    LIST_NEW_FILM: "/danh-sach/phim-moi",
    LIST_SINGLE_FILM: "/danh-sach/phim-le",
    LIST_SERIES_FILM: "/danh-sach/phim-bo",
    LIST_RAP_FILM: "/danh-sach/phim-chieu-rap",


    INFO_MOVIE: "/info",
    MOVIE: "/movie",

    ADMIN_MOVIE_CREATE: "/movie/create",
    ADMIN_MOVIE_LIST: "/movie/list",
    ADMIN_ADD_EPISODE: "/movie/add-episode",
    ADMIN_MOVIE_EDIT: "/movie/edit",


    ABOUT_OUR: "/about",
    CONTACT: "/contact",
    GUARANTEE: "/guarantee",
    SECURITY: "/security",
    PAYMENT: "/payment",
    TRANSPORT: "/transport",
    CATALOGUE: "/catalogue",

    ADMIN: "/admin",
    ADMIN_CONTACT_PAGE: "/admin-contact-page",
}


export const LINK_CATALOGUE = "https://drive.google.com/file/d/1H-frDOuEx0pTjGlFFDiK5wl6eA26cz-4/view"


export const LIST_TYPE_FILM = [
    {
        "title": "Phim lẻ",
        "value": 1
    },
    {
        "title": "Phim bộ",
        "value": 2
    },
]

export const LIST_TYPE_CATEGORIES = {
    PHIMMOI: 1,
    PHIMLE: 2,
    PHIMBO: 3,
    PHIMCHIEURAP: 4,
    PHIM_TUONG_TU: 5,
}

export const FORM_FILM = {
    "name": "",
    "avatar": "",
    "totalEpisodes": 1,
    "duration": 0,
    "nameEnglish": "",
    "trailerTitle": "",
    "trailerLink": "",
    "description": "",
    "tags": "",
    "status": "",
    "quality": "",
    "subtitle": "",
    "category": 1,
    "format": 1,
    "country": "nga",
    "genre": [],
    "year": "",
    "director": "",
    "cast": "",
    "rating": 0,
    "views": 0,
    "hot": false,
}

export const FILTER_MOVIES = {
    "nameSearch": "",
    "format": "",
    "country": "",
    "year": "",
}

