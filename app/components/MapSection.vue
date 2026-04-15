<template>
  <section id="venue" class="relative overflow-hidden" style="padding: 5rem 1.5rem 6rem;">
    <!-- Stripe background -->
    <div class="absolute inset-0 pointer-events-none" aria-hidden="true">
      <div class="absolute left-0 right-0 top-0" style="height: 67%;">
        <div class="w-full h-full" style="background-image: repeating-linear-gradient(90deg, #F0B5A8 0px, #F0B5A8 16px, #FAF7F3 16px, #FAF7F3 32px);"></div>
      </div>
      <div class="absolute left-0 right-0 bottom-0" style="height: 33%;">
        <div class="w-full h-full" style="background-image: repeating-linear-gradient(90deg, #B8C8AE 0px, #B8C8AE 16px, #FAF7F3 16px, #FAF7F3 32px);"></div>
      </div>
    </div>

    <div class="relative z-10 flex justify-center">
      <!--
        Arch card — border-radius uses 50% horizontal (always spans full card width)
        and a fixed 240 px vertical radius (arch height stays consistent).
        Result: a true arch on any screen width.
      -->
      <div
        class="bg-cream w-full overflow-hidden"
        style="
          max-width: 720px;
          border-radius: 360px 360px 2rem 2rem;
          box-shadow: 0 4px 40px rgba(60,42,30,0.08);
        "
      >
        <!-- Bow + heading (visible inside the arch curve) -->
        <div class="text-center px-8 pt-14 pb-8">
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
          <p class="font-script text-sage-dark mb-1" style="font-size: 1.4rem;">Miejsce uroczystości</p>
          <h2 class="font-main font-light text-ink" style="font-size: clamp(2rem, 5vw, 3rem); font-weight: 300;">
            Stare Polaszki
          </h2>
        </div>

        <!-- Grid: details + map -->
        <div class="grid md:grid-cols-2">

          <!-- Info side -->
          <div class="flex flex-col justify-center px-8 pb-10 md:px-12 md:pb-12">
            <div class="space-y-5 mb-8">
              <div v-for="detail in details" :key="detail.label" class="flex items-center gap-4">
                <div
                  class="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                  style="background: #F2B9A8; color: #A05538;"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" v-html="detail.icon"></svg>
                </div>
                <div>
                  <div class="font-main text-[10px] font-normal tracking-[0.14em] uppercase text-ink-light mb-0.5">{{ detail.label }}</div>
                  <div class="font-main text-ink" style="font-size: 1rem; font-weight: 400;">{{ detail.value }}</div>
                </div>
              </div>
            </div>

            <p class="font-main font-light text-sm text-ink-mid mb-8 max-w-sm leading-relaxed">
              Zapraszamy do urokliwego Stare Polaszki 13 — pięknego miejsca otoczonego naturą, stworzonego na wyjątkowe uroczystości.
            </p>

            <a
              href="https://www.google.com/maps/place/Stare+Polaszki+13/@54.0308062,18.1825155,17z"
              target="_blank"
              rel="noopener"
              class="inline-flex items-center gap-2 font-main text-[11px] font-normal tracking-wide border-b pb-0.5 w-fit transition-colors duration-200"
              style="color: #6B7D5A; border-color: #C8D4BE;"
            >
              Otwórz w Google Maps
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M7 17L17 7M7 7h10v10"/>
              </svg>
            </a>
          </div>

          <!-- Map side -->
          <div class="relative min-h-[380px]">
            <iframe
              title="Mapa Stare Polaszki"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2370.5!2d18.1825155!3d54.0308062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47027fec34c86c9f%3A0x669cbf0b79f3e072!2sStare%20Polaszki%2013%2C%2083-433%20Stare%20Polaszki%2C%20Poland!5e0!3m2!1sen!2spl!4v1700000000000!5m2!1sen!2spl"
              class="absolute inset-0 w-full h-full border-0"
              style="filter: sepia(20%) saturate(75%) hue-rotate(10deg);"
              allowfullscreen
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const details = [
  { label: 'Adres',             value: 'Stare Polaszki 13, 83-433',  icon: '<path d="M12 21C12 21 5 14.5 5 9a7 7 0 0 1 14 0c0 5.5-7 12-7 12Z"/><circle cx="12" cy="9" r="2.5"/>' },
  { label: 'Data',              value: '7 Sierpnia 2026, piątek',    icon: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>' },
  { label: 'Godzina ceremonii', value: '17:00 CEST',                 icon: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>' },
]
</script>
