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
    onFileChange(e,num) {
      console.log('onFileChange')
      console.log('num',num);
      var files = e.target.files || e.dataTransfer.files;
      console.log(files);
      if (!files.length)
        return;
      this.createImage(files[0],num);
    },
    createImage(file,num) {
      //var image = new Image();
      var reader = new FileReader();

      reader.onload = (e) => {
        if(num===1) {
          this.uploadedImg1 = e.target.result;
          // this.sendToServer(this.uploadedImg1);
        } else if(num===2) {
          this.uploadedImg2 = e.target.result;
        } else if(num===3) {
          this.uploadedImg3 = e.target.result;
        }
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