import { mapGetters } from 'vuex'
import compList from '../comp-list';
import editSiteNavbar from '../edit-site-navbar';
import newSiteNavbar from '../new-site-navbar';
import mainNav from '../main-nav';

export default  {
  data: () => {
    return {
    }
  },
  methods : {
    makeEditable() {
      this.$store.dispatch('makeEditable')
    },
    editSite(siteId) {
      this.$store.dispatch('getSite', siteId);
    }
  },
  components: {
    compList,
    editSiteNavbar,
    newSiteNavbar,
    mainNav
  },
  created() {
    this.editSite(this.$route.params.id);
    this.makeEditable();
  },
}