<div class="hero">
  <img
      src="/imgs/outro.webp"
      alt="footer iamge of wedding"
      class="absolute inset-0 -z-10 h-full w-full object-cover"
      loading="lazy"
  />
  <div class="hero-content">
    <div class="info">
      <p>SAVE THE DATE</p>
      <p>JAEWOO AND CHAEYEON</p>
    </div>
    <div class="date">
      <h2>3</h2>
      <h2>DEC</h2>
      <h2>2023</h2>
    </div>
    <div class="info">
      <p>AMBASSADOR PULLMAN</p>
      <p>NAMSAN ROOM</p>
    </div>
  </div>
</div>

<style lang="postcss">
.hero {
  @apply relative overflow-hidden w-full h-full
}
.hero-content {
  @apply flex flex-col justify-around px-8 max-w-xl h-full mx-auto text-left bg-black bg-opacity-30;
}
.info p {
  font-family: 'cantarell', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas';
  @apply text-white text-lg leading-8 uppercase tracking-widest;
}
.date h2 {
  font-family: 'zolina', 'ui-serif', 'Georgia', 'Cambria', 'Times New Roman';
  @apply text-white text-4xl font-bold leading-tight tracking-widest mt-4 sm:mt-8 sm:text-6xl;
}
</style>