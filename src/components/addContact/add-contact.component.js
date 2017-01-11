import authService from '../../services/auth.service';
import {ADD_CONTACT} from '../../modules/contact/contact.module';

export default  {
    methods:{
        addContact( contact ) {
            authService.addContact(contact).then(res => {
            this.$store.commit(ADD_CONTACT, res);
        }).catch(err => {
            err.json().then(res => this.error = res.error);
        })

        }
    },
    data() {
        return {
            contact: {
            name: "",
            email: "",
            tel: "",
            msg:""

        }
      }
    }
}