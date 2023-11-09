<template>
  <header>
    <nav>
  
      <router-link to="/" class="navbar-link"><h1>IFWachers</h1></router-link>
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
  width: 100%;
  font-family: 'Cinzel', sans-serif;
  height: 3rem;
  display: flex;
  background-color: #333; 
  color: #fff;
  font-size: 1.2rem;
  padding-left: 2rem;
  position: fixed;
  top: 0;
}
nav h1{
  color: #a03232;
  transition: 0.5s;
}

nav h1:hover{
  color: #fff;
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
  color: #a03e32; 
}
</style>
