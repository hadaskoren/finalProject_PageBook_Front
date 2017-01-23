import { mapGetters } from 'vuex'

export default {
  props: ['propsData', 'compIndex'],
  data: () => {
    return {
      uploadedImg1: '',
      uploadedImg2: '',
      uploadedImg3: ''

      // imageLink: 'propsData.card_1_img_src'
    }
  },
  methods: {
    onFileChange(e) {
      console.log('onFileChange')
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
        this.uploadedImg1 = e.target.result;
        this.sendToServer(this.uploadedImg1);
      };
      reader.readAsDataURL(file);

      
    },
    sendToServer(img) {
      // console.log('sendToServer Image', img)
      this.$http.post('upload', img)
        .then(res => res.json())
        .then(json => console.log(json))
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