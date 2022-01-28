<template>
  <div class="container">
    <div class="row">
      <div>
        <h1 class="heading-primary heading-primary--1">404</h1>
        <h1 class="heading-primary heading-primary--2">error</h1>
        <h2 class="heading-secondary">page not found</h2>
        <h3 class="heading-tertiary">
          the requested URL
          <span className="text-danger">"{{ pathname }}"</span> was not found
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
  computed: {
    pathname() {
      return this.$route.path;
    },
  },
};
</script>

<style scoped>
.container {
  padding: 100px;
}

.row {
  display: flex;
  justify-content: center;
  align-items: center;
}

.row div {
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.3rem;
}

.heading-primary {
  font-family: inherit;
  font-weight: 500;
  color: inherit;
  line-height: 1.2;
  margin-bottom: 0.5rem;
}

.heading-primary--1 {
  font-size: 4.5rem;
}

.heading-primary--2 {
  font-size: 2.5rem;
}

.heading-secondary {
  font-family: inherit;
  font-size: 2.5rem;
  font-weight: 500;
  color: inherit;
  line-height: 1.2;
  margin-top: 0;
  margin-bottom: 0.5rem;
}

.heading-tertiary {
  font-family: inherit;
  font-size: 1.75rem;
  font-weight: 500;
  color: inherit;
  line-height: 1.2;
  margin-top: 0;
  margin-bottom: 0.5rem;
}

.text-danger {
  color: #dc3545;
}
</style>
