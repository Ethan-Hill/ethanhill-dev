<template>
  <Hero />
  <section
    class="min-h-screen scroll-m-12 md:scroll-m-0 grid items-center"
    id="about-me"
  >
    <div class="container mx-auto h-full">
      <div class="flex gap-x-20 items-center h-full">
        <div class="flex-1">
          <h2 class="text-white text-5xl font-bold mb-10">About Me</h2>

          <p class="text-textLight text-xl">
            As a Product UI/UX designer with 5 years of experience, I specialize
            in creating user-centered designs that are both visually appealing
            and easy to use. I have a proven track record of success in
            designing for a variety of industries, including international
            banks, digital crypto wallet apps, payment gateway systems for DAOs,
            and investment platforms.
          </p>
          <br />
          <p class="text-textLight text-xl">
            My expertise includes user research, wireframing, prototyping, and
            visual design. I am proficient in using design tools such as Sketch,
            Adobe XD, and Figma, and I have a strong understanding of web and
            mobile design best practices.
          </p>
        </div>
        <div class="flex-1 hidden lg:block">
          <img class="rounded-xl" src="/ethan.jpg" alt="Ethan Hill" />
        </div>
      </div>
    </div>
  </section>

  <!--  -->

  <section
    class="min-h-screen scroll-m-12 md:scroll-m-0 grid items-center bg-darkBg"
    id="recent-work"
  >
    <div class="container mx-auto h-full py-40">
      <h2 class="text-white text-5xl font-bold mb-10 text-center">About Me</h2>

      <div class="flex flex-wrap gap-12">
        <div class="flex-1 bg-primaryBg p-8 rounded-sm">
          <div></div>

          <div>
            <h3 class="text-3xl text-white font-bold">Test title</h3>
          </div>
        </div>

        <div class="flex-1 bg-primaryBg p-8 rounded-sm">
          <div></div>

          <div>
            <h3 class="text-3xl text-white font-bold">Test title</h3>
          </div>
        </div>

        <div class="flex-1 bg-primaryBg p-8 rounded-sm">
          <div></div>

          <div>
            <h3 class="text-3xl text-white font-bold">Test title</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
