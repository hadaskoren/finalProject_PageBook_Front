import previewCompList from '../preview-comp-list';
import newSiteNavbar from '../new-site-navbar';
import mainNav from '../main-nav';

export default  {
  data: () => {
    return {
    }
  },
  methods : {
    editableFalse() {
      this.$store.dispatch('editableFalse');
    }
  },
  components: {
    previewCompList,
    newSiteNavbar,
    mainNav
  },
  created() {
    this.editableFalse();
  }
}