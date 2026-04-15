<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
    :class="isScrolled
      ? 'bg-cream/96 backdrop-blur-md shadow-[0_1px_0_rgba(155,168,136,0.25)]'
      : 'bg-cream/70 backdrop-blur-sm'"
  >
    <div class="px-5 h-[72px] flex items-center justify-between">
      <!-- Logo -->
      <a href="#home" @click.prevent="scrollTo('home')"
        class="flex items-center gap-2 transition-colors duration-300 no-underline text-ink">
        <!-- Bow -->
        <svg width="24" height="18" viewBox="0 0 64 50" fill="none" aria-hidden="true">
          <path d="M30 25 C27 19 18 10 10 13 C4 16 7 25 14 25 C20 25 27 24 30 25Z"
            fill="none" stroke="#C8887A" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M34 25 C37 19 46 10 54 13 C60 16 57 25 50 25 C44 25 37 24 34 25Z"
            fill="none" stroke="#C8887A" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          <ellipse cx="32" cy="25" rx="2.5" ry="2" fill="none" stroke="#C8887A" stroke-width="3"/>
          <path d="M30 27 Q27 34 25 41" fill="none" stroke="#C8887A" stroke-width="3" stroke-linecap="round"/>
          <path d="M34 27 Q37 34 39 41" fill="none" stroke="#C8887A" stroke-width="3" stroke-linecap="round"/>
        </svg>
        <span class="font-main font-600 text-xl tracking-wide">E &amp; K</span>
      </a>

      <!-- Desktop links -->
      <ul class="hidden md:flex gap-10 list-none">
        <li v-for="item in navItems" :key="item.id">
          <a :href="`#${item.id}`" @click.prevent="scrollTo(item.id)"
            class="font-main text-[11px] font-normal tracking-[0.18em] uppercase transition-colors duration-300 no-underline"
            :class="isScrolled ? 'text-ink-mid hover:text-sage-dark' : 'text-ink-mid hover:text-sage-dark'">
            {{ item.label }}
          </a>
        </li>
      </ul>

      <!-- Burger -->
      <button class="md:hidden flex flex-col gap-[5px] p-1 bg-transparent border-none cursor-pointer"
        @click="menuOpen = !menuOpen" :aria-expanded="menuOpen" aria-label="Menu">
        <span v-for="i in 3" :key="i"
          class="block w-6 h-[1.5px] transition-all duration-300 origin-center"
          :class="[
            'bg-ink',
            i===1 && menuOpen ? 'translate-y-[6.5px] rotate-45' : '',
            i===2 && menuOpen ? 'opacity-0' : '',
            i===3 && menuOpen ? '-translate-y-[6.5px] -rotate-45' : '',
          ]"></span>
      </button>
    </div>

    <Transition name="slide-down">
      <div v-if="menuOpen" class="md:hidden bg-cream/98 backdrop-blur-md border-t border-sage-light/40 py-4">
        <ul class="list-none flex flex-col items-center">
          <li v-for="item in navItems" :key="item.id">
            <a :href="`#${item.id}`" @click.prevent="mobileNav(item.id)"
              class="block px-8 py-3 font-main text-[11px] font-normal tracking-[0.18em] uppercase text-ink-mid hover:text-sage-dark transition-colors no-underline">
              {{ item.label }}
            </a>
          </li>
        </ul>
      </div>
    </Transition>
  </nav>
</template>

<script setup>
const isScrolled = ref(false)
const menuOpen = ref(false)
const navItems = [
  { id: 'home',      label: 'Strona główna' },
  { id: 'countdown', label: 'Odliczanie' },
  { id: 'schedule',  label: 'Harmonogram' },
  { id: 'venue',     label: 'Miejsce' },
  { id: 'photos',    label: 'Zdjęcia' },
]
function scrollTo(id) { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }) }
function mobileNav(id) { menuOpen.value = false; setTimeout(() => scrollTo(id), 300) }
onMounted(() => {
  window.addEventListener('scroll', () => { isScrolled.value = window.scrollY > 40 })
})
</script>

<style scoped>
.slide-down-enter-active, .slide-down-leave-active { transition: all 0.3s ease; overflow: hidden; }
.slide-down-enter-from, .slide-down-leave-to { max-height: 0; opacity: 0; }
.slide-down-enter-to, .slide-down-leave-from  { max-height: 400px; opacity: 1; }
</style>