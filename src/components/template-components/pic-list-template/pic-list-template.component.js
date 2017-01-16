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
      console.log('onfilechange');
      var files = e.target.files || e.dataTransfer.files;
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
      console.log('uploadedImg1',this.uploadedImg1);
      reader.readAsDataURL(file);
      console.log('this.uploadedImg1',this.uploadedImg1);

      
    },
    sendToServer(img) {
      console.log('sendToServer');
      this.$http.post('http://localhost:3003/upload', img)
        .then(res => res.json())
        .then(json => console.log(json))
    }
  },
  components: {
  }
}