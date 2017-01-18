import Vue from 'vue';
import mainNav from '../main-nav';

export default {
  data: () => {
    return {
      sites: []
    }
  },
  methods: {
    
  },
  components: {
    mainNav
  },
  created() {
    toastr.options.timeOut = 1200;
    toastr.info('Welcome ' + this.$store.state.user.username);
    const sitesIds = JSON.stringify(this.$store.state.user.siteIDs);
    Vue.http.post(`http://localhost:3003/data/sites/list`, sitesIds)
            .then(res => res.json())
            .then(json => this.sites = json);
  },
  computed: {

  }
}