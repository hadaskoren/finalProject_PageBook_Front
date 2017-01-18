import mainNav from '../main-nav';
import editor from '../editor';
import pagePreview from '../page-preview';

export default  {
  data: () => {
    return {
    }
  },
  methods : {
  },
  components: {
    mainNav,
    editor,
    pagePreview
  },
  created() {
    this.$store.dispatch('checkIfLoggedWithToken');
  }
}