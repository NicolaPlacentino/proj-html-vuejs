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
            text: '"Forget the trendy pizza shops, this hidden spot makes the best New York style pizza slice in Neaples"',
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
    ]
})