<script setup>
import { SectionTitle } from '@/shared'
import { BlogContent } from '@/features'

const blogPlaceholder = {
  title: "Beautiful Italy \n Let’s travel",
  description: `But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound the actual teachings of the great explorer of the truth, the master- builder of human happiness.
  No one rejects, dislike, or avoids plasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremly painful. Nor again is there anyone who loves or pursues.`,
  imageSrc: "./src/assets/images/blog/liguria-hills.jpeg",
  link: "#"
}
</script>

<template>
  <section class="our-blog">
    <SectionTitle title="Our Blog" text="An insight the incredible experience in the world"
      accent-line-class="our-blog__accent-line" />
    <BlogContent :content="blogPlaceholder" />
  </section>
</template>
