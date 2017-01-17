import { mapGetters } from 'vuex'
import compList from '../comp-list';
import editSiteNavbar from '../edit-site-navbar';
import newSiteNavbar from '../new-site-navbar';

export default  {
  data: () => {
    return {
    }
  },
  methods : {
    makeEditable() {
      this.$store.dispatch('makeEditable')
    }
  },
  components: {
    compList,
    editSiteNavbar,
    newSiteNavbar
  },
  created() {
    this.makeEditable();
  }
}