<template>
  <section class="container">
    <p class="info">{{ $t('textContactFormInfo') }}</p>
    <form class="form" @submit.prevent="submitForm">
      <label class="input-group w-50">
        <span class="label">Name</span>
        <input v-model="contactFormData.name" class="input" type="text" />
      </label>
      <label class="input-group w-50">
        <span class="label">Surname</span>
        <input v-model="contactFormData.surname" class="input" type="text" />
      </label>
      <label class="input-group w-50">
        <span class="label">Phone</span>
        <input v-model="contactFormData.phone" class="input" type="tel" />
      </label>
      <label class="input-group w-50">
        <span class="label">Email</span>
        <input v-model="contactFormData.email" class="input" type="email" />
      </label>
      <label class="input-group">
        <span class="label">Message</span>
        <textarea v-model="contactFormData.message" class="input"></textarea>
      </label>
      <label class="input-group">
        <button type="submit" class="btn btn-blue">Send</button>
      </label>
    </form>
    <pre>{{ contactFormData }}</pre>
  </section>
</template>

<script>
export default {
  data() {
    return {
      contactFormData: {
        name: '',
        surname: '',
        phone: '',
        email: '',
        message: ''
      }
    }
  },
  methods: {
    submitForm() {
      console.log(this.contactFormData); // eslint-disable-line
    }
  }
}
</script>

<style scoped>
.info {
  font-size: 1.3rem;
  margin-top: 3rem;
  margin-bottom: 2rem;
  font-weight: 600;
}
.form {
  display: flex;
  flex-wrap: wrap;
}
.input-group {
  display: block;
  width: 100%;
  padding-right: 2rem;
  margin-bottom: 2rem;
}
.w-50 {
  max-width: 50%;
}
.label {
  display: block;
  font-weight: 500;
  margin-bottom: 0.5rem;
}
.input {
  border: 1px solid #ccc;
  border-radius: 3px;
  width: 100%;
}
</style>
