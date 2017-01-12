import { mapGetters } from 'vuex'

import comp from '../comp';
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
  methods : {
  },
  components: {
    comp,
    HeaderTemplate,
    PicTextSectionTemplate,
    IconListTemplate,
    PicListTemplate
  }
}