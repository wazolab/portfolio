<template>
  <div id="projects" class="container mx-auto p-8 sm:p-16">
    <h2 class="text-4xl mb-6">Projects</h2>

    <!-- Filters Nav -->
    <ul id="grid-nav" class="bg-white flex mb-8 p-3">
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

    <!-- Error Message -->
    <GridEmpty
      v-if="dataSource && !dataSource.length"
      message="0 projects listed."
    />
  </div>
</template>

<script>
import { shuffle } from "lodash";
import GridEmpty from "./GridEmpty";

export default {
  components: { GridEmpty },
  computed: {
    filteredData() {
      if (this.filter === "all") return this.dataSource;

      return shuffle(this.dataSource.filter(o => o.type === this.filter));
    }
  },
  props: {
    dataSource: [Array, Object],
    default: () => {}
  },
  data() {
    return {
      filter: "all"
    };
  },
  mounted() {
    // FIXME: Commented for testing purposes
    // 1. Get nav element and observe it.
    // 2. Toggle class for sticky behavior.
    // const stickyElm = document.getElementById("grid-nav");
    // this.observeElmt(stickyElm);
  },
  methods: {
    // FIXME: Commented for testing purposes
    // observeElmt(elmt) {
    //   const observer = new IntersectionObserver(
    //     ([e]) =>
    //       e.target.classList.toggle("shadow-md", e.intersectionRatio < 1),
    //     { threshold: [1] }
    //   );
    //   observer.observe(elmt);
    // }
  }
};
</script>

<style>
#grid-nav {
  position: sticky;
  top: -1px;
  z-index: 15;
  transition: all 0.1s;
  padding-top: calc(0.75rem + 1px);
  padding-left: 0;
}

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
