<template>
    <v-snackbar v-model="show" :top="top" :color="color" :timeout="timeout">
      {{message}}
      <v-btn text @click="show = false">
        <v-icon>close</v-icon>
      </v-btn>
    </v-snackbar>
</template>

<script>
import mapStatesTwoWay from '../store/mapTwoWay'

export default {
    data: () => ({
        top: true,
        timeout: 16000
    }),

    computed: {
      ...mapStatesTwoWay({
            message: state => state.snackbar.message,
            color: state => state.snackbar.color,
            show: state => state.snackbar.show
        }, function (value) {
            this.$store.commit('updateCurrent', {snackbar: value})
        })
    },
}
</script>