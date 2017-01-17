

export default {
    data: () => {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        signup() {
            // console.log('username:', this.username);
            // console.log('password:', this.password);
            this.$store
                .dispatch('saveNewUser', {
                    username: this.username,
                    password: this.password
                });
        }
    },
    components: {
    }
}