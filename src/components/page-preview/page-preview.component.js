import previewCompList from '../preview-comp-list';
import newSiteNavbar from '../new-site-navbar';
import mainNav from '../main-nav';
import { mapGetters } from 'vuex'

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
    console.log('getComps',this.getComps)
    this.editableFalse();
  },
  computed: {
    ...mapGetters([
        'getComps'
      ])
  }
}