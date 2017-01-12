import { mapGetters,mapMutations } from 'vuex'
import {ADD_COMP} from '../../modules/currSite/currSite.module';


import HeaderTemplate from '../template-components/header-template';
import PicTextSectionTemplate from '../template-components/pic-text-section-template';
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
    ...mapMutations({
      addComp: ADD_COMP
    })
  },
  components: {
    HeaderTemplate,
    PicTextSectionTemplate,
    IconListTemplate,
    PicListTemplate
  }
}