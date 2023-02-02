import { reactive } from "vue";

export const store = reactive({
    carouselPizzas: [
        {
            backgroundImg: '/src/assets/img/h3-rev-img-1.png',
            mainImg: '/src/assets/img/h3-rev-img-2.png'
        },
        {
            backgroundImg: '/src/assets/img/h3-rev-img-3.png',
            mainImg: '/src/assets/img/h3-rev-img-4.png'
        },
        {
            backgroundImg: '/src/assets/img/h3-rev-img-5.png',
            mainImg: '/src/assets/img/h3-rev-img-6.png'
        }
    ],
    carouselTestimonials: [
        {
            backgroundImg: '/src/assets/img/h3-testimonials-bckgrnd.jpg',
            text: '"Forget the trendy pizza shops, this hidden spot makes the best New York style pizza slice in Naples"',
            testimonial: 'Washington Post 2018'
        },
        {
            backgroundImg: '/src/assets/img/h3-testimonials-bckgrnd.jpg',
            text: '"Mi piace davvero tanto questo posto"',
            testimonial: 'Giggino'
        },
    ],
    sideImages: {
        specialsImage: '/src/assets/img/h1-img-4.jpg',
        dealsImage: '/src/assets/img/h3-img-5a.jpg',
        footerImage: '/src/assets/img/footer-img-1.jpg'
    },
    logos: {
        plainLogo: '/src/assets/img/logo.png',
        logoMobile: '/src/assets/img/mobile.png',
        logoHeaderLight: '/src/assets/img/h5-logo-divided-header.png',
        logoHeaderDark: '/src/assets/img/h5-logo-divided-header-dark.png',
        specialsLogo: '/src/assets/img/h1-img-7n.png'
    },
    bgPattern: 'src/assets/img/cielostellato.png',

    stock: [
        {
            mainInfo: '',
            secondaryInfo: '',
            image: '/src/assets/img/h3-img-1.jpg',
        },
        {
            mainInfo: '',
            secondaryInfo: '',
            image: '/src/assets/img/h3-img-2.jpg',
        },
        {
            mainInfo: '',
            secondaryInfo: '',
            image: '/src/assets/img/h3-img-3.jpg',
        },
        {
            mainInfo: '',
            secondaryInfo: '',
            image: '/src/assets/img/h3-img-4.jpg',
        },
    ],
    teamMembers: [
        {
            mainInfo: 'Frank Bailey',
            secondaryInfo: 'Kitchen Porter',
            image: '/src/assets/img/h1-team-1a-700x700.jpg',
        },
        {
            mainInfo: 'Giovanna Day',
            secondaryInfo: 'Manager',
            image: '/src/assets/img/h1-team-2a.jpg',
        },
        {
            mainInfo: 'Annah Jones',
            secondaryInfo: 'Watches paint dry',
            image: '/src/assets/img/h1-team-3a.jpg',
        },
        {
            mainInfo: 'Pallo Pinco',
            secondaryInfo: 'CEO',
            image: '/src/assets/img/h1-team-4a.jpg',
        },
    ],
    clients: [
        {
            name: 'Big Cheese',
            logo: 'src/assets/img/h1-clients-img-1.png'
        },
        {
            name: 'Bludoos Bar',
            logo: 'src/assets/img/h1-clients-img-2.png'
        },
        {
            name: 'Gordon',
            logo: 'src/assets/img/h1-clients-img-3.png'
        },
        {
            name: 'Cowboy',
            logo: 'src/assets/img/h1-clients-img-4.png'
        },
        {
            name: 'Vegan',
            logo: 'src/assets/img/h1-clients-img-5.png'
        },
    ],
    menu: {
        title: 'The best pizza menu in town',
        surtitle: 'Choose your flavour',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam ipsa.',
        products: [
            {
                name: 'Bismark',
                price: '$45',
                discountedPrice: '$30',
                image: '/src/assets/img/h3-product-img-1a-100x100.png',
                sold: false
            },
            {
                name: 'Fiori di zucca',
                price: '$7 - $50',
                discountedPrice: '',
                image: '/src/assets/img/h3-product-img-2a-150x150.png',
                sold: false
            },
            {
                name: 'Valdostana',
                price: '$55',
                discountedPrice: '',
                image: '/src/assets/img/h3-product-img-3a-150x150.png',
                sold: true
            },
            {
                name: 'Pizza tartufata',
                price: '$45',
                discountedPrice: '',
                image: '/src/assets/img/h3-product-img-4a-150x150.png',
                sold: false
            },
            {
                name: 'Francescana',
                price: '$25',
                discountedPrice: '',
                image: '/src/assets/img/h3-product-img-5a-150x150.png',
                sold: false
            },
            {
                name: 'Campagnola',
                price: '$50 - $95',
                discountedPrice: '',
                image: '/src/assets/img/h3-product-img-6a-100x100.png',
                sold: false
            },
        ]
    },
    userBooking: {
        guestsNumber: '',
        bookedDate: '',
        bookedTime: ''
    },
    footerData: {
        footerImage: '/src/assets/img/footer-img-1.jpg',
        sealOfQuality: '/src/assets/img/footer-bottom-img.png',
        slogan: 'The Don Peppe crew first and foremost values an authentic, well baked slice of pizza.',
        restaurants: {
            title: 'Find our restaurants',
            info: [
                {
                    street: '1614 E. Bell Rd #104.',
                    city: 'Salerno, AZ 85022',
                    phone: '(602) 867-1010'
                },
                {
                    street: '200 E. Oiazzetta Tommaso',
                    city: 'Sorrento, AZ 85022',
                    phone: '(358) 867-1010'
                },
                {
                    street: 'Vale Puglia 54',
                    city: 'Torre Del Greco, AZ 85022',
                    phone: '(359) 867-1010'
                },
                {
                    street: 'Corso Itali AA',
                    city: 'Naples, AZ 85022',
                    phone: '(989) 867-1010'
                },
            ]
        },
        workingHours: {
            title: 'Working hours',
            info: [
                {
                    day: 'Monday',
                    hours: 'Kitchen Closed',
                    closed: true
                },
                {
                    day: 'Tuesday untill Friday',
                    hours: '9:00 - 22:00',
                    closed: false
                },
                {
                    day: 'Saturday',
                    hours: '11am to midnight',
                    closed: false
                },
                {
                    day: 'Sunday',
                    hours: '9:00 - 22:00',
                    closed: false
                },
            ]
        }
    },
    icons: {
        swirl: '/src/assets/svg/svg-7.svg',
        cart: '/scr/assets/svg/svg-9.svg'
    }
})