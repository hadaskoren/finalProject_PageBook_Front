import { mapGetters,mapMutations } from 'vuex'
import HeaderTemplate from '../template-components/header-template';
import PicTextTemplate from '../template-components/pic-text-template';
import IconListTemplate from '../template-components/icon-list-template';
import PicListTemplate from '../template-components/pic-list-template';

export default  {
  data: () => {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'getComps',
    ])
  },
  methods: {
    
  },
  components: {
    HeaderTemplate,
    PicTextTemplate,
    IconListTemplate,
    PicListTemplate
  },
}