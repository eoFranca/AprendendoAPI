<script setup>
import { ref, onMounted } from 'vue'
import api from '@/plugins/axios'
import Loading from 'vue-loading-overlay'
import genreStore from '@/stores/genre'
import { useRouter } from 'vue-router'

const router = useRouter()
const isLoading = ref(false);
const tvs = ref([]);

const formatDate = (date) => new Date(date).toLocaleDateString('pt-BR')

const listTvs = async (genreId) => {
  genreStore.setCurrentGenreId(genreId);
  isLoading.value = true;
  const response = await api.get('discover/tv', {
    params: {
      with_genres: genreId,
      language: 'pt-BR'
    }
  });
  tvs.value = response.data.results
  isLoading.value = false;
};

function openTv(tvId) {
  router.push({ name: 'TvDetails', params: { tvId } });
}

onMounted(async () => {
  isLoading.value = true;
  await genreStore.getAllGenres('tv');
  isLoading.value = false;
})
</script>

<template>
  <h1>Programas de TV</h1>
  <ul class="genre-list">
    <li
      v-for="genre in genreStore.genres"
      :key="genre.id"
      @click="listTvs(genre.id)"
      class="genre-item"
      :class="{ active: genre.id === genreStore.currentGenreId }"
    >
      {{ genre.name }}
    </li>
  </ul>

  <loading v-model:active="isLoading" is-full-page />

  <div class="Tv-list">
    <div v-for="Tv in tvs" :key="Tv.id" class="Tv-card">
      <img
        :src="`https://image.tmdb.org/t/p/w500${Tv.poster_path}`"
        :alt="Tv.name"
        @click="openTv(Tv.id)"
      />
      <div class="movie-details">
        <p class="movie-title">{{ Tv.name }}</p>
        <p class="movie-first-air-date">{{ formatDate(Tv.first_air_date) }}</p>
        <p class="movie-genres">
          <span
            v-for="genre_id in Tv.genre_ids"
            :key="genre_id"
            @click="listTvs(genre_id)"
            :class="{ active: genre_id === genreStore.currentGenreId }"
          >
            {{ genreStore.getGenreName(genre_id) }}
          </span>
        </p>
      </div>
    </div>
  </div>
</template>
<style scoped>
.genre-list {
  font-family: 'Cinzel', sans-serif;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  list-style: none;
  margin-bottom: 2rem;


}

.genre-item {
  margin-top: 20px;
  width: none;
  height: 50px;
  display: flex;
  align-items: center;
  background-color: #0000000e;
  border: 1px solid grey;
  padding: 0.5rem;
  color: grey;
  transition: 0.5s;
}

.genre-item:hover {
  cursor: pointer;
  background-color: #333;
  color: #a03e32;


}

.Tv-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}

.Tv-card {
  font-family: Arial, Helvetica, sans-serif;
  width: 15rem;
  height: 31rem;
  border-radius: 5px;
  overflow: hidden;
  border: 1px solid grey;

}

.Tv-card img {
  width: 100%;
  height: 20rem;
  border-radius: 5px 5px 0 0;
}

.movie-details {
  padding: 0 0.5rem;
}

.movie-title {
  font-size: 1.1rem;
  font-weight: bold;
  line-height: 1.3rem;
  height: 3.2rem;
}

.movie-genres {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  gap: 0.2rem;
}

.movie-genres span {
  background-color: transparent;
  border: 1px solid grey;
  border-radius: 1px;
  padding: 0.2rem 0.5rem;
  color: grey;
  font-size: 0.8rem;
  font-weight: bold;
  
}

.movie-genres span:hover {
  cursor: pointer;
  background-color: #333;
}

.footer {
  position: fixed;
  font-family: 'Cinzel Decorative', sans-serif;
  bottom: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #333;
  color: aliceblue;
  padding: 1rem;
}

.active {
  background-color: #333;
  color: #a03e32;
  font-weight: bolder;
}

.movie-genres span.active {
  background-color: #333;
  font-weight: bolder;
  }
</style>