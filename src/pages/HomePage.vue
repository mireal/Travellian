<script setup>
import { HeroSection, Navbar, PopularDestinations, SpecialOffer, OurBlog } from '@/widgets'
</script>

<template>
  <main>
    <div class="bg-image">
      <Navbar />
      <HeroSection />
    </div>

    <PopularDestinations />
    <SpecialOffer />
    <OurBlog />
  </main>
</template>
