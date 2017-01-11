import mainNav from '../main-nav';
import editor from '../editor';
import compList from '../comp-list';

export default  {
  data: () => {
    return {
      items: [],
    }
  },
  methods : {
  },
  components: {
    mainNav,
    editor,
    compList
  }
}