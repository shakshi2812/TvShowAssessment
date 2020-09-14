  <template>
  <v-container grid-list-xl>
    <v-layout row>
      <v-col md6>
        <input type="text" placeholder="Search Shows" v-model="searchedTvShow" />
        <v-btn height="25" id="search-btn" color="red" class="black--text" @click="getSearchedTvShow">
          <v-icon>mdi-magnify</v-icon>Search
        </v-btn>
      </v-col>
    </v-layout>
    <v-layout row align="center">
      <v-col  md4 v-for="(tvShow,index) in tvShowSearchList" :key="index">
        <v-card
            max-width="250px" 
          color="white"
          class="black--text"
        >
          <v-img
            :src="tvShow.show.image.medium"
            max-height="400"
            :contain="true"
            v-if="tvShow.show.image"
          ></v-img>
          <v-card-title >{{tvShow.show.name}}</v-card-title>
          <v-card-text>
            <span class="black--text">
              <b>Rating</b>
              : {{tvShow.show.rating.average}}
            </span>
          </v-card-text>
          <v-card-actions class="justify-center">
            <v-btn
              color="red"
              class="black--text"
              :href="`detail/${tvShow.show.id}`"
            >Details</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-layout>
  </v-container>
</template>

<script>
import { getShowsByName } from "@/services/show.service.js";
export default {
  name: "SearchShow",
  data() {
    return {
      searchedTvShow: "",
      tvShowSearchList: []
    };
  },
  methods: {
    getSearchedTvShow() {
      getShowsByName(this.searchedTvShow)
        .then(response => {
          this.tvShowSearchList = response.data;
        })
        .catch();
    }
  }
};
</script>