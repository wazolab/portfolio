<template>
  <div id="projects" class="container mx-auto p-8 sm:p-16">
    <h2 class="text-4xl mb-6">Projects</h2>

    <!-- Filters Nav -->
    <ul class="flex mb-8">
      <li class="mr-3">
        <button
          :class="'btn ' + (filter === 'all' ? 'btn-active' : 'btn-ghost')"
          @click="() => (filter = 'all')"
        >
          All
        </button>
      </li>
      <li class="mr-3">
        <button
          :class="
            'btn ' + (filter === 'freelance' ? 'btn-active' : 'btn-ghost')
          "
          @click="filter = 'freelance'"
        >
          Freelance
        </button>
      </li>
      <li class="mr-3">
        <button
          :class="'btn ' + (filter === 'company' ? 'btn-active' : 'btn-ghost')"
          @click="() => (filter = 'company')"
        >
          Company
        </button>
      </li>
    </ul>

    <!-- Grid -->
    <transition-group
      name="flip-grid"
      tag="div"
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      <div
        :key="project.title"
        v-for="project in filteredData"
        class="grid-item max-w-sm rounded overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out"
      >
        <a
          class="block h-full"
          :href="`https://${project.link}`"
          target="_blank"
        >
          <img
            class="w-full grid-item-thumbnail"
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
    </transition-group>
  </div>
</template>

<script>
import projects from "../content/projects.json";
import { shuffle } from "lodash";

export default {
  computed: {
    filteredData() {
      if (this.filter === "all") return this.data;

      return shuffle(this.data.filter(o => o.type === this.filter));
    }
  },
  data() {
    return {
      data: projects,
      filter: "all"
    };
  },
  mounted() {
    this.data = shuffle(this.data);
  }
};
</script>

<style>
.grid-item-thumbnail {
  max-height: 200px;
  object-fit: cover;
}

.grid-item {
  transition: all 1s;
}

.flip-grid-enter,
.flip-grid-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.flip-grid-leave-active {
  position: absolute;
}

.btn {
  @apply inline-block border rounded py-1 px-3;
}

.btn-active {
  @apply border-blue-500 bg-blue-500 text-white;
}

.btn-ghost {
  @apply border-white text-blue-500;
}

.btn-ghost:hover {
  @apply border-gray-200 bg-gray-200;
}
</style>
