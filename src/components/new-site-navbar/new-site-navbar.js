import { mapGetters,mapMutations } from 'vuex'

export default  {
  computed: {
    ...mapGetters([
      'getComps',
    ]),
    
  }
}