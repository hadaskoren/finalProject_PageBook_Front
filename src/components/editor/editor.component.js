import compList from '../comp-list';

export default  {
  data: () => {
    return {
    }
  },
  methods : {
    saveSite() {
      this.$store
        .dispatch('saveCurrSite');
    }
  },
  components: {
    compList
  }
}