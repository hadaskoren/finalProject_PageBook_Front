import mainNav from '../main-nav';
import { Interfaces } from '../../interfaces/interfaces';


export default {
    data: () => {
        return {
            siteName: '',
            siteUrl: ''
        }
    },
    methods: {
        newSite() {
            let site= {
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
            this.$store
                .dispatch('newSite', site);
        }
    },
    components: {
        mainNav
    }
}