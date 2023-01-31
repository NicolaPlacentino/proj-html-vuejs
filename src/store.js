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
    ]
})