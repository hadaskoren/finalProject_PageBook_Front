import { mapGetters,mapMutations } from 'vuex'
import HeaderTemplate from '../template-components/header-template';
import PicTextTemplate from '../template-components/pic-text-template';
import IconListTemplate from '../template-components/icon-list-template';
import PicListTemplate from '../template-components/pic-list-template';
import CompModal from '../comp-modal';
import {Interfaces} from '../../interfaces/interfaces';


export default  {
  data: () => {
    return {
      addCompFirstBtn: false,
      selectedComp: {
        selected:'choose comp',
        comp: 'test',
        idx: 0
      },
      showModal: false,
      options: []
    }
  },
  computed: {
    ...mapGetters([
      'getComps',
    ])
  },
  methods: {
    addorDeleteComp(type,selectedComp,compIdx) {
      this.selectedComp.idx = compIdx;
      if(type === 'addComp') {
        this.$store.dispatch('addComp', selectedComp);
        if(this.addCompFirstBtn){
          this.addCompFirstBtn = !this.addCompFirstBtn;
        }
      } else {
        this.$store.commit('DELETE_COMP', selectedComp.idx)  
      }
      
    },
    showCompBtns(compIdx) {
      this.$store.dispatch('showCompBtns', compIdx)
    },
    showCompBtnsForFirstBtn() {
      this.addCompFirstBtn = !this.addCompFirstBtn;
    },
    updateCompsOptions() {
      for(let key in Interfaces) {
        const obj = {
          text: key,
          value: Interfaces[key]
        }
        this.options.push(obj);
      }
      // this.getComps.forEach(comp => {
      //   console.log(Interfaces);
      //     this.options.push({
      //       text: comp.type,
      //       value: comp
      //     });
      // });
    }
  },
  components: {
    HeaderTemplate,
    PicTextTemplate,
    IconListTemplate,
    PicListTemplate,
    CompModal
  },
  created() {
    this.updateCompsOptions();
  }
}