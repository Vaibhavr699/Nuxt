<template>
  <div class="rounded-2xl border border-slate-200 bg-white p-6">
    <h2 class="text-xl font-semibold">{{ title || 'Form' }}</h2>

    <form class="mt-4 grid gap-3" @submit="onSubmit">
      <div v-for="field in effectiveFields" :key="field.name">
        <label class="block text-sm mb-1">{{ field.label }}</label>

        <template v-if="field.textarea">
          <textarea
            v-model="form[field.name]"
            :rows="field.rows || 4"
            class="w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-indigo-400"
          ></textarea>
        </template>

        <template v-else-if="field.type === 'select' && field.options">
          <select
            v-model="form[field.name]"
            class="w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-indigo-400"
          >
            <option value="" disabled selected hidden>Select...</option>
            <option v-for="opt in field.options" :key="opt.value" :value="opt.value">{{ opt.label }}</option>
          </select>
        </template>

        <template v-else-if="field.type === 'checkbox'">
          <input type="checkbox" v-model="form[field.name]" class="mr-2" />
        </template>

        <template v-else>
          <input
            v-model="form[field.name]"
            :type="field.type || 'text'"
            class="w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-indigo-400"
          />
        </template>
      </div>

      <div class="flex items-center gap-3">
        <button type="submit" class="rounded-lg bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-500">
          {{ submitLabel || 'Submit' }}
        </button>
        <button type="button" @click="reset" class="rounded-lg border border-slate-300 px-4 py-2 hover:bg-slate-100">
          {{ resetLabel || 'Reset' }}
        </button>
      </div>
    </form>
  </div>
</template>


<script setup>
import { reactive, ref, computed } from 'vue'

const props = defineProps({
  title: String,
  name: Boolean,
  email: Boolean,
  age: Boolean,
  comment: Boolean,
  message: Boolean,
  phone: Boolean,
  website: Boolean,
  topic: Boolean,
  newsletter: Boolean,
  submitLabel: String,
  resetLabel: String
})

const emit = defineEmits(['submit'])

const allFields = {
  name: { label: 'Name', type: 'text', required: true },
  email: { label: 'Email', type: 'email', required: true },
  age: { label: 'Age', type: 'number' },
  comment: { label: 'Comment', textarea: true, rows: 4 },
  message: { label: 'Message', textarea: true, rows: 4 },
  phone: { label: 'Phone', type: 'tel' },
  website: { label: 'Website', type: 'url' },
  topic: {
    label: 'Topic',
    type: 'select',
    options: [
      { label: 'Careers', value: 'careers' },
      { label: 'Partnership', value: 'partnership' },
      { label: 'Demo', value: 'general3' },
      { label: 'General', value: 'general2' },
      { label: 'Demo2', value: 'general1' },
    ]
  },
  newsletter: { label: 'Subscribe', type: 'checkbox' }
}

const effectiveFields = computed(() => {
  return Object.keys(allFields)
    .filter(k => props[k])
    .map(k => ({ name: k, ...allFields[k] }))
})

const form = reactive({})
effectiveFields.value.forEach(f => {
  form[f.name] = f.type === 'checkbox' ? false : ''
})

const submitted = ref(false)

function onSubmit(e) {
  e.preventDefault()
  submitted.value = true
  emit('submit', { data: { ...form } })
  console.log('Form Submitted:', { ...form })
}

function reset() {
  effectiveFields.value.forEach(f => {
    form[f.name] = f.type === 'checkbox' ? false : ''
  })
  submitted.value = false
}
</script>
