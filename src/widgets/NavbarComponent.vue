<script setup>
import { NavbarLinks } from '@/features'
import { DefaultButton } from '@/shared'
</script>

<template>
  <nav class="navbar">
    <a class="navbar__logo icon icon__logo" href="/"></a>

    <NavbarLinks class="nabar__links hidden-tablet"></NavbarLinks>

    <div class="navbar__auth hidden-tablet">
      <a class="navbar__auth__login" href="#"> Login </a>
      <DefaultButton text="Sign up"></DefaultButton>
    </div>

    <a class="navbar__burger visible-tablet-above" href="#">
      <img class="navbar__burger--icon" src="../assets/images/icons/burger.svg" alt="burger" />
    </a>
  </nav>
</template>
