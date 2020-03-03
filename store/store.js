import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export const fastenersDB = [
  {fastenerType: 'Manual'},
  {fastenerType: '5/32 Ti 6AL 4V Hi-Lok Interference Bolts', fastenerDia: 5/32, fastenerLinear: 0.0024545, fastenerNonLinear: 0.0384602, fastenerBiSlope: 836},
  {fastenerType: '3/16 Ti 6AL 4V Hi-Lok Interference Bolts', fastenerDia: 3/16, fastenerLinear: 0.0022900, fastenerNonLinear: 0.0359500, fastenerBiSlope: 1827},
  {fastenerType: '1/4 Ti 6AL 4V Hi-Lok Interference Bolts', fastenerDia: 1/4, fastenerLinear: 0.0019000, fastenerNonLinear: 0.0300000, fastenerBiSlope: 4174},
  {fastenerType: '5/16 Ti 6AL 4V Hi-Lok Interference Bolts', fastenerDia: 5/16, fastenerLinear: 0.0015100, fastenerNonLinear: 0.0240500, fastenerBiSlope: 6521},
  {fastenerType: '5/32 Al Drivematic Rivets', fastenerDia: 5/32, fastenerLinear: 0.0021250, fastenerNonLinear: 0.0173900, fastenerBiSlope: 482},
  {fastenerType: '3/16 Al Drivematic Rivets', fastenerDia: 3/16, fastenerLinear: 0.0017760, fastenerNonLinear: 0.1165900, fastenerBiSlope: 846},
  {fastenerType: '1/4 Al Drivematic Rivets', fastenerDia: 1/4, fastenerLinear: 0.0013300, fastenerNonLinear: 0.1566700, fastenerBiSlope: 1522},
  {fastenerType: '5/16 Al Drivematic Rivets', fastenerDia: 5/16, fastenerLinear: 0.0007890, fastenerNonLinear: 0.2662800, fastenerBiSlope: 2520},
  {fastenerType: '3/8 Al Drivematic Rivets', fastenerDia: 3/8, fastenerLinear: 0.0008970, fastenerNonLinear: 0.0861680, fastenerBiSlope: 3414},
  {fastenerType: '1/8 AD4 100deg csk Shear Head Rivets (2117-T4) (t=0.050)', fastenerDia: 1/8, fastenerLinear: 0.0125767, fastenerNonLinear: 0.1767667, fastenerBiSlope: 334},
  {fastenerType: '1/8 AD4 100deg csk Shear Head Rivets (2117-T4) (t=0.048)', fastenerDia: 1/8, fastenerLinear: 0.0133100, fastenerNonLinear: 0.1722000, fastenerBiSlope: 317},
  {fastenerType: '1/8 AD4 100deg csk Shear Head Rivets (2117-T4) (t=0.040)', fastenerDia: 1/8, fastenerLinear: 0.0162433, fastenerNonLinear: 0.1539333, fastenerBiSlope: 253},
  {fastenerType: '1/8 AD4 100deg csk Shear Head Rivets (2117-T4) (t=0.036)', fastenerDia: 1/8, fastenerLinear: 0.0177100, fastenerNonLinear: 0.1448000, fastenerBiSlope: 220},
  {fastenerType: '1/8 AD4 100deg csk Shear Head Rivets (2117-T4) (t=0.032)', fastenerDia: 1/8, fastenerLinear: 0.0180400, fastenerNonLinear: 0.1860000, fastenerBiSlope: 221},
  {fastenerType: '5/32 AD4 100deg csk Shear Head Rivets (2117-T4) (t=0.080)', fastenerDia: 5/32, fastenerLinear: 0.0080067, fastenerNonLinear: 0.0585333, fastenerBiSlope: 493},
  {fastenerType: '5/32 AD4 100deg csk Shear Head Rivets (2117-T4) (t=0.048)', fastenerDia: 5/32, fastenerLinear: 0.0124600, fastenerNonLinear: 0.1722000, fastenerBiSlope: 422},
  {fastenerType: '5/32 AD4 100deg csk Shear Head Rivets (2117-T4) (t=0.040)', fastenerDia: 5/32, fastenerLinear: 0.0135733, fastenerNonLinear: 0.2469333, fastenerBiSlope: 374},
  {fastenerType: '5/32 AD4 100deg csk Shear Head Rivets (2117-T4) (t=0.036)', fastenerDia: 5/32, fastenerLinear: 0.0141300, fastenerNonLinear: 0.2843000, fastenerBiSlope: 351},
  {fastenerType: '5/32 AD4 100deg csk Shear Head Rivets (2117-T4) (t=0.032)', fastenerDia: 5/32, fastenerLinear: 0.0168400, fastenerNonLinear: 0.3188000, fastenerBiSlope: 278},
]

const defaultStiffener = {
    dist2Crack: 0,
    isBroken: 'No',
    area: 0.0,
    modulus: 10.3,
    oml: 0.0,
    iml: 0.0,
    inertia: 0.0,
    fastenerType: 'Manual',
    fastenerDia: 0.0,
    fastenerPitch: 0.0,
    fastenerLinear: 0.0,
    fastenerNonLinear: 0.0,
    fastenerBiSlope: 0.0
  };

const defaultState = {
    description: 'CrackPan panel',
    limStress: 0.0,
    thickness: 0.0,
    frameSpacing: 0.0,
    stiffSpacing: 0.0,
    fuselageRadii: 0.0,
    modulus: 10.5,
    poisson: 0.33,
    nOfFasteners: 15,
    panelKc: 0.0,
    stiffenerFty: 0.0,
    fastenerAllow: 0.0,
    stiffBending: 'None',
    panelBulging: 'None',
    stiffeners: [ Object.assign({}, defaultStiffener) ],
    allFastSwitch: false,
    allFastener: Object.assign({}, defaultStiffener),
    nCrackOut: 15,
    crackOut: new Array(15).fill(0),
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
    getStiffener: (state) => (id) => {
      return Object.assign({}, state.stiffeners[id] || defaultStiffener);
    },
  },
  
  mutations: {
    resetState(state){
      Object.assign(state, defaultState);
      state.stiffeners = [ Object.assign({}, defaultStiffener) ];
    },
    updateCurrent(state, payload) {
      Object.assign(state, payload);
    },
    setFastener(state, {item, t}){
      Object.assign(item, fastenersDB.find(x => x.fastenerType === t));
      
      if(item.fastenerType !== 'Manual'){
        item.fastenerPitch = 6 * item.fastenerDia;
      }
    },
    showMessage (state, payload) {
      Object.assign(state.snackbar, payload);
    }
  },
});