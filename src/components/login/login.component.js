import { mapGetters, mapMutations, mapAction } from 'vuex'
import * as _ from '../../modules/user/user.module';


export default {
  data: () => {
    return {
      username: '',
      password: ''

    }
  },
  methods: {
    login() {
      this.$store
        .dispatch('getUser', {
          username: this.username,
          password: this.password
        });
    }
  },
  components: {
  }
}