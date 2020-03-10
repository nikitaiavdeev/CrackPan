import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const BEAM_MAX_X = 580,
      BEAM_MAX_Y = 30,
      BEAM_MIN_Y = 10;

const defaultState = {
    totalLength: 30,
    maxAreaIner: 1,
    minAreaIner: Math.sqrt(0.5),
    beams: [ {
      length: 10,
      areaA: 1.0,
      areaB: 0.5,
      inerA: 1.0,
      inerB: 1.0,
    }, {
      length: 20,
      areaA: 0.8,
      areaB: 0.7,
      inerA: 1.0,
      inerB: 1.0,
    }],
    appVersion: 'v0.0.1',
    snackbar: {
      message: '',
      color: '',
      timeout: 5000,
      show: false
    }
  };


export default new Vuex.Store({
  state: Object.assign({}, defaultState),
  
  getters: {
    getBeamRect: state => (id) => {
      const len = state.beams[id].length,
            hA = Math.sqrt(state.beams[id].areaA * Math.pow(state.beams[id].inerA, 1/3)),
            hB = Math.sqrt(state.beams[id].areaB * Math.pow(state.beams[id].inerB, 1/3)),
            xScale = BEAM_MAX_X/state.totalLength,
            yScale = Number.isFinite((BEAM_MAX_Y-BEAM_MIN_Y)/(state.minAreaIner-state.maxAreaIner)) ? (BEAM_MAX_Y-BEAM_MIN_Y)/(state.minAreaIner-state.maxAreaIner) : 0.0,
            getH = (h) => {return BEAM_MAX_Y - yScale * (h-state.maxAreaIner)};
      let x0=10;
      for(let i=0; i < id; i++) x0+=state.beams[i].length;
      return 'M' + x0*xScale + ' 0 h'+ len*xScale + 'v' + getH(hB) + 'L' + x0*xScale + ' ' + getH(hA) +'Z'
    }
  },
  
  mutations: {
    resetState(state){
      Object.assign(state, defaultState);
    },
    updateCurrent(state, payload) {
      Object.assign(state, payload);
    },
    showMessage (state, payload) {
      Object.assign(state.snackbar, payload);
    }
  },
});