<template>
    <div class="main-content">
      <ContactDetails />
    </div>
  </template>
  
  <script>
  import ContactDetails from '../components/ContactDetails.vue';
  
  export default {
    components: {
      ContactDetails,
    },
  };
  </script>
  
  <style scoped>
  .main-content {
    padding: 20px;
  }
  </style>
  