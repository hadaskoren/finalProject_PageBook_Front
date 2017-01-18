import { mapGetters } from 'vuex'

export default  {
  props: ['propsData', 'compIndex'],
  data: () => {
    return {
      // h2_text_1: 'Lorem ipsum dolor adipiscing',
      // h2_text_2: 'amet dolor consequat',
      // p_text: 'Adipiscing a commodo ante nunc accumsan et interdum mi ante adipiscing. A nunc lobortis non nisl amet vis sed volutpat aclacus nascetur ac non. Lorem curae et ante amet sapien sed tempus adipiscing id accumsan.',
      // img_src: 'static/pic01.jpg'
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