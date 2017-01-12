const headerTemlateCompInterface = {
    name: '',
    type: 'header-template',
    props: {
        h1_text_1: 'Hi, I\'m ',
        h1_text_2_strong: 'Photon',
        h1_text_3: ', another fine',
        h1_a_href: 'http://html5up.net',
        h1_a_text: 'HTML5 UP',
        p_text_1: 'Accumsan feugiat mi commodo erat lorem ipsum, sed magna',
        p_text_2: 'lobortis feugiat sapien sed etiam volutpat accumsan.',
        li_a_text: 'Discover'
    }
}

const picTextSectionTemplateCompInterface = {
    name: '',
    type: 'pic-text-section-template',
    props: {
        h2_text_1: 'Lorem ipsum dolor adipiscing',
        h2_text_2: 'amet dolor consequat',
        p_text: 'Adipiscing a commodo ante nunc accumsan et interdum mi ante adipiscing. A nunc lobortis non nisl amet vis sed volutpat aclacus nascetur ac non. Lorem curae et ante amet sapien sed tempus adipiscing id accumsan.',
        img_src: 'static/pic01.jpg'
    }
}


const iconListTemplateCompInterface = {
    name: '',
    type: 'icon-list-template',
    props: {
        h2_text_1: 'Lorem ipsum dolor adipiscing',
        h2_text_2: 'amet dolor consequat',
        p_1_text: 'Adipiscing a commodo ante nunc accumsan interdum mi ante adipiscing. A nunc lobortis non nisl amet vis volutpat aclacus nascetur ac non. Lorem curae eu ante amet sapien in tempus ac. Adipiscing id accumsan adipiscing ipsum.',
        p_2_text: 'Blandit faucibus proin. Ac aliquam integer adipiscing enim non praesent vis commodo nunc phasellus cubilia ac risus accumsan. Accumsan blandit. Lobortis phasellus non lobortis dit varius mi varius accumsan lobortis. Blandit ante aliquam lacinia lorem lobortis semper morbi col faucibus vitae integer placerat accumsan orci eu mi odio tempus adipiscing adipiscing adipiscing curae consequat feugiat etiam dolore.',
        p_3_text: 'Adipiscing a commodo ante nunc accumsan interdum mi ante adipiscing. A nunc lobortis non nisl amet vis volutpat aclacus nascetur ac non. Lorem curae eu ante amet sapien in tempus ac. Adipiscing id accumsan adipiscing ipsum.'
    }
}

const picListTemplateCompInterface = {
    name: '',
    type: 'pic-list-template',
    props: {
        h2_text: 'Adipiscing amet consequat',
        p_text: 'Ante nunc accumsan et aclacus nascetur ac ante amet sapien sed.',
        card_1_h3_text: 'Magna feugiat lorem',
        card_1_p_text: 'Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.',
        card_1_img_src: 'static/pic02.jpg',
        card_2_h3_text: 'Magna feugiat lorem',
        card_2_p_text: 'Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.',
        card_2_img_src: 'static/pic03.jpg',
        card_3_h3_text: 'Magna feugiat lorem',
        card_3_p_text: 'Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.',
        card_3_img_src: 'static/pic04.jpg'
    }
}





const state = {
    id: '',
    siteName: '',
    url: '',
    isPublished: false,
    comps: [
        JSON.parse(JSON.stringify(headerTemlateCompInterface)),
        JSON.parse(JSON.stringify(picTextSectionTemplateCompInterface)),
        JSON.parse(JSON.stringify(iconListTemplateCompInterface)),
        JSON.parse(JSON.stringify(picListTemplateCompInterface))
        
    ]
};

const mutations = {

}

const actions = {};

const getters = {
    getComps: (state) => { return state.comps }
};

export default {
    state,
    getters,
    actions,
    mutations
}