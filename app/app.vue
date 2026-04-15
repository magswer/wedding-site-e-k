<template>
  <div id="app">
    <NavBar />
    <main>
      <HeroSection id="home" />
      <CountdownSection id="countdown" />
      <ScheduleSection id="schedule" />
      <MapSection id="venue" />
      <PhotosSection id="photos" />
      <FooterSection />
    </main>
  </div>
</template>

<script setup>
useHead({
  title: 'Ewelina & Krystian',
  meta: [
    { name: 'description', content: 'Zaproszenie na ślub Eweliny i Krystiana – 7 sierpnia 2026, Stare Polaszki' },
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Great+Vibes&display=swap'
    },
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Ccircle cx='16' cy='20' r='9' fill='none' stroke='%23C4724A' stroke-width='2.5'/%3E%3Cpolygon points='10,11 13,5 16,8 19,5 22,11' fill='%23E8947A'/%3E%3Ccircle cx='16' cy='7' r='3' fill='%23F5D5C0' stroke='%23C4724A' stroke-width='1'/%3E%3C/svg%3E"
    }
  ]
})
</script>

<style>
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --salmon:        #E8947A;
  --salmon-light:  #F2B9A8;
  --salmon-pale:   #FBE9E3;
  --salmon-dark:   #C4724A;
  --sage:          #9BA888;
  --sage-light:    #C8D4BE;
  --sage-pale:     #EFF3EC;
  --sage-dark:     #6B7D5A;
  --sage-deep:     #4A5840;
  --cream:         #FAF7F3;
  --cream-dark:    #F2EBE3;
  --text-dark:     #3C2A1E;
  --text-mid:      #6B5040;
  --text-light:    #A08878;
  --font-main:     'Cormorant Garamond', Georgia, serif;
  --font-script:   'Great Vibes', cursive;
  --nav-height:    72px;

  /* Stripe colours */
  --stripe-salmon: #E8947A;
  --stripe-sage:   #B8C8AE;
}

html { scroll-behavior: smooth; }

body {
  font-family: var(--font-main);
  font-weight: 400;
  color: var(--text-dark);
  background: var(--cream);
  -webkit-font-smoothing: antialiased;
}

/* Stripe background utility used by all sections */
.stripe-bg {
  position: relative;
}

/* The invitation-style card: full cream, arch top */
.invite-card {
  background: var(--cream);
  padding: 3rem 2.5rem 2.5rem;
  position: relative;
  z-index: 2;
  overflow: hidden;
  height: 5rem;
  width: 10rem;
  border-top-left-radius: 10rem;
  border-top-right-radius: 10rem;
}

/* .invite-card::before {
  content: "";
  position: absolute;
  top: -120px; 
  left: 50%;
  transform: translateX(-50%);
  width: 140%;
  height: 240px;
  background: var(--cream);
  border-radius: 50%;
  z-index: -1;
} */
section { scroll-margin-top: var(--nav-height); }
</style>