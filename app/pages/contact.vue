<template>
  <div>
    <section class="mx-auto w-full max-w-7xl px-4 py-12">
      <SectionHeader title="Contact" subtitle="We usually respond within 1–2 business days" />
    </section>

    <section
      class="mx-auto w-full max-w-7xl px-4 py-12 grid grid-cols-1 gap-8 md:grid-cols-2"
    >
      <div class="rounded-2xl border border-slate-200 bg-white p-6">
        <h2 class="text-xl font-semibold mb-4">Send a message</h2>
        <div class="grid gap-3">
          <InputForm v-model="form.name" label="Name" placeholder="Your full name" />
          <InputForm v-model="form.email" label="Email" type="email" placeholder="you@example.com" :error="emailError" />
          <InputForm v-model="form.phone" label="Phone" type="tel" placeholder="+91 98765 43210" />
          <InputForm v-model="form.message" label="Message" type="text" placeholder="How can we help?" />
          <button @click="submitForm" class="bg-indigo-600 text-white px-4 py-2 rounded-lg">Send</button>
        </div>
      </div>
      <div class="rounded-2xl border border-slate-200 bg-white p-6">
        <h2 class="text-xl font-semibold">Other ways to reach us</h2>
        <ul class="mt-3 space-y-2 text-slate-700">
          <li><span class="opacity-60">Email:</span> hello@example.com</li>
          <li><span class="opacity-60">Phone:</span> +91 9876543210</li>
          <li>
            <span class="opacity-60">Address:</span> Noida
          </li>
        </ul>
        
      </div>
    </section>
  </div>
</template>

<script>
import InputForm from "../components/InputForm.vue";

export default {
  name: "ContactPage",
  components: { InputForm },
  data() {
    return {
      form: { name: "", email: "", phone: "", message: "" },
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
