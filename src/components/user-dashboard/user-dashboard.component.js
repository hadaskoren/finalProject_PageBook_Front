import Vue from 'vue';
import mainNav from '../main-nav';
import { mapGetters } from 'vuex'

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
    
  },
  components: {
    mainNav
  },
  created() {
    console.log('userdashboardcreated');
    //console.log(this.$store.state.user.siteIDs);
    toastr.options.timeOut = 1200;
    //toastr.info('Welcome ' + this.$store.state.user.username);
    const sitesIds = JSON.stringify(this.$store.state.user.siteIDs);
    
    // ~~~~~~ max stupid changes ~~~~~~
    
    // console.log('siteIds', sitesIds)
    // Vue.http.post(`http://localhost:3003/data/sites/list`, sitesIds)
            // .then(res => {console.log('ressss',res.body);this.sites=res.body})
            // .then(json => {console.log('ressss222',res); this.sites = json});
    // ~~~~~~ max stupid changes ~~~~~~
    // console.log('checcheck',sitesIds);
    // Vue.http.post(`http://localhost:3003/data/sites/list`, sitesIds)
    //         .then(res => res.json())
    //         .then(json => this.sites = json);
  },
  watch: {
    getSiteIds: function(){
      console.log('aaaa');
      this.$store.dispatch('getSitesList');
    }
  }
  
}