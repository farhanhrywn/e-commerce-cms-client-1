<template>
  <div>
    <Nav></Nav>
    <FormAdd></FormAdd>
  </div>
</template>

<script>
import FormAdd from '@/components/FormAdd.vue'
import Nav from '@/components/Nav.vue'
export default {
  name: 'AddProduct',
  components: {
    FormAdd, Nav
  }
}
</script>

<style>

</style>
