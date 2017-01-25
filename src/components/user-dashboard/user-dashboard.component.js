import Vue from 'vue';
import mainNav from '../main-nav';
import { mapGetters } from 'vuex';
import router from '../../routes';
import { Interfaces } from '../../interfaces/interfaces';

export default {
  data: () => {
    return {
      sites: [],
      modalIsOpen: false,
      siteName: '',
      siteUrl: ''
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
      
    },
    saveChanges() {
      alert('is true!');
      
    },
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
      this.$store.dispatch('newSite', site);
      this.modalIsOpen = false;
    }
    
  },
  components: {
    mainNav
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