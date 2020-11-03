<template>
  <div
    class="hero rounded-b-3xl shadow-xl bg-gradient-to-br from-blue-300 to-blue-700 flex items-center"
  >
    <div
      class="rounded-3xl bg-white w-3/4 sm:w-1/2 max-w-lg mx-auto p-6 shadow-xl text-center"
    >
      <Logo />
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

      <!-- <div
        class="w-24 h-24 md:w-32 md:h-32 overflow-hidden relative rounded-full"
      >
        <img
          id="brand-member"
          class="bg-cover absolute"
          src="~/assets/images/noe.jpg"
          alt="Noé Viricel"
        />
      </div> -->

      <h1 class="font-mono text-2xl">
        {{ title }}
      </h1>

      <!-- TODO: Pass array of links -->
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
import Logo from "@/components/Logo";

export default {
  components: { Logo },
  props: {
    title: {
      type: String,
      required: true
    }
    // links: {
    //   type: [Array, Object],
    //   default: () => {
    //     return {
    //       title: "",
    //       url: "",
    //       target: "",
    //       rel: ""
    //     };
    //   },
    //   validator: () => {
    //     const skeleton = [
    //       {
    //         title: "",
    //         url: "",
    //         target: "",
    //         rel: ""
    //       }
    //     ];
    //   }
    // }
  }
};
</script>

<style>
.hero {
  height: 460px;
}

/* #brand-member {
} */
</style>
