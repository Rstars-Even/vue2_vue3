
export default {
    data () {
        return {
            name: 'mixin',
        }
    },
    mounted() {
        console.log('minixMounted');
    },
    methods: {
        speak() {
            console.log('this is minix');
        },
    }
}