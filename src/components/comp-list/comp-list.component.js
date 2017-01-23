import { mapGetters, mapMutations } from 'vuex'
import HeaderTemplate from '../template-components/header-template';
import PicTextTemplate from '../template-components/pic-text-template';
import IconListTemplate from '../template-components/icon-list-template';
import PicListTemplate from '../template-components/pic-list-template';
import CompModal from '../comp-modal';
import { Interfaces } from '../../interfaces/interfaces';
// import * as _ from './dragdrop';


export default {
  data: () => {
    return {
      addCompFirstBtn: false,
      selectedComp: {
        selected: 'choose comp',
        comp: 'test',
        idx: 0
      },
      showModal: false,
      options: [],
      currDraggedIndex: null,
      currDraggedOverIndex: null,
      isDragged: false
      // nums: [1,2,3,4],
      // comps: []
    }
  },
  computed: {
    ...mapGetters([
      'getComps',
    ])
  },
  methods: {
    drag(event, index) {
      this.currDraggedIndex = index;
      this.isDragged = true;
      // console.dir(event.dataTransfer.setDragImage())
      
    },
    dragstart(event, index) {
      console.log('dragstart');
      var img = document.createElement("img");
      img.src = "http://www.icon100.com/up/4228/128/50-move.png";
      event.dataTransfer.setDragImage(img, 0, 0);
      console.log(event);
      return false;
    },
    dragover(event, index) {
      // if(index !== this.currDraggedIndex) console.log(index);
    },
    dragend(event, index) {
      this.currDraggedIndex = null;
      this.isDragged = false;
      this.currDraggedOverIndex = null;
    },
    drop(event, index) {
      if (this.currDraggedIndex === index) return;

      // console.log('elements to swap', this.currDraggedIndex , ' and ', index)
      this.$store.commit('swapComps', { first: this.currDraggedIndex, second: index });
    },
    dragenter(event, index) {
      this.currDraggedOverIndex = index;
    },


    // allowDrop(ev) {
    //   ev.preventDefault();
    // },

    // drag(ev) {
    //   ev.dataTransfer.setData("text", ev.target.id);
    // },

    // drop(ev) {
    //   ev.preventDefault();
    //   var data = ev.dataTransfer.getData("text");
    //   ev.target.appendChild(document.getElementById(data));
    // },
    // drop: function (e) {
    //   console.log('Looks like you dropped something!');
    // },
    // onDrop: function (ev) {
    //   console.log(ev.target);
    // },
    addorDeleteComp(type, selectedComp, compIdx) {
      this.selectedComp.idx = compIdx;
      if (type === 'addComp') {
        this.$store.dispatch('addComp', selectedComp);
        if (this.addCompFirstBtn) {
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
      for (let key in Interfaces) {
        const obj = {
          text: key,
          value: Interfaces[key]
        }
        this.options.push(obj);
      }
    }
  },
  components: {
    HeaderTemplate,
    PicTextTemplate,
    IconListTemplate,
    PicListTemplate,
    CompModal,
  },
  created() {
    this.updateCompsOptions();
    // console.log(JSON.stringify(this.getComps))

  }
  //  mounted () {
  //   this.$dragging.$on('dragged', ({ value }) => {
  //     console.log(value.item)
  //     console.log(value.list)
  //     console.log(value.otherData)
  //   })
  // }
}