<template>
  <div id='home'>
    <v-container grid-list-xs    v-if="false">
      <h1>Home</h1>
      <p class="red lighten-5 white--text"> color red</p>
      <p class="display-4 text-uppercase">upercase</p>
      <p class="title">title</p>
      <p class="title display-3 text-justify"> Test</p>
      <v-btn color="pink" light-blue mr-5 >text</v-btn>
      <v-btn color="pink" light-blue mr-5 >text</v-btn>
      <v-btn color="pink" light-blue mr-5 >text</v-btn>
      <v-btn color="pink" light-blue  mr-5 >text</v-btn>
      <br>
      <v-icon size="30" color="error" left>close</v-icon>
    </v-container>
    <v-container grid-list-xs>
      <v-btn color="success" class="hidden-md-and-up">text</v-btn>
    </v-container>

    <v-container fluid>
        <v-row>
            <v-col cols="6" md="12">
              <v-btn color="success" block>text</v-btn>
            </v-col>
            <v-col cols="6" md="12">
              <v-btn color="success" outlined block>text</v-btn>
            </v-col>
        </v-row>
        <v-row no-gutters class="justify-center align-content-center" style="height : 200px;background-color:pink">
            <v-col cols="2">
              <v-btn color="success" outlined block>text</v-btn>
            </v-col>
            <v-col cols="2">
              <v-btn color="success" outlined block>text</v-btn>
            </v-col>
        </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name:'Home'
}
</script>

<style>

</style>