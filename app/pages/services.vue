<template>
  <section class="mx-auto w-full max-w-7xl px-4 py-12">
    <SectionHeader title="Services" subtitle="What we can do for you." />
    <div class="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
      <div class="rounded-2xl border border-slate-200 bg-white p-6">
        <h2 class="text-xl font-semibold">Consulting</h2>
        <p class="mt-2 text-slate-600">Architecture reviews, audits, and roadmap planning.</p>
      </div>
      <div class="rounded-2xl border border-slate-200 bg-white p-6">
        <h2 class="text-xl font-semibold">Development</h2>
        <p class="mt-2 text-slate-600">Feature delivery across web frontends and backends.</p>
      </div>
      <div class="rounded-2xl border border-slate-200 bg-white p-6">
        <h2 class="text-xl font-semibold">Performance</h2>
        <p class="mt-2 text-slate-600">Profiling, optimizations, and Core Web Vitals improvements.</p>
      </div>
    </div>
  </section>
  <section class="mx-auto w-full max-w-7xl px-4 pb-12">
    <div class="rounded-2xl border border-slate-200 bg-white p-6">
      <h2 class="text-xl font-semibold mb-4">Request a quote</h2>
      <div class="grid gap-3">
        <InputForm v-model="form.name" label="Name" placeholder="Your full name" />
        <InputForm v-model="form.email" label="Email" type="email" placeholder="you@example.com" :error="emailError" />
        <InputForm v-model="form.service" label="Service" placeholder="What do you need?" />
        <InputForm v-model="form.message" label="Message" type="text" placeholder="Tell us more" />
        <button @click="submitForm" class="bg-indigo-600 text-white px-4 py-2 rounded-lg">Request</button>
      </div>
    </div>
  </section>
</template>

<script>
import InputForm from "../components/InputForm.vue";

export default {
  name: "ServicesPage",
  components: { InputForm },
  data() {
    return {
      form: { name: "", email: "", service: "", message: "" },
      emailError: ""
    };
  },
  methods: {
    submitForm() {
      console.log(this.form);
    },
  },
}
</script>


