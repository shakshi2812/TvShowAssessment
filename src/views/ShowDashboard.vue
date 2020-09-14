<template>
          <v-container grid-list-xl>
            <v-layout row>
              <h1>All Shows</h1>
            </v-layout>
            <v-layout row align="center">
              <v-col xs12 sm6 md4 lg3 v-for="(tvShow,index) in tvShowsDashboardList" :key="index">
                <v-card  max-width="250px" color="white" class="black--text">
                  <v-img
                    :src="tvShow.image.medium"
                    max-height="400"
                  ></v-img>
                  <v-card-title >{{tvShow.name}}</v-card-title>
                  <v-card-text>
                    <span class="black--text">
                      <b>Rating</b>
                      : {{tvShow.rating.average}}
                    </span>
                  </v-card-text>
                  <v-card-actions class="justify-center">
                    <v-btn
                      color="red"
                      class="black--text"
                      :href="`detail/${tvShow.id}`"
                    >Details</v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-layout>
          </v-container>
</template>

<script>
import { getAllShows } from "@/services/show.service.js";
export default {
  name: "ShowDashboard",
  data() {
    return {
      tvShowsList: [],
      tvShowsDashboardList: []
    };
  },
  methods: {
    async getAllTvShows() {
      getAllShows()
        .then(response => {
          this.tvShowsList = response.data;
          this.tvShowsList.forEach(show => {
            if (show.rating.average) {
              this.tvShowsDashboardList.push(show);
            }
          });
          this.sortTvShow();

        })
        .catch(error => {
          alert(error);
        });
    },
    sortTvShow() {
          this.tvShowsDashboardList.sort((tvShow1, tvShow2) => {
            return tvShow2.rating.average - tvShow1.rating.average;
          });
    }
  },
  created() {
    this.getAllTvShows();
  }
};
</script>

