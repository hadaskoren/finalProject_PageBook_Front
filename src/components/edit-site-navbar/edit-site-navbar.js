import { mapGetters,mapMutations } from 'vuex'

export default  {
  computed: {
    ...mapGetters([
      'getComps',
      'getCurrSiteId'
    ])
  },
  methods: {
    saveSite() {
      this.$store.dispatch('saveCurrSite');
    }
  },
  
}