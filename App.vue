<template>
  <v-app id="inspire">
    <Snackbar />
    <Header />
    <v-content>
      <v-container>
        <v-row>
          <v-col cols="10" class="pa-3 d-flex flex-column">
            <PanelInput />
          </v-col>

          <v-col cols="2" class="pa-3 d-flex flex-column">
            <CrackInput />
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <StiffenerTable />
          </v-col>
        </v-row>
      </v-container>
    </v-content>

    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
  import Snackbar from './components/Snackbar'
  import Header from './components/Header'
  import PanelInput from './components/PanelInput'
  import CrackInput from './components/CrackInput'
  import StiffenerTable from './components/StiffenerTable'

  export default {
    components: {
      Snackbar,
      Header,
      PanelInput,
      CrackInput,
      StiffenerTable
    }
  }
</script>