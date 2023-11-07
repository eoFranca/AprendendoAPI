<script setup>
import { ref, onMounted } from 'vue'
import api from '@/plugins/axios'

const genres = ref([]);
const movies = ref([]);

onMounted(async () => {
  const response = await api.get('genre/movie/list?language=pt-BR')
  genres.value = response.data.genres
})

const listMovies = async (genreId) => {
    const response = await api.get('discover/movie', {
        params: {
            with_genres: genreId,
            language: 'pt-BR'
        }
    });
    movies.value = response.data.results
};
</script>
<template>
  <div class="container">

    <h1>Filmes</h1>
    <ul class="genre-list">
      <li v-for="genre in genres" :key="genre.id" @click="listMovies(genre.id)" class="genre-item">
        {{ genre.name }}
      </li>
    </ul>
  </div>
    <div class="movie-list">
      <div v-for="movie in movies" :key="movie.id" class="movie-card">
    
    <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" :alt="movie.title" />
    <div class="movie-details">
      <p class="movie-title">{{ movie.title }}</p>
      <p class="movie-release-date">{{ movie.release_date }}</p>
      <p class="movie-genres">{{ movie.genre_ids }}</p>
    </div>
    
  </div>
</div>

<div class="footer"><h4>IfWachers</h4></div>
</template>
<style scoped>
@import url('https://fonts.cdnfonts.com/css/cinzel');
@import url('https://fonts.cdnfonts.com/css/qixohe-trial');


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
  padding: 0.5rem ;
  color: grey;
  transition: 0.5s;
}

.genre-item:hover {
  cursor: pointer;
  background-color: #414b4a;

}
.movie-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}

.movie-card {
  font-family:  Arial, Helvetica, sans-serif;
  width: 15rem;
  height: 30rem;
  border-radius: 5px;
  overflow: hidden;
  border: 1px solid grey;
}

.movie-card img {
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


.footer{
  position: fixed;
  font-family: 'Cinzel Decorative', sans-serif;
  bottom: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #333;
  color: aliceblue  ;
  padding: 1rem;
}
</style>