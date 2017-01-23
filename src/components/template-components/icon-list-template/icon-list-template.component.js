import { mapGetters } from 'vuex'

export default  {
  props: ['propsData', 'compIndex'],
  data: () => {
    return {
    }
  },
  methods : {
    saveCompProp(event) {
      let htmlText = event.srcElement.innerHTML;
      let refName = event.srcElement.getAttribute('tag-refname');
      let compData = {
          compIndex: this.compIndex,
          htmlText,
          refName
      }
      this.$store.dispatch('saveCompProp', compData);
    }
  },
  components: {
  },
  computed: {
    ...mapGetters([
      'getIsEditable'
    ])
  }
}