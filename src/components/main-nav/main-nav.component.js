// import previewCompList from '../preview-comp-list';
// import newSiteNavbar from '../new-site-navbar';

export default  {
  data: () => {
    return {
    }
  },
  methods : {
    logout() {
        this.$store.dispatch('logout');
        // router.push(`/home`);
    }
  },
  computed: {
      isLoggedIn() {
          return this.$store.state.user.isLoggedIn;
      }
  },
  components: {
    // previewCompList,
    // newSiteNavbar
  }
}