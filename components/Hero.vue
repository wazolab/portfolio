<template>
  <div
    class="hero rounded-b-3xl shadow-xl bg-gradient-to-br from-blue-300 to-blue-700 flex items-center"
  >
    <div
      class="rounded-3xl bg-white w-3/4 sm:w-1/2 max-w-lg mx-auto p-6 shadow-xl text-center"
    >
      <Logo />
      <h1 class="font-mono text-2xl">
        wazo-lab.io
      </h1>
      <div class="mt-4 hidden sm:block">
        <a
          href="#projects"
          target="_self"
          rel="noopener noreferrer"
          class="button--green"
        >
          Projects
        </a>
        <a
          href="#contact-me"
          target="_self"
          rel="noopener noreferrer"
          class="button--grey"
        >
          Contact Me
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.hero {
  height: 460px;
}
</style>
