<template>
  <div>
    <div class="flex flex-col pt-20 justify-center min-h-screen">
      <Header />
      <div class="w-full max-w-screen-lg flex-grow p-8 m-auto">
        <slot></slot>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script setup></script>
