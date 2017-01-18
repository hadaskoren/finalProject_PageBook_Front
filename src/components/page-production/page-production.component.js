import newSiteNavbar from '../new-site-navbar';
import previewCompList from '../preview-comp-list';

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
    newSiteNavbar,
    previewCompList
  },
  created() {
    this.editableFalse();
  }
}