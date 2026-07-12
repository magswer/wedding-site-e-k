<template>
  <section id="schedule" class="relative overflow-hidden" style="padding: 5rem 1.5rem 6rem;">
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
      <!-- Arch card -->
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
          <p class="font-script text-sage-dark mb-2" style="font-size: 1.4rem;">Program uroczystości</p>
          <h2 class="font-main font-light text-ink" style="font-size: clamp(2rem, 5vw, 3rem); font-weight: 300;">Plan dnia</h2>
        </div>

        <!-- ── DESKTOP TIMELINE (md+) ── -->
        <div class="hidden md:block relative">
          <!-- Centre vertical line -->
          <div
            class="absolute top-0 bottom-0"
            style="left: 50%; transform: translateX(-50%); width: 1px; background: linear-gradient(to bottom, transparent, #C8D4BE 5%, #C8D4BE 95%, transparent);"
            aria-hidden="true"
          ></div>

          <div v-for="(event, i) in events" :key="`d-${i}`" class="relative mb-12 flex items-start" style="min-height: 80px;">
            <template v-if="i % 2 === 0">
              <div class="w-1/2 pr-10 text-right flex flex-col items-end justify-start pt-1">
                <span class="font-script text-salmon-dark" style="font-size: 1.4rem;">{{ event.time }}</span>
              </div>
              <div class="absolute flex items-start justify-center" style="left: 50%; top: 6px; transform: translateX(-50%);">
                <div class="rounded-full border-2 flex-shrink-0"
                  :class="event.highlight ? 'w-5 h-5 border-salmon-dark bg-salmon' : 'w-3.5 h-3.5 border-sage bg-cream'"></div>
              </div>
              <div class="w-1/2 pl-10">
                <h3 class="font-main mb-1"
                  :class="event.highlight ? 'text-salmon-dark' : 'text-ink'"
                  style="font-size: 1.05rem; font-weight: 400;">{{ event.title }}</h3>
                <p class="font-main font-light text-sm text-ink-mid leading-relaxed">{{ event.desc }}</p>
              </div>
            </template>
            <template v-else>
              <div class="w-1/2 pr-10 text-right">
                <h3 class="font-main mb-1"
                  :class="event.highlight ? 'text-salmon-dark' : 'text-ink'"
                  style="font-size: 1.05rem; font-weight: 400;">{{ event.title }}</h3>
                <p class="font-main font-light text-sm text-ink-mid leading-relaxed">{{ event.desc }}</p>
              </div>
              <div class="absolute flex items-start justify-center" style="left: 50%; top: 6px; transform: translateX(-50%);">
                <div class="rounded-full border-2 flex-shrink-0"
                  :class="event.highlight ? 'w-5 h-5 border-salmon-dark bg-salmon' : 'w-3.5 h-3.5 border-sage bg-cream'"></div>
              </div>
              <div class="w-1/2 pl-10 flex flex-col items-start justify-start pt-1">
                <span class="font-script text-salmon-dark" style="font-size: 1.4rem;">{{ event.time }}</span>
              </div>
            </template>
          </div>
        </div>

        <!-- ── MOBILE TIMELINE (<md) ── -->
        <div class="md:hidden relative">
          <div
            class="absolute top-0 bottom-0"
            style="left: 20px; width: 1px; background: linear-gradient(to bottom, transparent, #C8D4BE 5%, #C8D4BE 95%, transparent);"
            aria-hidden="true"
          ></div>
          <div v-for="(event, i) in events" :key="`m-${i}`" class="relative pl-14 mb-10">
            <div class="absolute" style="left: 14px; top: 4px; transform: translateX(-50%);">
              <div class="rounded-full border-2"
                :class="event.highlight ? 'w-5 h-5 border-salmon-dark bg-salmon -translate-x-px' : 'w-3.5 h-3.5 border-sage bg-cream'"></div>
            </div>
            <span class="block font-script text-salmon-dark mb-1" style="font-size: 1.2rem;">{{ event.time }}</span>
            <h3 class="font-main mb-1"
              :class="event.highlight ? 'text-salmon-dark' : 'text-ink'"
              style="font-size: 1rem; font-weight: 400;">{{ event.title }}</h3>
            <p class="font-main font-light text-sm text-ink-mid leading-relaxed">{{ event.desc }}</p>
        </div>
      </div>
    </div>
    </div>
  </section>
</template>

<script setup>
const events = [
  { time: '17:00', title: 'Ceremonia ślubna',  desc: 'Prosimy o przybycie kilka minut wcześniej, abyśmy mogli wspólnie rozpocząć ten ważny dla nas moment.',       highlight: true },
  { time: '17:20', title: 'Garden party',      desc: 'Prosseco, przekąski i muzyka. Rozpoczynamy świętowanie!',                                                    highlight: false },
  { time: '19:00', title: 'Obiad',             desc: '',                                                                                                           highlight: false },
  { time: '19:45', title: 'Pierwszy taniec',   desc: 'Do zobaczenia na parkiecie!',                                                                                highlight: false },
  { time: '21:30', title: 'Kolacja & tort',    desc: '',                                                                                                           highlight: false },
  { time: '23:30', title: 'Oczepiny',          desc: 'Zapraszamy do wspólnej zabawy!',                                                                             highlight: false },
  { time: '00:30', title: 'Kolacja II',        desc: '',                                                                                                           highlight: false },
  { time: '02:00', title: 'Kolacja III',       desc: 'Ostatni ciepły posiłek regeneracyjny',                                                                       highlight: false },
  { time: '', title: '',       desc: '',                                                                                                                           highlight: false },
  { time: '', title: 'W sobotę o godz. 15:00 rozpoczynamy drugi dzień wesela',                                                                                     highlight: true },



]
</script>
