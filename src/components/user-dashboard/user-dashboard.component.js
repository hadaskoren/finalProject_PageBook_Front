import Vue from 'vue';
import mainNav from '../main-nav';
import { mapGetters } from 'vuex';
import newSiteForm from '../new-site-form';
import router from '../../routes';

export default {
  data: () => {
    return {
      sites: []
    }
  },
  computed: {
    ...mapGetters([
      'getSiteIds',
      'getSitesList'
    ])
  },
  methods: {
    deleteSite(site) {
      const isToDelete = confirm('Are you sure?')
      if(isToDelete) this.$store.dispatch('deleteSite', site);
      
    }
    
  },
  components: {
    mainNav,
    newSiteForm
  },
  created() {
    // if (!this.$store.state.user.isLoggedIn) {
    //   router.push(`/home`);
    // }
    const sitesIds = JSON.stringify(this.$store.state.user.siteIDs);
    this.$store.dispatch('getSitesList');
  },
  watch: {
    getSiteIds: function(){
      this.$store.dispatch('getSitesList');
    }
  }
  
}