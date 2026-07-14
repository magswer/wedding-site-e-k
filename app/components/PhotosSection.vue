<template>
  <section id="photos" class="relative overflow-hidden" style="padding: 5rem 1.5rem 6rem;">
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
        50% horizontal radius → arch always spans full card width.
        240 px vertical radius → consistent arch height.
      -->
      <div
        class="bg-cream w-full"
        style="
          max-width: 720px;
          border-radius: 360px 360px 2rem 2rem;
          padding: 3.5rem 2.5rem 3.5rem;
          box-shadow: 0 4px 40px rgba(60,42,30,0.08);
        "
      >
        <!-- Bow + header -->
        <div class="text-center mb-12">
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
          <p class="font-script text-sage-dark mb-2" style="font-size: 1.4rem;">Wspomnienia</p>
          <h2 class="font-main font-light text-ink" style="font-size: clamp(1.8rem, 4.5vw, 3rem); font-weight: 300;">
            Podziel się zdjęciami
          </h2>
        </div>

        <!-- Two-column: text + QR -->
        <div class="grid md:grid-cols-2 gap-12 items-start">

          <!-- Text -->
          <div>
            <p class="font-main font-light text-sm text-ink-mid leading-relaxed mb-8 max-w-md">
              Chcemy zachować Wasz punkt widzenia tego wyjątkowego dnia!
              Zeskanujcie kod QR i dodajcie swoje zdjęcia i filmy do naszej
              wspólnej galerii.
            </p>

            <ul class="space-y-4 mb-10">
              <li v-for="(step, i) in steps" :key="i" class="flex items-center gap-4">
                <span class="font-script text-salmon-dark flex-shrink-0" style="font-size: 1.35rem; min-width: 30px;">
                  {{ String(i+1).padStart(2,'0') }}
                </span>
                <span class="font-main font-light text-sm text-ink-mid">{{ step }}</span>
              </li>
            </ul>

            <a
              :href="`https://drive.google.com/drive/folders/1fYZkrUtGJAbS20mKZ8StxELKHYeWRcyI?usp=sharing`"
              target="_blank"
              rel="noopener"
              class="inline-flex items-center gap-2 font-main text-[11px] font-normal tracking-wide border-b pb-0.5 transition-colors duration-200"
              style="color: #6B7D5A; border-color: #C8D4BE;"
            >
              Otwórz galerię
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M7 17L17 7M7 7h10v10"/>
              </svg>
            </a>
          </div>

          <!-- QR card (arch top — 300 px wide → 150 px radius = true semicircle) -->
          <div class="flex justify-center">
            <div
              class="relative bg-white text-center"
              style="
                max-width: 300px;
                width: 100%;
                border-radius: 150px 150px 1.5rem 1.5rem;
                padding: 2.5rem 2rem 2rem;
                border: 1px solid #F2EBE3;
                box-shadow: 0 2px 20px rgba(60,42,30,0.06);
              "
            >
              <!-- Bow -->
              <div class="flex justify-center mb-3" aria-hidden="true">
                <svg width="44" height="34" viewBox="0 0 64 50" fill="none">
                  <path d="M30 25 C27 19 18 10 10 13 C4 16 7 25 14 25 C20 25 27 24 30 25Z"
                    fill="none" stroke="#C8887A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M34 25 C37 19 46 10 54 13 C60 16 57 25 50 25 C44 25 37 24 34 25Z"
                    fill="none" stroke="#C8887A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <ellipse cx="32" cy="25" rx="2.5" ry="2" fill="none" stroke="#C8887A" stroke-width="1.5"/>
                  <path d="M30 27 Q27 34 25 41" fill="none" stroke="#C8887A" stroke-width="1.5" stroke-linecap="round"/>
                  <path d="M34 27 Q37 34 39 41" fill="none" stroke="#C8887A" stroke-width="1.5" stroke-linecap="round"/>
                </svg>
              </div>

              <p class="font-main text-ink mb-5" style="font-size: 0.95rem; font-weight: 400;">Dodaj zdjęcia</p>

              <div class="relative inline-block mb-4">
                <img
                  :src="qrSrc"
                  alt="QR kod do galerii Pixbearer"
                  class="block rounded mx-auto"
                  width="196"
                  height="196"
                />
                <!-- Corner brackets -->
                <div class="absolute top-[-6px] left-[-6px] w-5 h-5 border-t-2 border-l-2 rounded-tl" style="border-color:#F0B5A8;"></div>
                <div class="absolute top-[-6px] right-[-6px] w-5 h-5 border-t-2 border-r-2 rounded-tr" style="border-color:#F0B5A8;"></div>
                <div class="absolute bottom-[-6px] left-[-6px] w-5 h-5 border-b-2 border-l-2 rounded-bl" style="border-color:#9BA888;"></div>
                <div class="absolute bottom-[-6px] right-[-6px] w-5 h-5 border-b-2 border-r-2 rounded-br" style="border-color:#9BA888;"></div>
              </div>

              <div class="flex items-center gap-2 my-4">
                <div class="flex-1 h-px" style="background:#F2EBE3;"></div>
                  <span class="font-main text-[9px] font-normal tracking-[0.2em] uppercase" style="color:#9C8878;">
    Zeskanuj&nbsp;mnie lub otwórz&nbsp;
    <a
      href="https://pixbearer.com/event/4e39381a-7f2c-452e-a244-35f56f660169"
      target="_blank"
      rel="noopener noreferrer"
      style="color:#9C8878; text-decoration: underline;"
    >
      link
    </a>
                  </span>
                <div class="flex-1 h-px" style="background:#F2EBE3;"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const uploadUrl = 'pixbearer.com/event/4e39381a-7f2c-452e-a244-35f56f660169'
const qrSrc = computed(() => {
  const encoded = encodeURIComponent(`https://${uploadUrl}`)
  return `https://api.qrserver.com/v1/create-qr-code/?size=196x196&data=${encoded}&color=4A5840&bgcolor=FFFFFF&margin=8&format=png&ecc=M`
})
const steps = [
  'Zeskanuj kod QR telefonem lub otwórz link',
  'Prześlij swoje zdjęcia i filmy',
  'Ciesz się wspólną galerią!',
]
</script>
