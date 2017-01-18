
import mainNav from '../main-nav';

export default {
    data: () => {
        return {
            username: '',
            password: '',
            siteDefaultTemplate: {
                siteName: this.siteName,
                url: this.siteUrl,
                isPublished: false,
                comps: [
                    JSON.parse(JSON.stringify(Interfaces['header-template'])),
                    JSON.parse(JSON.stringify(Interfaces['pic-text-template'])),
                    JSON.parse(JSON.stringify(Interfaces['icon-list-template'])),
                    JSON.parse(JSON.stringify(Interfaces['pic-list-template']))
                 ]
            }
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
            this.$store
                .dispatch('newSite', this.siteDefaultTemplate)
        }
    },
    components: {
        mainNav
    }
}