<template>
  <div class="py-4">
    <ol
      vocab="http://schema.org/"
      typeof="BreadcrumbList"
      class="breadcrumbs overflow-hidden whitespace-no-wrap"
    >
      <li property="itemListElement" typeof="ListItem" class="breadcrumbs_item">
        <nuxt-link class="breadcrumbs_link" property="item" typeof="WebPage" to="/">
          <span property="name">Home</span>
        </nuxt-link>
        <meta property="position" content="1" />
      </li>
      <li
        v-for="(crumb, index) in crumbs"
        :key="index"
        property="itemListElement"
        typeof="ListItem"
        class="breadcrumbs_item"
      >
        <nuxt-link
          class="breadcrumbs_link"
          property="item"
          typeof="WebPage"
          :to="crumb.path"
        >
          <span property="name">{{
              $route.fullPath === crumb.path && title !== null ? title : crumb.title
            }}</span>
        </nuxt-link>
        <meta property="position" :content="index + 2" />
      </li>
    </ol>
  </div>
</template>

<script>
const titleCase = require('ap-style-title-case');
export default {
  props: {
    title: {
      type: String,
      default: null,
    },
  },
  computed: {
    crumbs() {
      const fullPath = this.$route.fullPath;
      const crumbsParams = fullPath.startsWith('/') ? fullPath.substring(1).split('/') : fullPath.split('/');
      const crumbs = [];
      let path = '';
      crumbsParams.forEach((param, index) => {
        path = `${path}/${param}`;
        const match = this.$router.match(path);
        if (match.name !== null) {
          crumbs.push({
            title: titleCase(param.replace(/-/g, ' ')),
            ...match,
          });
        }
      });
      return crumbs;
    }
  }
}
</script>

<style scoped>
ol {
  list-style: none;
}
li {
  display: inline;
}
li::after {
  content: " » ";
  display: inline;
  font-size: 0.9em;
  color: #ccc;
  padding: 0 0.25em 0 0.15em;
}
li:last-child::after {
  content: "";
}
li a {
  color: #5c5c5c;
}
li a.nuxt-link-exact-active.nuxt-link-active {
  pointer-events: none;
}
.breadcrumbs {
  text-overflow: ellipsis;
}
</style>
