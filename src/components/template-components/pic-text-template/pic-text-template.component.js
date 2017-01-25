import { mapGetters } from 'vuex'

export default  {
  props: ['propsData', 'compIndex'],
  data: () => {
    return {
      uploadedImg: ''
  }
  },
  methods : {
      onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      console.log(files);
      if (!files.length)
        return;
      this.createImage(files[0]);
    },
    createImage(file) {
      //var image = new Image();
      var reader = new FileReader();

      reader.onload = (e) => {
          this.uploadedImg = e.target.result;
          // this.sendToServer(this.uploadedImg1);
       
      };
      reader.readAsDataURL(file);

      
    },
    saveCompProp(event) {
      let htmlText = event.srcElement.innerHTML;
      let refName = event.srcElement.getAttribute('tag-refname')
      let compData = {
          compIndex: this.compIndex,
          htmlText,
          refName
      }
      this.$store.dispatch('saveCompProp', compData);
    }
  },
  components: {
  },
  computed: {
    ...mapGetters([
      'getIsEditable'
    ])
  }
}