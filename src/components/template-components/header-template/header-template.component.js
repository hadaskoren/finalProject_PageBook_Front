import { mapGetters } from 'vuex'
export default  {
  props: ['propsData', 'compIndex'],
  data: () => {
    return {
      // h1_text_1: 'Hi, I\'m ',
      // h1_text_2_strong: 'Photon',
      // h1_text_3: ', another fine',
      // h1_a_href: 'http://html5up.net',
      // h1_a_text: 'HTML5 UP',
      // p_text_1: 'Accumsan feugiat mi commodo erat lorem ipsum, sed magna',
      // p_text_2: 'lobortis feugiat sapien sed etiam volutpat accumsan.',
      // li_a_text: 'Discover'
    }
  },
  methods : {
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
  },
  components: {
  },
  computed: {
    ...mapGetters([
      'getIsEditable'
    ])
  }
  
}