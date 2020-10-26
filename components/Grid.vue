<template>
  <div id="projects" class="container mx-auto p-16">
    <h2 class="text-4xl mb-6">Projects</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div
        :key="index"
        v-for="(project, index) in projects"
        class="max-w-sm rounded overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out"
      >
        <a
          class="block h-full"
          :href="`https://${project.link}`"
          target="_blank"
        >
          <img
            class="w-full"
            :src="require(`~/assets/images/${project.img}`)"
            :alt="project.title"
          />
          <div class="flex flex-col">
            <div class="px-6 py-4">
              <h3 class="font-semibold text-xl mb-2">{{ project.title }}</h3>
              <p
                v-if="project.subtitle"
                class="text-purple-700 text-sm font-medium"
              >
                {{ project.subtitle }}
              </p>
            </div>
            <div class="px-6 pt-4 pb-3">
              <span
                :key="index"
                v-for="(tag, index) in project.tags"
                class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                >#{{ tag }}</span
              >
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          img: "aluna-festival.png",
          link: "aluna-festival.fr",
          title: "Aluna Festival",
          subtitle: "2017 / 2018 / 2019 / 2020",
          tags: ["wordpress", "sketch", "amazonS3", "acf", "svg"]
        },
        {
          img: "le-tube-les-bourdaines.png",
          link: "le-tube-bourdaines.com",
          title: "Le Tube - Les Bourdaines",
          tags: ["wordpress", "sketch", "svg", "acf"]
        },
        {
          img: "modjo-production.png",
          link: "modjo-production.com",
          title: "Modjo Production",
          tags: ["wordpress", "sketch", "acf", "svg"]
        },
        {
          img: "olac-festival.png",
          link: "olac-festival.fr",
          title: "O'Lac Festival",
          tags: ["wordpress", "sketch", "svg", "acf"]
        },
        {
          img: "jouvanceau.png",
          link: "jouvanceau.com",
          title: "Jouvanceau",
          tags: ["wordpress", "photoshop", "svg", "acf"]
        }
      ]
    };
  }
};
</script>

<style></style>
