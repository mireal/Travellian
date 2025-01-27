<script setup>
import {
  HeroSection,
  Navbar,
  PopularDestinations,
  SpecialOffer,
  OurBlog,
  TripPlanners,
  DestinationGallery,
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
    <DestinationGallery />
  </main>
</template>
