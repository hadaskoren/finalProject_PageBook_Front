// import previewCompList from '../preview-comp-list';
// import newSiteNavbar from '../new-site-navbar';
import { mapGetters} from 'vuex'

export default  {
  data: () => {
    return {
    }
  },
  methods : {
    logout() {
        this.$store.dispatch('logout');
    }
  },
  computed: {
      isLoggedIn() {
          return this.$store.state.user.isLoggedIn;
      },
      ...mapGetters([
         'getCurrUserID',
         'isLoggedIn'
      ]),
  },
  components: {
    // previewCompList,
    // newSiteNavbar
  }
}