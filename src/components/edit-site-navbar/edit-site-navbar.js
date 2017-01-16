import { mapGetters,mapMutations } from 'vuex'

export default  {
  computed: {
    ...mapGetters([
      'getComps',
    ])
  },
  methods: {
    saveSite() {
      this.$store
        .dispatch('saveCurrSite');
    },
    previewsite() {

    }
  }
}