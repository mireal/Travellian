<script setup>
import {
  HeroSection,
  Navbar,
  PopularDestinations,
  SpecialOffer,
  OurBlog,
  TripPlanners,
} from '@/widgets'
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
    <TripPlanners />
  </main>
</template>
