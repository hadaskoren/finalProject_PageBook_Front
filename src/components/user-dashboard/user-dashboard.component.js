import Vue from 'vue';


export default {
  data: () => {
    return {
      sites: []
    }
  },
  methods: {
    // displaySitesList(sites) {
    //   console.log(sites);
    // }

    editSite(siteId) {
      this.$store.dispatch('getSite', siteId);
    }
   
  },
  components: {
  },
  created() {
    // toastr.options.closeButton = false;
    toastr.options.timeOut = 1200;
    toastr.info('Welcome ' + this.$store.state.user.username);
    const sitesIds = JSON.stringify(this.$store.state.user.siteIDs);
    // console.log(sitesIds);
    Vue.http.post(`http://localhost:3003/data/sites/list`, sitesIds)
            .then(res => res.json())
            .then(json => this.sites = json);
  }
}