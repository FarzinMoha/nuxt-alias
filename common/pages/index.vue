<template>
  <Navbar>
    <index/>
    <div>it's a common element for both A and B page</div>
  </Navbar>
</template>

<script>
import Index from 'realpages/index.vue'
// import Navbra from '../../components/Navbra.vue';

export default {
  components: {Index}
}

</script>