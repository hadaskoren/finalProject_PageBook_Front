import { mapGetters,mapMutations } from 'vuex'

export default  {
  computed: {
    ...mapGetters([
      'getComps',
      'getSiteName',
      'getIsEditable'
    ]),

  },
  methods: {
    saveCompProp(event) {
      let htmlText = event.srcElement.innerHTML;
      let refName = event.srcElement.getAttribute('tag-refname')
      let compData = {
          compIndex: this.compIndex,
          htmlText,
          refName
      }
      this.$store.dispatch('saveCompProp', compData);
    }
  }
}