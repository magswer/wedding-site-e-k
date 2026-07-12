<template>
  <section id="countdown" class="relative overflow-hidden" style="padding: 5rem 1.5rem 6rem;">
    <!-- Stripe background -->
    <div class="absolute inset-0 pointer-events-none" aria-hidden="true">
      <div class="absolute left-0 right-0 top-0" style="height: 67%;">
        <div class="w-full h-full" style="background-image: repeating-linear-gradient(90deg, #F0B5A8 0px, #F0B5A8 16px, #FAF7F3 16px, #FAF7F3 32px);"></div>
      </div>
      <div class="absolute left-0 right-0 bottom-0" style="height: 33%;">
        <div class="w-full h-full" style="background-image: repeating-linear-gradient(90deg, #B8C8AE 0px, #B8C8AE 16px, #FAF7F3 16px, #FAF7F3 32px);"></div>
      </div>
    </div>

    <!-- Arch card — same width as hero (480 px → radius 240 px = true semicircle) -->
    <div class="relative z-10 flex justify-center">
      <div
        class="bg-cream w-full text-center"
        style="
          max-width: 720px;
          border-radius: 360px 360px 1.5rem 1.5rem;
          padding: 3.5rem 2.5rem 3rem;
          box-shadow: 0 4px 40px rgba(60,42,30,0.08);
        "
      >
        <!-- Bow -->
        <div class="flex justify-center mb-4" aria-hidden="true">
          <svg width="58" height="46" viewBox="0 0 64 50" fill="none">
            <path d="M30 25 C27 19 18 10 10 13 C4 16 7 25 14 25 C20 25 27 24 30 25Z"
              fill="none" stroke="#C8887A" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M34 25 C37 19 46 10 54 13 C60 16 57 25 50 25 C44 25 37 24 34 25Z"
              fill="none" stroke="#C8887A" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
            <ellipse cx="32" cy="25" rx="2.5" ry="2" fill="none" stroke="#C8887A" stroke-width="1.3"/>
            <path d="M30 27 Q27 34 25 41" fill="none" stroke="#C8887A" stroke-width="1.3" stroke-linecap="round"/>
            <path d="M34 27 Q37 34 39 41" fill="none" stroke="#C8887A" stroke-width="1.3" stroke-linecap="round"/>
          </svg>
        </div>

        <p class="font-script text-sage-dark mb-6" style="font-size: 1.4rem;">Do ślubu zostało</p>

        <!-- Countdown tiles -->
        <div class="flex justify-center gap-2 flex-wrap mb-6">
          <div
            v-for="unit in countdown"
            :key="unit.label"
            class="bg-white rounded-2xl flex flex-col items-center justify-center shadow-sm"
            style="min-width: 86px; padding: 1.4rem 0.75rem 1.1rem; border: 1px solid #F2EBE3;"
          >
            <span class="font-main text-[9px] font-normal tracking-[0.2em] uppercase text-ink-light">
              {{ unit.label }}:
            </span>
            <span
              class="font-main font-light leading-none mb-2 block"
              style="font-size: clamp(2.2rem, 6vw, 3.2rem); color: #C4724A; letter-spacing: -0.02em;"
            >{{ unit.value }}</span>
          </div>
        </div>

        <p class="font-main font-light text-[11px] tracking-widest uppercase text-ink-light">
          7 Sierpnia 2026 &nbsp;·&nbsp; 17:00
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
const target = new Date('2026-08-07T17:00:00+02:00')
const countdown = ref([
  { label: 'Dni',    value: '000' },
  { label: 'Godzin', value: '00'  },
  { label: 'Minut',  value: '00'  },
  { label: 'Sekund', value: '00'  },
])
function pad(n, len = 2) { return String(n).padStart(len, '0') }
function update() {
  const diff = target - new Date()
  if (diff <= 0) return
  countdown.value = [
    { label: 'Dni',    value: pad(Math.floor(diff / 86400000)) },
    { label: 'Godzin', value: pad(Math.floor((diff % 86400000) / 3600000)) },
    { label: 'Minut',  value: pad(Math.floor((diff % 3600000) / 60000)) },
    { label: 'Sekund', value: pad(Math.floor((diff % 60000) / 1000)) },
  ]
}
let timer
onMounted(() => { update(); timer = setInterval(update, 1000) })
onUnmounted(() => clearInterval(timer))
</script>
