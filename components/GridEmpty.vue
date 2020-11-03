<template>
  <div
    class="bg-gray-500 text-white text-sm font-bold px-4 py-3 w-1/2 mx-auto"
    role="alert"
  >
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: "GridEmpty",
  props: {
    message: {
      type: String,
      default: "0 items to be shown."
    }
  }
};
</script>

<style></style>
