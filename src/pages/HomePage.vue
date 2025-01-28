<script setup>
import {
  HeroSection,
  Navbar,
  PopularDestinations,
  SpecialOffer,
  OurBlog,
  TripPlanners,
  DestinationGallery,
  FooterSection
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
    <FooterSection />
  </main>
</template>
