<template>
  <header>
    <nav>
  <h1>IFWachers</h1>
      <router-link to="/" class="navbar-link">Home</router-link>
      <router-link to="/filmes" class="navbar-link">Filmes</router-link>
      <router-link to="/tv" class="navbar-link">Programas de TV</router-link>
    </nav>
  </header>
  <main>
    <router-view />
  </main>
</template>

<style scoped>
header {
  height: 3rem;
  display: flex;
  background-color: #333; 
  color: #fff;
  font-size: 1.2rem;
  padding-left: 2rem;
}

nav {
  column-gap: 2rem;
  margin-bottom: 0;
  display: flex;
  align-items: center;
}

.navbar-link {
  text-decoration: none;
  color: #fff;
  margin: 0 1rem; 
  transition: color 0.3s; 
}

.navbar-link:hover {
  color: #0da34b; 
}
</style>
