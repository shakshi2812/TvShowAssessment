<template>
  <v-container grid-list-xl style="background-color:lightGray">
    <v-layout row align="center" justify="center">
      <v-flex md6>
        <v-row justify="center">
          <h1 v-if="tvShowInfo.name">{{tvShowInfo.name}}</h1>
        </v-row>
        <v-img
          :src="tvShowInfo.image.original"
          max-height="450"
          :contain="true"
        ></v-img>
      </v-flex>
      <v-flex md6>
        <v-card
          style="background-color:lightGray;margin-top:50px;margin-bottom:10px;padding:20px;"
        >
          <v-card-title class="black--text">
            <b>Show Info</b>
          </v-card-title>
          <v-card-text>
            <v-row>
              <span class="black--text" v-html="tvShowInfo.summary"></span>
            </v-row>
            <v-row>
              <span class="black--text">
                      <b>Rating</b>
                      : {{tvShowInfo.rating.average}}
                    </span>
            </v-row>
            <v-row>
              <div class="black--text">
                <b>Genre</b> :
                <span id = "span-genre"
                  class="black--text"
                  v-for="tvShowGenre in tvShowInfo.genres"
                  :key="tvShowGenre"
                >
                  <v-icon left>mdi-tag</v-icon>
                  {{tvShowGenre}}
                </span>
              </div>
            </v-row>
            <v-row>
              <span class="black--text">
                <b>Language</b>
                : {{tvShowInfo.language}}
              </span>
            </v-row>
            <v-row>
              <div class="black--text">
                <b>Schedule</b> :
                <span
                  class="black--text"
                  v-for="tvShowSchedule in tvShowInfo.schedule.days"
                  :key="tvShowSchedule"
                >
                  {{tvShowSchedule}}
                  <span> at {{tvShowInfo.schedule.time}}</span>
                </span>
              </div>
            </v-row>
            <v-row>
              <span class="black--text">
                <b>Status</b>
                : {{tvShowInfo.status}}
              </span>
            </v-row>
            <v-row>
              <span class="black--text">
                <b>Premiered on</b>
                : {{tvShowInfo.premiered}}
              </span>
            </v-row>
            <v-row>
              <span class="black--text">
                <b>Official Site</b> :
                <a :href="tvShowInfo.officialSite">{{tvShowInfo.officialSite}}</a>
              </span>
            </v-row>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { getShowInfo } from "@/services/show.service.js";
export default {
  name: "ShowDetails",
  data() {
    return {
      tvShowId: this.$route.params.id,
      tvShowInfo: []
    };
  },
  methods: {
    async getTvShowInfo() {
       getShowInfo(this.tvShowId)
        .then(response => {
          this.tvShowInfo = response.data;  
        })
        .catch();
    },
  },
  created() {
    this.getTvShowInfo();
  }
};
</script>