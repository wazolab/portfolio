<template>
  <div
    class="hero rounded-b-3xl shadow-xl bg-gradient-to-br from-blue-300 to-blue-700 flex items-center"
  >
    <div
      class="rounded-3xl bg-white w-3/4 sm:w-1/2 max-w-lg mx-auto p-6 shadow-xl text-center"
    >
      <!-- TODO: [WL-30] Create fliping avatar
        even: {
          type: [Component, String],
          required: true
        },
        odd: {
          type: [Component, String],
          default: null
        }
      -->

      <img
        class="w-24 md:w-32 hero-avatar mx-auto mb-6"
        src="~/assets/images/noe.png"
        :alt="avatar.alt"
      />

      <h1 class="font-mono text-2xl">
        {{ title }}
      </h1>

      <div class="hero-actions mt-4 hidden sm:flex justify-center">
        <!-- TODO: Create a Button component -->
        <a
          :href="action.url"
          :target="action.target"
          :rel="action.rel"
          class="button--green mx-2"
          v-for="(action, index) in actions"
          :key="index"
        >
          {{ action.title }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "@/components/Logo";

export default {
  components: { Logo },
  props: {
    title: {
      type: String,
      required: true,
      validator: string => {
        return string.length && string.length <= 15;
      }
    },
    avatar: {
      type: Object,
      default: () => {
        return {
          src: "noe.png",
          alt: "Noé Viricel"
        };
      }
    },
    actions: {
      type: [Array, Object],
      validator: function(o) {
        if (o.length <= 5) {
          if (o.length) {
            for (let index = 0; index < o.length; index++) {
              return (
                o[index].hasOwnProperty("title") &&
                o[index].hasOwnProperty("url") &&
                o[index].hasOwnProperty("target") &&
                o[index].hasOwnProperty("rel")
              );
            }
          }
        }

        return false;
      }
    }
  }
};
</script>

<style>
.hero {
  height: 460px;
}
</style>
