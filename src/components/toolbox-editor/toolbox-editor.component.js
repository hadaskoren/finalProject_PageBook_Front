
export default {
    data: () => {
        return {
        }  
    }, 
    methods: {
        increaseFontSize() {
            console.log('toolbox increase');
            this.$store.dispatch('increaseFontSize');
        }   
    }
}

// decreaseFontSize(labelLocation) {
// var labelIndex = +labelLocation;
// gMeme.labels[labelIndex].size -= 5;
// drawCanvas();
// },

// changeFontColor(elColorPicker, labelLocation) {
// var elColor = document.querySelector('#inputColor1');
// var labelIndex = +labelLocation;
// console.log('I work');
// var currval = elColorPicker.value;
// console.log('currval', currval);
// gMeme.labels[labelIndex].color = currval;

// drawCanvas();
// },

// toggleFontShadow(labelLocation) {
// var labelIndex = +labelLocation;
// gMeme.labels[labelIndex].shadow = !gMeme.labels[labelIndex].shadow;
// drawCanvas();
// },

// alignFontRight(labelLocation) {
// var labelIndex = +labelLocation;
// gMeme.labels[labelIndex].txtAlign.direction = 'right';
// gMeme.labels[labelIndex].txtAlign.distance = gElMemeCanvas.width - 45;
// drawCanvas();
// },

// alignFontCenter(labelLocation) {
// var labelIndex = +labelLocation;
// gMeme.labels[labelIndex].txtAlign.direction = 'center';
// gMeme.labels[labelIndex].txtAlign.distance = gElMemeCanvas.width / 2;
// drawCanvas();
// },

// alignFontLeft(labelLocation) {
// var labelIndex = +labelLocation;
// gMeme.labels[labelIndex].txtAlign.direction = 'left';
// gMeme.labels[labelIndex].txtAlign.distance = 45;
// drawCanvas();
// }
// }
// }