<template>
  <div class="hero-slider w-full mb-[48px]">
    <div class="relative max-w-[1600px] mx-auto px-[25px]">
      <img class="absolute top h-max left-[50%] translate-x-[-50%] w-[calc(100%-50px)]" src="@/assets/imgs/divider.svg" alt="" />
      <div class="py-[48px] flex flex-col items-center gap-[24px]">
        <div class="w-full flex-col flex items-cetner justify-center gap-[24px]">
          <div class="flex flex-col gap-[8px] items-center">
            <h4 class="xl:text-xl 2xl:text-2xl font-bold xl:leading-[28px] 2xl:leading-[32px] tracking-[-0.4px]">
              <span class="text-orange">{{ $t('download') }}</span> {{ $t('our_app_and_get_benefits') }}
            </h4>
            <p class="text-sm font-normal leading-[24px] tracking-[0.1px] max-w-[535px]">
              {{ $t('cta_text') }}
            </p>
          </div>
          <div class="w-full max-w-[1296px] flex flex-col mx-auto lg:grid lg:grid-cols-3 gap-[30px]">
            <div class="mx-auto flex flex-col items-center max-w-[343px] gap-[48px]">
              <img class="w-full h-[400px]" src="@/assets/imgs/illustration.svg" alt="" />

              <div class="flex flex-col items-center gap-[16px]">
                <h6 class="text-black font-bold xl:text-lg 2xl:text-xl xl:leading-[26px] 2xl:leading-[28px] tracking-[-0.4px]">
                  {{ $t('map_navigation') }}
                </h6>
                <p class="text-grayDark font-normal xl:text-sm 2xl:text-base leading-[24px] tracking-[0.1px] text-center">
                  {{ $t('map_navigation_text') }}
                </p>
              </div>
            </div>
            <div class="mx-auto flex flex-col items-center max-w-[343px] gap-[48px]">
              <img class="w-full h-[400px]" src="@/assets/imgs/illustration2.svg" alt="" />

              <div class="flex flex-col items-center gap-[16px]">
                <h6 class="text-black font-bold xl:text-lg 2xl:text-xl xl:leading-[26px] 2xl:leading-[28px] tracking-[-0.4px]">
                 {{$t('earn_points')}}
                </h6>
                <p class="text-grayDark font-normal xl:text-sm 2xl:text-base leading-[24px] tracking-[0.1px] text-center">
                  {{$t('earn_points_text')}}
                </p>
              </div>
            </div>
            <div class="mx-auto flex flex-col items-center max-w-[343px] gap-[48px]">
              <img class="h-full h-[400px]" src="@/assets/imgs/illustration3.svg" alt="" />

              <div class="flex flex-col items-center gap-[16px]">
                <h6 class="text-black font-bold xl:text-lg 2xl:text-xl xl:leading-[26px] 2xl:leading-[28px] tracking-[-0.4px]">
                  {{$t('quick_pay')}}
                </h6>
                <p class="text-grayDark font-normal xl:text-sm 2xl:text-base leading-[24px] tracking-[0.1px] text-center">
                  {{ $t('quick_pay_text') }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img class="absolute bot-0 h-max left-[50%] translate-x-[-50%] w-[calc(100%-50px)]" src="@/assets/imgs/divider.svg" alt="" />
    </div>
  </div>
</template>

<script></script>