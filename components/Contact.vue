<template>
  <div id="contact-me" class="container mx-auto p-16">
    <h2 class="text-4xl mb-6">Contact me !</h2>
    <form
      class="w-3/4 sm:w-1/2 max-w-lg mx-auto p-6 rounded shadow-xl flex flex-col items-center bg-gradient-to-br from-indigo-800 to-blue-800"
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      data-netlify-recaptcha="true"
      @submit.prevent="handleSubmit"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p class="hidden">
        <label
          >Don’t fill this out if you're human:
          <input v-model="form.honeypot" name="bot-field"
        /></label>
      </p>
      <div class="flex flex-wrap -mx-3 mb-4">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
            for="grid-first-name"
          >
            Name
          </label>
          <input
            class="appearance-none block w-full bg-gray-100 placeholder-gray-700 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            name="fullname"
            v-model="form.fullname"
            placeholder="Jane Doe"
          />
        </div>
        <div class="w-full md:w-1/2 px-3">
          <label
            class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
            for="grid-email"
          >
            Email
          </label>
          <input
            class="appearance-none block w-full bg-gray-100 placeholder-gray-700 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
            id="grid-email"
            type="text"
            name="email"
            v-model="form.email"
            placeholder="janedoe@example.com"
          />
        </div>
      </div>

      <textarea
        rows="3"
        class="w-full mb-4 bg-gray-100 appearance-none rounded py-2 px-4 placeholder-gray-700 text-gray-700 sm:text-sm sm:leading-5 focus:outline-none focus:bg-white"
        name="message"
        v-model="form.message"
        placeholder="Hi, ..."
      ></textarea>
      <div class="mb-4" data-netlify-recaptcha="true"></div>
      <button
        type="submit"
        class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      >
        Submit
      </button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      form: {
        fullname: "",
        email: "",
        message: "",
        honeypot: null
      }
    };
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    },
    handleSubmit() {
      const axiosConfig = {
        header: { "Content-Type": "application/x-www-form-urlencoded" }
      };
      axios
        .post(
          "/",
          this.encode({
            "form-name": "contact",
            ...this.form
          }),
          axiosConfig
        )
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style></style>
