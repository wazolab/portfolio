<template>
  <div>
    <Header />
    <Hero title="wazo-lab.io" :actions="heroActions" />
    <Grid :dataSource="projects" />
    <Contact />
  </div>
</template>

<script>
import projects from "@/content/projects.json";

export default {
  data() {
    return {
      projects: projects,
      heroActions: [
        {
          title: "Projects",
          url: "#projects",
          target: "_self",
          rel: "noopen noreferrer"
        },
        {
          title: "Contact",
          url: "#contact",
          target: "_self",
          rel: "noopen noreferrer"
        }
      ]
    };
  }
};
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>
