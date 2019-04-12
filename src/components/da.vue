<template>
<div>
  <ul>
    <li
      v-for="(point, idx) in anchorPoints"
      :key="point.id"
    >
      <a
        :href="point.hashUrl"
        :id="point.id"
        ref="anchors"
      >
        <h1
          :class="{hightlight: idx === highlightIdx}"
        >
          {{idx + 1}} - {{point.title}}
        </h1>
      </a>
    </li>
  </ul>
</div>
</template>

<script>
import { getId, getHashUrl } from './anchor_points';
import { isElementInViewport } from './is_visible';
import throttle from 'lodash.throttle';
const SCROLL_THROTTLE = 500;
export default {
  name: 'HelloWorld',
  data() {
    return {
      anchorPoints: ['POINT1', 'POINT2', 'POINT3', 'POINT4'].map(p => ({
        id: getId(p),
        hashUrl: getHashUrl(p),
        title: p,
      })),
      highlightIdx: -1,
    }
  },
  methods: {
    setUrl(url) {
      if(url !== '') {
        location.href = url;
      }
    },
    onScroll() {
      const { anchors = [] } = this.$refs;
      for(let i = 0; i < anchors.length; i++) {
        if (isElementInViewport(anchors[i])) {
          this.highlightIdx = i;
          break;
        }
      }
    }
  },
  mounted() {
    this.setUrl(this.$route.hash);
    const onScroll = throttle(this.onScroll, SCROLL_THROTTLE);
    document.addEventListener('scroll', onScroll);
    this.$nextTick(onScroll);
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

.hightlight {
  color: red;
}
</style>
