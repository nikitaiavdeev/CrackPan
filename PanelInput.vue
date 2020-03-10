<template>
  <v-card outlined>
    <v-card-title dense>Panel</v-card-title>

    <v-card-text>
      <v-row>
        <v-col>
          <svg preserveAspectRatio="xMinYMin meet" viewBox="0 0 600 400" width="100%" height="400px">
            <path v-for="(beam, index) in beams" :key="index" :d="getBeamRect(index)" fill="none" stroke="blue"/>
          </svg>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
  import { mapState, mapGetters  } from 'vuex'

  export default {
    computed:{
      ...mapState(['beams']),
      ...mapGetters(['getBeamRect'])
    },

    data: () => ({

    })
  }
</script>