<template>
<div>
  <ul>
    <li
      v-for="point in anchorPoints"
      :key="point.id"
    >
      <a
        :href="point.hashUrl"
        :id="point.id"
      >
        <h3>
          {{point.title}}
        </h3>
      </a>
    </li>
  </ul>
</div>
</template>

<script>
import { getId, getHashUrl } from './anchor_points';
export default {
  name: 'HelloWorld',
  data() {
    return {
      anchorPoints: ['POINT1', 'POINT2', 'POINT3', 'POINT4'].map(p => ({
        id: getId(p),
        hashUrl: getHashUrl(p),
        title: p,
      }))
    }
  },
  methods: {
    setUrl(url) {
      location.href = url;
    }
  },
  mounted() {
    this.$nextTick(() => this.setUrl(this.$route.hash))
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li {
  display: block;
  height: 500px;
}

a {
  text-decoration: none;
}

a:visited {
  color: inherit;
}
</style>
