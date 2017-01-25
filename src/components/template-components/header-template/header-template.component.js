import { mapGetters } from 'vuex'
import mediumEditor from 'medium-editor';
import toolboxEditor from '../../toolbox-editor';

export default  {
  props: ['propsData', 'compIndex'],
  data: () => {
    return {
      text: '',
      showToolbox: false
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
    },
    // applyTextEdit(currText) {
    //   this.text = currText
    // }
   
  },
  components: {
    // 'medium-editor': mediumEditor,
    toolboxEditor
  },
  computed: {
    ...mapGetters([
      'getIsEditable'
    ])
  },
}