<template>
  <div class="block lg:hidden">
    <Swiper
      :slides-per-view="1"
      :modules="[SwiperNavigation]"
      :navigation="true"
    >
      <SwiperSlide>
        <div class="flex flex-col progress-item relative">
          <h3 class="text-2xl font-bold mb-6">High School</h3>

          <div>
            <h4 class="text-textLight mb-1">
              Location: Whitley Bay High School
            </h4>
            <h4 class="text-textLight mb-5">Duration: 3 years</h4>
            <p>
              Here I had studied Design and Technology with systems where I had
              studied the creation and programming circuit boards and creating a
              speaker with 3.5mm audio jack and working lights all synced.
            </p>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div class="flex flex-col progress-item relative">
          <h3 class="text-2xl font-bold mb-6">College</h3>
          <div>
            <h4 class="text-textLight mb-1">Location: Gateshead College</h4>
            <h4 class="text-textLight mb-5">Duration: 3 years</h4>
            <p>
              Here I originally looked into studying Cyber Secuirty but at the
              last minute I changed to Software Engineering and Development.
            </p>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div class="flex flex-col progress-item relative">
          <h3 class="text-2xl font-bold mb-6">Work</h3>

          <div>
            <h4 class="text-textLight mb-1">
              Location: Whitley Bay High School
            </h4>
            <h4 class="text-textLight mb-5">Duration: 3 years</h4>
            <p>
              Here I had studied Design and Technology with systems where I had
              studied the creation and programming circuit boards and creating a
              speaker with 3.5mm audio jack and working lights all synced.
            </p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>
