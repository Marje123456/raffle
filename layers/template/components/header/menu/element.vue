<script setup lang="ts">
defineProps<{
  title: string
  hrefer: string
  links: { href: string; title: string }[]
}>()
</script>

<template>
  <li class="menu_has_children">
    <a :href="hrefer">{{ title }}</a>
    <ul class="sub-menu">
      <li v-for="link in links" :key="link.href">
        <a :href="link.href">{{ link.title }}</a>
      </li>
    </ul>
  </li>
</template>
