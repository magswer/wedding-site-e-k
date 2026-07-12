<template>
  <section
    id="home"
    class="relative flex items-center justify-center overflow-hidden"
    style="min-height: 100svh;"
  >
    <!-- ── STRIPE BACKGROUND ── -->
    <!-- Top 2/3 salmon stripes -->
    <div class="absolute inset-0 pointer-events-none" aria-hidden="true">
      <div class="absolute left-0 right-0 top-0" style="height: 67%;">
        <div class="w-full h-full" style="background-image: repeating-linear-gradient(90deg, #F0B5A8 0px, #F0B5A8 16px, #FAF7F3 16px, #FAF7F3 32px);"></div>
      </div>
      <!-- Bottom 1/3 sage stripes -->
      <div class="absolute left-0 right-0 bottom-0" style="height: 33%;">
        <div class="w-full h-full" style="background-image: repeating-linear-gradient(90deg, #B8C8AE 0px, #B8C8AE 16px, #FAF7F3 16px, #FAF7F3 32px);"></div>
      </div>
    </div>

    <!-- ── ARCH CARD ── -->
    <!-- The card is positioned centred, with arch top like the invitation -->
    <div
      class="relative z-10 w-full flex items-center justify-center px-6 pb-16"
      style="min-height: 100svh; padding-top: calc(var(--nav-height) + 1rem);"
    >
      <div
        class="relative bg-cream text-center w-full"
        style="
          max-width: 720px;
          border-radius: 360px 360px 1.5rem 1.5rem;
          padding: 6rem 3rem 3rem;
          box-shadow: 0 4px 40px rgba(60,42,30,0.08);
        "
      >
        <!-- Bow at top of card (centred, like invitation) -->
        <div class="flex justify-center mb-5" aria-hidden="true">
          <svg width="58" height="46" viewBox="0 0 64 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- Left wing — closed teardrop loop pointing inward -->
            <path d="M30 25 C27 19 18 10 10 13 C4 16 7 25 14 25 C20 25 27 24 30 25Z"
              fill="none" stroke="#C8887A" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
            <!-- Right wing — mirror -->
            <path d="M34 25 C37 19 46 10 54 13 C60 16 57 25 50 25 C44 25 37 24 34 25Z"
              fill="none" stroke="#C8887A" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
            <!-- Centre knot — small oval -->
            <ellipse cx="32" cy="25" rx="2.5" ry="2" fill="none" stroke="#C8887A" stroke-width="1.3"/>
            <!-- Left tail -->
            <path d="M30 27 Q27 34 25 41" fill="none" stroke="#C8887A" stroke-width="1.3" stroke-linecap="round"/>
            <!-- Right tail -->
            <path d="M34 27 Q37 34 39 41" fill="none" stroke="#C8887A" stroke-width="1.3" stroke-linecap="round"/>
          </svg>
        </div>
        <img
          :src="heroPhoto"
          alt="Ewelina i Krystian"
          class="mx-auto mb-8"
          style="
            width: 100%;
            max-width: 500px;
            aspect-ratio: 4 / 5;
            object-fit: cover;
            border-radius: 250px 250px 1rem 1rem;
          "
        />
        <!-- Names in Nunito — matching the invitation's rounded serif look -->
        <h1
          class="font-main text-ink leading-tight mb-0"
          style="font-size: clamp(3rem, 10vw, 5.5rem); font-weight: 300; letter-spacing: -0.01em;"
        >
          Ewelina
        </h1>
        <div
          class="font-script text-salmon-dark"
          style="font-size: clamp(1.5rem, 4vw, 2.2rem);"
          aria-hidden="true"
        >&amp;</div>
        <h1
          class="font-main text-ink leading-tight mb-6"
          style="font-size: clamp(3rem, 10vw, 5.5rem); font-weight: 300; letter-spacing: -0.01em;"
        >
          Krystian
        </h1>
        <!-- <div class="mx-auto mb-6" style="width: 120px; height: 1px; background: #C8D4BE;"></div> -->
        <!-- Quote in script
        <p class="font-script text-ink-mid mb-6" style="font-size: clamp(0.9rem, 2vw, 1.1rem); line-height: 1.5;">
          „Kocham cię, uciekają myśli złe,<br>zamiast róż, magię słów"
        </p> -->

        <!-- Date & place — decorative text, not a button -->
        <div class="flex items-center justify-center gap-3 my-5">
          <div style="width: 36px; height: 1px; background: #C8D4BE;"></div>
          <span class="font-main text-[11px] font-normal tracking-[0.2em] uppercase text-ink-light">
            7 Sierpnia 2026 · Stare Polaszki
          </span>
          <div style="width: 36px; height: 1px; background: #C8D4BE;"></div>
        </div>

        <!-- Scroll cue -->
        <div class="mt-6 flex justify-center" aria-hidden="true">
          <a href="#countdown" @click.prevent="scrollTo('countdown')"
            class="flex flex-col items-center gap-1 no-underline transition-opacity hover:opacity-100"
            style="opacity: 0.72;">
            <div class="scroll-line" style="width: 1.5px; height: 40px; background: linear-gradient(to bottom, transparent, #C4724A);"></div>
            <svg class="bounce-arrow" width="16" height="10" viewBox="0 0 16 10" fill="none">
              <path d="M1 1l7 7 7-7" stroke="#C4724A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import heroPhoto from '/source/assets/couple.jpg';
function scrollTo(id) { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }) }
</script>

<style scoped>
.bounce-arrow {
  animation: bounceDown 1.6s ease-in-out infinite;
}
@keyframes bounceDown {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(6px); }
}
</style>