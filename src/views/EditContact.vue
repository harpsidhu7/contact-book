<template>
    <div class="main-content">
      <ContactForm />
    </div>
  </template>
  
  <script>
  import ContactForm from '../components/ContactForm.vue';
  
  export default {
    components: {
      ContactForm,
    },
  };
  </script>
  
  <style scoped>
  .main-content {
    padding: 20px;
  }
  </style>
  