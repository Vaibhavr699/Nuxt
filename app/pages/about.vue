<template>
  <section class="mx-auto w-full max-w-7xl px-4 py-12">
    <SectionHeader
      title="About Us"
      subtitle="We build performant, maintainable web apps using Nuxt and modern tooling."
    />

    <div class="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
      <div class="rounded-2xl border border-slate-200 bg-white p-6">
        <h2 class="text-xl font-semibold">Our Mission</h2>
        <p class="mt-2 text-slate-600">
          Deliver high-quality software with clear architecture and great UX.
        </p>
      </div>
      <div class="rounded-2xl border border-slate-200 bg-white p-6">
        <h2 class="text-xl font-semibold">Our Values</h2>
        <p class="mt-2 text-slate-600">
          Transparency, ownership, craftsmanship, and continuous improvement.
        </p>
      </div>
    </div>
  </section>

  <section class="mx-auto w-full max-w-7xl px-4 pb-12">
    <div class="rounded-2xl border border-slate-200 bg-white p-6">
      <h2 class="text-xl font-semibold mb-4">Say Hello</h2>
      <div class="grid gap-3">
        <!-- <InputForm v-model="form.username" label="Username" placeholder="Enter your username" />
        <InputForm v-model="form.email" label="Email" type="field" placeholder="Enter your email" :error="emailError" />
        <InputForm v-model="form.password" label="Password" type="password" placeholder="Enter your password" /> -->

        <!-- <InputForm v-model="password" label="Password" type="password" placeholder="Enter your password" /> -->

        <InputForm v-model="username" label="Username" placeholder="Enter your username" />
        <InputForm v-model="email" label="Email" type="field" placeholder="Enter your email"  />
        <InputForm v-model="password" label="Password" type="password" placeholder="Enter your password" />
        <button
          @click="submitForm"
          class="bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          Submit
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import InputForm from "../components/InputForm.vue";

export default {
  name: "FormExample",
  components: { InputForm },
  data() {
    return {
        username: "",
        email: "",
        password: "",

      emailError: "",
    };
  },
  methods: {
    submitForm() {
      console.log("username:",this.username,"email:", this.email,"password:", this.password);
    },
  },
};
</script>
