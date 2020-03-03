<template>
  <v-card outlined>
    <v-card-title dense>Panel</v-card-title>

    <v-card-text>
      <v-row>
        <v-col>
          <v-text-field label="Description" v-model="description"></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-text-field
            v-model="thickness"
            :rules="[rules.numbers]"
            label="Panel thickness" 
            suffix="in"
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            v-model="frameSpacing"
            :rules="[rules.numbers]"
            label="Support Frame spacing" 
            suffix="in"
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field 
            v-model="stiffSpacing"
            :rules="[rules.numbers]"
            label="Stiffener spacing" 
            suffix="in"
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            v-model="fuselageRadii" 
            :rules="[rules.numbers]"
            label="Fuselage Radius" 
            suffix="in"
          ></v-text-field>
        </v-col>
      </v-row>
          
      <v-row>
        <v-col>
          <v-text-field 
            v-model="limStress"
            :rules="[rules.numbers]"
            label="Far Field Stress" 
            suffix="ksi"
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            v-model="modulus"
            :rules="[rules.numbers]"
            label="Young's Modulus" 
            suffix="msi"
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field 
            v-model="poisson"
            :rules="[rules.numbers]"
            label="Poisson's Ratio"
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field 
            v-model="panelKc"
            :rules="[rules.numbers]"
            label="Panel fracture Toughness"
            suffix="ksi√in"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-text-field
            v-model="nOfFasteners"
            label="Number of fasteners per stiffener"
            type="number"
          ></v-text-field>
        </v-col>
        <v-col>
          <v-select
            :items="stiffBendingItems"
            v-model="stiffBending"
            label="Stiffner bending effect"
          ></v-select>
        </v-col>
        <v-col>
          <v-select
            :items="panelBulgingItems"
            v-model="panelBulging"
            label="Panel bulging effect"
          ></v-select>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
  import mapStatesTwoWay from '../store/mapTwoWay'
  
  export default {
    computed:{
      ...mapStatesTwoWay({
        description: state => state.description,
        thickness: state => state.thickness,
        limStress: state => state.limStress,
        frameSpacing: state => state.frameSpacing,
        stiffSpacing: state => state.stiffSpacing,
        fuselageRadii: state => state.fuselageRadii,
        modulus: state => state.modulus,
        poisson: state => state.poisson,
        nOfFasteners: state => state.nOfFasteners,
        panelKc: state => state.panelKc,
        stiffenerFty: state => state.stiffenerFty,
        fastenerAllow: state => state.fastenerAllow,
        stiffBending: state => state.stiffBending,
        panelBulging: state => state.panelBulging,
      }, function (value) {
        this.$store.commit('updateCurrent', value)
      })
    },

    data: () => ({
      stiffBendingItems: ['None', 'Crack at support', 'Crack mid-bay between supports'],
      panelBulgingItems: ['None', 'GII-GV crack over broken frame', 'GII-GV mid-bay skin crack', "GVI (66'') crack over broken frame", "GVI (66'') mid-bay skin crack", "GVI (54'') crack over broken frame", "GVI (54'') mid-bay skin crack"],
      rules: {
        numbers: v => !!(v>=0) || 'Please enter positive number',
      }
    })
  }
</script>