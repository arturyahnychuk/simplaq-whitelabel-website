<template>
  <footer class="footer w-full pb-[24px] bg-black">
    <div class="relative max-w-[1600px] mx-auto px-[25px]">
      <img class="absolute top h-max left-[50%] translate-x-[-50%] w-[calc(100%-50px)]" src="@/assets/imgs/divider.svg"
        alt="" />

      <div class="w-full flex items-center justify-between pb-[24px] pt-[56px] border-b-[1px] border-black-500">
        <a href="#" class="brand flex items-center">
          <img class="w-[112px]" src="@/assets/imgs/Logo-white.svg" alt="logo" />
        </a>

        <div class="footer-actions flex items-center gap-[8px]">
          <a href="#"
            class="ms:min-w-[210px] flex items-center gap-[16px] py-[11px] min-w-[56px] min-h-[56px] justify-center sm:px-[24px] border-2 border-orange rounded-full">
            <Icon icon="mdi:apple" class="text-xl text-white" />
            <div class="flex-col hidden sm:flex">
              <p class="text-xs leading-[20px] tracking-[-0.2px] text-grayDark">{{ $t('download_on_the') }}</p>
              <p class="text-base text-white leading-[22px] tracking-[-0.4px]">{{ $t('app_store') }}</p>
            </div>
          </a>
          <a href="#"
            class="ms:min-w-[210px] flex items-center gap-[16px] py-[11px] min-w-[56px] min-h-[56px] justify-center sm:px-[24px] border-2 border-orange rounded-full">
            <Icon icon="mdi:google-play" class="text-xl text-white" />

            <div class="flex-col flex flex-col hidden sm:flex">
              <p class="text-xs leading-[20px] tracking-[-0.2px] text-grayDark">{{ $t('download_on_the') }}</p>
              <p class="text-base text-white leading-[22px] tracking-[-0.4px]">{{ $t('google_play') }}</p>
            </div>
          </a>
        </div>
      </div>

      <div class="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-[auto,auto,auto,415px] gap-[30px] my-[56px]">
        <div class="footer-list flex flex-col gap-[32px]">
          <h6 class="footer-list-title text-sm font-bold leading-[20px] text-white">{{ $t('for_visitors') }}</h6>
          <ul class="footer-ul flex flex-col gap-[16px]">
            <li class="footer-item">
              <a class="footer-link text-sm font-semibold text-grayDark hover:text-white transition-all hover:opacity-60"
                href="#">{{ $t('mail_map') }}</a>
            </li>
            <li class="footer-item">
              <a class="footer-link text-sm font-semibold text-grayDark hover:text-white transition-all hover:opacity-60"
                href="#">{{ $t('shop') }}</a>
            </li>
            <li class="footer-item">
              <a class="footer-link text-sm font-semibold text-grayDark hover:text-white transition-all hover:opacity-60"
                href="#">{{ $t('dine') }}</a>
            </li>
            <li class="footer-item">
              <a class="footer-link text-sm font-semibold text-grayDark hover:text-white transition-all hover:opacity-60"
                href="#">{{ $t('entertain') }}</a>
            </li>
            <li class="footer-item">
              <a class="footer-link text-sm font-semibold text-grayDark hover:text-white transition-all hover:opacity-60"
                href="#">{{ $t('amenities') }}</a>
            </li>
            <li class="footer-item">
              <a class="footer-link text-sm font-semibold text-grayDark hover:text-white transition-all hover:opacity-60"
                href="#">{{ $t('loyalty') }}</a>
            </li>
          </ul>
        </div>

        <div class="flex flex-col gap-[48px]">
          <div class="footer-list flex flex-col gap-[32px]">
            <h6 class="footer-list-title text-sm font-bold leading-[20px] text-white">{{ $t('discover') }}</h6>
            <ul class="footer-ul flex flex-col gap-[16px]">
              <li class="footer-item">
                <a class="footer-link flex gap-[12px] text-sm font-semibold text-grayDark hover:text-white transition-all hover:opacity-60"
                  href="#">{{ $t('sales') }}
                  <div
                    class="bg-orange text-white rounded-full px-[12px] py-[2px] font-semibold text-xs tracking-[-0.2px]">
                    {{ $t('hot') }}</div>
                </a>
              </li>
              <li class="footer-item">
                <a class="footer-link text-sm font-semibold text-grayDark hover:text-white transition-all hover:opacity-60"
                  href="#">{{ $t('news') }}</a>
              </li>
              <li class="footer-item">
                <a class="footer-link text-sm font-semibold text-grayDark hover:text-white transition-all hover:opacity-60"
                  href="#">{{ $t('events') }}</a>
              </li>
            </ul>
          </div>

          <div class="footer-list flex flex-col gap-[32px]">
            <h6 class="footer-list-title text-sm font-bold leading-[20px] text-white">{{ $t('about_us') }}</h6>
            <ul class="footer-ul flex flex-col gap-[16px]">
              <li class="footer-item">
                <a class="footer-link text-sm font-semibold text-grayDark hover:text-white transition-all hover:opacity-60"
                  href="#">{{ $t('about_mall') }}</a>
              </li>
              <li class="footer-item">
                <a class="footer-link text-sm font-semibold text-grayDark hover:text-white transition-all hover:opacity-60"
                  href="#">{{ $t('careers') }}</a>
              </li>
              <li class="footer-item">
                <a class="footer-link text-sm font-semibold text-grayDark hover:text-white transition-all hover:opacity-60"
                  href="#">{{ $t('media_center') }}</a>
              </li>
            </ul>
          </div>
        </div>

        <div class="footer-list flex flex-col gap-[32px] sm:col-auto col-[1/3]">
          <h6 class="footer-list-title text-sm font-bold leading-[20px] text-white">{{ $t('useful_links') }}</h6>
          <ul class="footer-ul flex flex-col gap-[16px]">
            <li class="footer-item">
              <a class="footer-link text-sm font-semibold text-grayDark hover:text-white transition-all hover:opacity-60"
                href="#">{{ $t('faq') }}</a>
            </li>
            <li class="footer-item">
              <a class="footer-link text-sm font-semibold text-grayDark hover:text-white transition-all hover:opacity-60"
                href="#">{{ $t('contact_support') }}</a>
            </li>
            <li class="footer-item">
              <a class="footer-link text-sm font-semibold text-grayDark hover:text-white transition-all hover:opacity-60"
                href="#">{{ $t('entertain') }}</a>
            </li>
          </ul>
          <a href="#" class="flex lg:hidden gap-[8px] items-center">
            <Icon icon="jam:messages-alt-f" class="text-xl text-white" />

            <p class="text-sm font-bold text-white leading-[20px]">{{ $t('customer') }} <span
                class="text-orange">{{ $t('support') }}</span> {{ $t('and_help_24/7') }}</p>
          </a>
        </div>

        <div
          class="flex-col sm:flex-col md:flex-row col-[1/3] sm:col-[1/4] lg:md:col-auto flex justify-between lg:flex-col gap-[48px]">
          <div class="flex flex-col items-center md:items-start gap-[16px]">
            <p class="text-sm font-bold text-white leading-[20px]">{{ $t('subscribe_text') }}</p>

            <div class="w-full relative bg-black-500 h-[56px] grid grid-cols-[auto,148px] rounded-[16px]">
              <div class="flex items-center gap-[12px] px-[20px]">
                <Icon icon="mdi-light:email" class="text-xl text-white" />

                <input type="text" class="w-full h-full bg-transparent outline-none text-graylight" placeholder="Email" />
              </div>
              <button type="submit"
                class="bg-orange w-full h-[56px] rounded-[20px] text-white font-semibold text-sm leading-[20px] tracking-[-0.2px]">
                Subscribe
              </button>
            </div>
          </div>

          <div class="flex flex-col gap-[16px]">
            <p class="text-sm font-bold text-white leading-[20px]">{{ $t('follow_us') }}</p>

            <div class="flex items-center gap-[8px]">
              <a href="#" class="relative bg-black-500 h-[48px] w-[48px] flex items-center justify-center rounded-[12px]">
                <Icon icon="ic:baseline-facebook" class="text-lg text-white" />
              </a>
              <a href="#" class="relative bg-black-500 h-[48px] w-[48px] flex items-center justify-center rounded-[12px]">
                <Icon icon="ri:youtube-fill" class="text-lg text-white" />
              </a>
              <a href="#" class="relative bg-black-500 h-[48px] w-[48px] flex items-center justify-center rounded-[12px]">
                <Icon icon="ri:instagram-fill" class="text-lg text-white" />
              </a>
              <a href="#" class="relative bg-black-500 h-[48px] w-[48px] flex items-center justify-center rounded-[12px]">
                <Icon icon="bi:twitter" class="text-lg text-white" />
              </a>
            </div>
          </div>

          <a href="#" class="hidden lg:flex gap-[8px] items-center">
            <Icon icon="jam:messages-alt-f" class="text-xl text-white" />

            <p class="text-sm font-bold text-white leading-[20px]">{{ $t('customer') }} <span
                class="text-orange">{{ $t('support') }}</span> {{ $t('and_help_24/7') }}</p>
          </a>
        </div>
      </div>

      <div
        class="w-full sm:flex-row flex-col sm:gap-[20px] gap-[10px] pt-[24px] border-t-[1px] border-black-500 flex items-center justify-between">
        <p class="text-sm font-medium leading-[20px] tracking-[-0.2px] text-white">
          {{ $t('simpla') }} | <span class="text-grayDark">{{ $t('all_rights_reserved') }}</span>
        </p>
        <div class="flex items-center gap-[32px]">
          <a href="#"
            class="text-sm font-semibold leading-[20px] tracking-[-0.2px] text-white">{{ $t('privacy_terms') }}</a>
          <a href="#"
            class="text-sm font-semibold leading-[20px] tracking-[-0.2px] text-white">{{ $t('terms_service') }}</a>
        </div>
      </div>
    </div>
  </footer>
</template>


<script lang="ts">
export default {

}
</script>