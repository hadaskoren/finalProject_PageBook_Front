import Login from '../login';
import mainNav from '../main-nav';
import router from '../../routes';


export default  {
  data: () => {
    return {
      showLogin: false
    }
  },
  methods : {
    
  },
  components: {
    Login,
    mainNav
  },
  created() {
    const user = this.$store.state.user;
    if (user.isLoggedIn) {
      router.push(`user-dashboard/${user.id}`);
    }
    console.log(this.$store.state.user.isLoggedIn)
  }
}