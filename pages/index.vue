<template>
  <div>
    <Header />
    <Hero title="wazo-lab.io" />
    <Grid :dataSource="projects" />
    <Contact />
  </div>
</template>

<script>
import projects from "@/content/projects.json";

export default {
  data() {
    return {
      projects: projects
    };
  }
};
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>
