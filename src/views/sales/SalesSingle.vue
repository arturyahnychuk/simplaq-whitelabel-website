<template>
  <HeaderComponent />
  <BreadcrumbComponent :pagesArr="pagesArr" currentPage="Nike Air Max" />

  <div class="grid grid-cols-[640px,auto] gap-[8px] max-w-[1120px] mx-auto px-[25px]">
    <SingleViewComponent>
      <template #head>
        <h6 class="font-bold text-black text-xl mb-[24px]">Nike Air Max</h6>
      </template>

      <template #hero>
        <div class="relative w-full h-[318px] bg-gray flex items-center justify-center rounded-l-[16px] overflow-hidden">
          <img class="w-full max-w-[258px] object-cover object-top" src="@/assets/imgs/airmax.png" alt="" />
        </div>

        <div class="w-full py-[16px] border-b-[1px] border-t-[1px] border-gray-light-500 flex items-center justify-between">
          <div class="flex items-center gap-[12px]">
            <div class="w-[48px] h-[48px] bg-gray rounded-full flex items-center justify-center">
              <img class="w-full max-w-[48px]" src="@/assets/imgs/zara.svg" alt="" />
            </div>
            <div class="flex flex-col gap-[6px]">
              <p class="text-sm text-dark font-bold leading-[20px]">ZARA</p>
              <div class="flex items-center gap-[4px]">
                <div class="px-[8px] py-[4px] bg-gray rounded-[8px]">
                  <p class="font-medium text-xs leading-[20px] tracking-[-0.2px] text-black">{{ $t('clothes') }}</p>
                </div>
                <div class="px-[8px] py-[4px] bg-gray rounded-[8px]">
                  <p class="font-medium text-xs leading-[20px] tracking-[-0.2px] text-black">{{ $t('fashion') }}</p>
                </div>
                <div class="px-[8px] py-[4px] bg-gray rounded-[8px]">
                  <p class="font-medium text-xs leading-[20px] tracking-[-0.2px] text-black">{{ $t('outfits') }}</p>
                </div>
                <div class="px-[8px] py-[4px] bg-gray rounded-[8px]">
                  <p class="font-medium text-xs leading-[20px] tracking-[-0.2px] text-black">{{ $t('shoes') }}</p>
                </div>
              </div>
              <div class="flex items-center gap-[4px]">
                <Icon icon="solar:routing-3-bold" class="text-lg text-pink" />

                <p class="font-semibold text-sm leading-[20px] tracking-[-0.2px] text-pink">2th floor</p>
              </div>
            </div>
          </div>
          <div class="flex flex-col gap-[6px]">
            <div class="px-[52px] py-[14px] rounded-[16px] border-[1px] border-orange">
              <p class="text-pink font-semibold text-sm leading-[20px] tracking-[-0.2px]">{{ $t('follow') }}</p>
            </div>
            <div class="flex items-center justify-end gap-[8px]">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  opacity="0.4"
                  d="M10.8139 2.59484L12.6693 6.3234C12.806 6.59354 13.0669 6.78114 13.3678 6.82282L17.5354 7.4298C17.7787 7.46398 17.9996 7.59238 18.1488 7.78831C18.2964 7.98175 18.3597 8.22687 18.3239 8.46783C18.2947 8.66793 18.2005 8.85302 18.0563 8.99476L15.0365 11.9221C14.8156 12.1264 14.7156 12.429 14.7689 12.725L15.5124 16.8404C15.5916 17.3373 15.2624 17.8059 14.7689 17.9001C14.5656 17.9326 14.3572 17.8985 14.1738 17.8051L10.4563 15.8683C10.1804 15.729 9.85454 15.729 9.57865 15.8683L5.86118 17.8051C5.40442 18.0477 4.83846 17.8826 4.58424 17.4324C4.49005 17.2531 4.45671 17.0489 4.48755 16.8496L5.23105 12.7333C5.28439 12.4382 5.18354 12.1339 4.96349 11.9296L1.94367 9.00393C1.58443 8.65709 1.57359 8.08597 1.9195 7.72662C1.927 7.71911 1.93534 7.71078 1.94367 7.70244C2.08704 7.55653 2.27541 7.46398 2.47879 7.4398L6.64635 6.832C6.94641 6.78947 7.2073 6.60355 7.34483 6.33174L9.13355 2.59484C9.29275 2.27468 9.62282 2.07541 9.98123 2.08375H10.0929C10.4038 2.12127 10.6747 2.31386 10.8139 2.59484"
                  fill="#F18C53"
                />
                <path
                  d="M9.99367 15.7644C9.83225 15.7694 9.67499 15.8128 9.53355 15.8904L5.83426 17.8228C5.38162 18.0388 4.83996 17.8712 4.58619 17.4383C4.49217 17.2615 4.45805 17.0588 4.48967 16.8603L5.22853 12.7528C5.27845 12.4542 5.17861 12.1506 4.96144 11.9405L1.94027 9.01556C1.58166 8.66444 1.575 8.08813 1.92613 7.72867C1.93112 7.72367 1.93528 7.7195 1.94027 7.71533C2.08339 7.57354 2.2681 7.48013 2.46696 7.45094L6.63802 6.83711C6.94005 6.79874 7.20215 6.61025 7.33527 6.3367L9.14831 2.55276C9.32054 2.24751 9.65087 2.0657 10.0003 2.08488C9.99367 2.33258 9.99367 15.596 9.99367 15.7644"
                  fill="#F18C53"
                />
              </svg>
              <p class="text-grayDark4 font-medium text-sm leading-[20px] tracking-[-0.2px]">4.8 (140)</p>
            </div>
          </div>
        </div>
      </template>

      <template #body>
        <Accordion2Component :title="$t('description')">
          <p class="text-xs font-normal text-grayDark leading-[20px] tracking-[0.2px]">
            Lorem ipsum dolor sit amet, aliquam ridiculus id vehicula, amet at neque tellus vestibulum, ut imperdiet congue erat tincidunt
            non nulla, repudiandae pellentesque, dictum non volutpat magnis pellentesque nulla.
          </p>
        </Accordion2Component>

        <Accordion2Component :title="$t('location')">
          <div class="w-full relative">
            <img src="@/assets/imgs/map.svg" class="w-full" alt="" />
          </div>
        </Accordion2Component>

        <Accordion2Component :title="$t('reviews')">
          <div class="w-full relative">
            <div class="w-full flex items-center justify-between">
              <div class="flex flex-col">
                <p class="font-bold text-sm leading-[20px] text-black">{{ $t('add_a_review') }}</p>
                <p class="font-medium text-xs text-grayDark4 leading-[20px] tracking-[-0.2px]">
                  {{ $t('be_the_first_to_review') }} <span class="text-black"> Zara</span>
                </p>
              </div>
              <div class="flex items-center">
                <div class="rate-star cursor-pointer">
                  <Icon icon="ph:star-fill" class="text-xl text-gray icon" />
                </div>
                <div class="rate-star cursor-pointer">
                  <Icon icon="ph:star-fill" class="text-xl text-gray icon" />
                </div>
                <div class="rate-star cursor-pointer">
                  <Icon icon="ph:star-fill" class="text-xl text-gray icon" />
                </div>
                <div class="rate-star cursor-pointer">
                  <Icon icon="ph:star-fill" class="text-xl text-gray icon" />
                </div>
                <div class="rate-star cursor-pointer">
                  <Icon icon="ph:star-fill" class="text-xl text-gray icon" />
                </div>
              </div>
            </div>

            <form class="flex flex-col gap-[16px] mt-[16px]">
              <div class="items-start gap-[12px] py-[22px] grid grid-cols-[20px,auto,20px] px-[20px] bg-gray rounded-[16px]">
                <div>
                  <Icon icon="majesticons:comment-text-line" class="text-lg text-black" />
                </div>
                <div class="flex flex-col gap-[2px]">
                  <textarea
                    type="text"
                    id="email"
                    :placeholder="$t('review')"
                    class="h-[100px] text-black font-medium resize-none bg-transparent outline-none text-sm leading-[20px]"
                  ></textarea>
                </div>
              </div>
              <button
                type="submit"
                class="max-w-max group hover:bg-pink transition-all px-[60px] py-[14px] bg-transparent border border-pink rounded-[16px]"
              >
                <p class="font-semibold text-sm leading-[20px] group-hover:text-white transition-all tracking-[-0.2px] text-pink">
                  {{ $t('submit') }}
                </p>
              </button>
            </form>

            <div class="flex w-full flex-wrap gap-[8px] mt-[41px]">
              <label class="cursor-pointer">
                <input type="radio" name="rating" checked id="" class="peer sr-only custom-peer" />
                <div
                  class="flex items-center justify-center custom-peer-checked peer-checked:bg-orange gap-[8px] bg-gray px-[16px] py-[12px] rounded-[12px]"
                >
                  <Icon icon="ph:star-fill" class="text-lg text-yellow icon" />
                  <p class="font-semibold text-xs leading-[16px] text tracking-[-0.1px] text-black peer-checked:text-white">
                    {{ $t('all') }}
                  </p>
                </div>
              </label>
              <label class="cursor-pointer">
                <input type="radio" name="rating" id="" class="peer sr-only custom-peer" />
                <div
                  class="flex items-center justify-center custom-peer-checked peer-checked:bg-orange gap-[8px] bg-gray px-[16px] py-[12px] rounded-[12px]"
                >
                  <Icon icon="ph:star-fill" class="text-lg text-yellow icon" />
                  <p class="font-semibold text-xs leading-[16px] text tracking-[-0.1px] text-black peer-checked:text-white">5</p>
                </div>
              </label>
              <label class="cursor-pointer">
                <input type="radio" name="rating" id="" class="peer sr-only custom-peer" />
                <div
                  class="flex items-center justify-center custom-peer-checked peer-checked:bg-orange gap-[8px] bg-gray px-[16px] py-[12px] rounded-[12px]"
                >
                  <Icon icon="ph:star-fill" class="text-lg text-yellow icon" />
                  <p class="font-semibold text-xs leading-[16px] text tracking-[-0.1px] text-black peer-checked:text-white">4</p>
                </div>
              </label>
              <label class="cursor-pointer">
                <input type="radio" name="rating" id="" class="peer sr-only custom-peer" />
                <div
                  class="flex items-center justify-center custom-peer-checked peer-checked:bg-orange gap-[8px] bg-gray px-[16px] py-[12px] rounded-[12px]"
                >
                  <Icon icon="ph:star-fill" class="text-lg text-yellow icon" />
                  <p class="font-semibold text-xs leading-[16px] text tracking-[-0.1px] text-black peer-checked:text-white">3</p>
                </div>
              </label>
              <label class="cursor-pointer">
                <input type="radio" name="rating" id="" class="peer sr-only custom-peer" />
                <div
                  class="flex items-center justify-center custom-peer-checked peer-checked:bg-orange gap-[8px] bg-gray px-[16px] py-[12px] rounded-[12px]"
                >
                  <Icon icon="ph:star-fill" class="text-lg text-yellow icon" />
                  <p class="font-semibold text-xs leading-[16px] text tracking-[-0.1px] text-black peer-checked:text-white">2</p>
                </div>
              </label>
              <label class="cursor-pointer">
                <input type="radio" name="rating" id="" class="peer sr-only custom-peer" />
                <div
                  class="flex items-center justify-center custom-peer-checked peer-checked:bg-orange gap-[8px] bg-gray px-[16px] py-[12px] rounded-[12px]"
                >
                  <Icon icon="ph:star-fill" class="text-lg text-yellow icon" />
                  <p class="font-semibold text-xs leading-[16px] text tracking-[-0.1px] text-black peer-checked:text-white">1</p>
                </div>
              </label>
            </div>

            <div class="w-full flex flex-col gap-[16px] mt-[20px]">
              <div class="flex w-full flex-col gap-[14px] pb-[12px] border-b border-gray">
                <div class="w-full flex items-start justify-between">
                  <div class="flex items-center gap-[12px]">
                    <div class="w-[48px] h-[48px] overflow-hidden rounded-full relative bg-gray flex items-center justify-center">
                      <Icon icon="teenyicons:user-circle-solid" class="text-lg text-black" />
                    </div>
                    <div class="flex flex-col gap-[4px]">
                      <p class="text-sm text-black font-bold leading-[20px]">Nolan Carder</p>
                      <p class="text-xs font-normal text-grayDark4 leading-[20px] tracking-[0.2px]">
                        This is the best shoes in the world and it makes me want to cry.
                      </p>
                      <div class="flex items-center">
                        <div class="rate-star">
                          <Icon icon="ph:star-fill" class="text-lg text-yellow icon" />
                        </div>
                        <div class="rate-star">
                          <Icon icon="ph:star-fill" class="text-lg text-yellow icon" />
                        </div>
                        <div class="rate-star">
                          <Icon icon="ph:star-fill" class="text-lg text-yellow icon" />
                        </div>
                        <div class="rate-star">
                          <Icon icon="ph:star-fill" class="text-lg text-yellow icon" />
                        </div>
                        <div class="rate-star">
                          <Icon icon="ph:star-fill" class="text-lg text-yellow icon" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <p class="text-grayDark4 text-xs leading-[20px] tracking-[0.2px]">{{ $t('today') }}</p>
                </div>

                <div class="flex flex-col gap-[12px] pl-[60px] mt-[16px]">
                  <div class="flex w-full items-center justify-between">
                    <h6 class="text-sm text-dark font-bold leading-[24px]">{{ $t('did_you_find_this_item_useful') }}</h6>
                    <div class="flex items-center gap-[12px]">
                      <Icon icon="iconamoon:like-fill" class="cursor-pointer text-lg text-orange" />
                      <Icon icon="iconamoon:dislike-fill" class="cursor-pointer text-lg text-graylight" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex w-full flex-col gap-[14px] pb-[12px] border-b border-gray">
                <div class="w-full flex items-start justify-between">
                  <div class="flex items-center gap-[12px]">
                    <div class="w-[48px] h-[48px] overflow-hidden rounded-full relative bg-gray flex items-center justify-center">
                      <img class="max-w-full w-full" src="@/assets/imgs/profile.svg" />
                    </div>
                    <div class="flex flex-col gap-[4px]">
                      <p class="text-sm text-black font-bold leading-[20px]">Nolan Carder</p>
                      <p class="text-xs font-normal text-grayDark4 leading-[20px] tracking-[0.2px]">
                        This is the best shoes in the world and it makes me want to cry.
                      </p>
                      <div class="flex items-center">
                        <div class="rate-star">
                          <Icon icon="ph:star-fill" class="text-lg text-yellow icon" />
                        </div>
                        <div class="rate-star">
                          <Icon icon="ph:star-fill" class="text-lg text-yellow icon" />
                        </div>
                        <div class="rate-star">
                          <Icon icon="ph:star-fill" class="text-lg text-yellow icon" />
                        </div>
                        <div class="rate-star">
                          <Icon icon="ph:star-fill" class="text-lg text-yellow icon" />
                        </div>
                        <div class="rate-star">
                          <Icon icon="ph:star-fill" class="text-lg text-yellow icon" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <p class="text-grayDark4 text-xs leading-[20px] tracking-[0.2px]">{{ $t('today') }}</p>
                </div>

                <div class="flex flex-col gap-[12px] pl-[60px] mt-[16px]">
                  <div class="flex w-full items-center justify-between">
                    <h6 class="text-sm text-dark font-bold leading-[24px]">{{ $t('did_you_find_this_item_useful') }}</h6>
                    <div class="flex items-center gap-[12px]">
                      <Icon icon="iconamoon:like-fill" class="cursor-pointer text-lg text-orange" />
                      <Icon icon="iconamoon:dislike-fill" class="cursor-pointer text-lg text-graylight" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex w-full flex-col gap-[14px] pb-[12px] border-b border-gray">
                <div class="w-full flex items-start justify-between">
                  <div class="flex items-center gap-[12px]">
                    <div class="w-[48px] h-[48px] overflow-hidden rounded-full relative bg-gray flex items-center justify-center">
                      <Icon icon="teenyicons:user-circle-solid" class="text-lg text-black" />
                    </div>
                    <div class="flex flex-col gap-[4px]">
                      <p class="text-sm text-black font-bold leading-[20px]">Nolan Carder</p>
                      <p class="text-xs font-normal text-grayDark4 leading-[20px] tracking-[0.2px]">
                        This is the best shoes in the world and it makes me want to cry.
                      </p>
                      <div class="flex items-center">
                        <div class="rate-star">
                          <Icon icon="ph:star-fill" class="text-lg text-yellow icon" />
                        </div>
                        <div class="rate-star">
                          <Icon icon="ph:star-fill" class="text-lg text-yellow icon" />
                        </div>
                        <div class="rate-star">
                          <Icon icon="ph:star-fill" class="text-lg text-yellow icon" />
                        </div>
                        <div class="rate-star">
                          <Icon icon="ph:star-fill" class="text-lg text-yellow icon" />
                        </div>
                        <div class="rate-star">
                          <Icon icon="ph:star-fill" class="text-lg text-yellow icon" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <p class="text-grayDark4 text-xs leading-[20px] tracking-[0.2px]">{{ $t('today') }}</p>
                </div>

                <div class="flex flex-col gap-[12px] pl-[60px] mt-[16px]">
                  <div class="flex w-full items-center justify-between">
                    <h6 class="text-sm text-dark font-bold leading-[24px]">{{ $t('did_you_find_this_item_useful') }}</h6>
                    <div class="flex items-center gap-[12px]">
                      <Icon icon="iconamoon:like-fill" class="cursor-pointer text-lg text-orange" />
                      <Icon icon="iconamoon:dislike-fill" class="cursor-pointer text-lg text-graylight" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex w-full flex-col gap-[14px] pb-[12px] border-b border-gray">
                <div class="w-full flex items-start justify-between">
                  <div class="flex items-center gap-[12px]">
                    <div class="w-[48px] h-[48px] overflow-hidden rounded-full relative bg-gray flex items-center justify-center">
                      <img class="max-w-full w-full" src="@/assets/imgs/profile.svg" />
                    </div>
                    <div class="flex flex-col gap-[4px]">
                      <p class="text-sm text-black font-bold leading-[20px]">Nolan Carder</p>
                      <p class="text-xs font-normal text-grayDark4 leading-[20px] tracking-[0.2px]">
                        This is the best shoes in the world and it makes me want to cry.
                      </p>
                      <div class="flex items-center">
                        <div class="rate-star">
                          <Icon icon="ph:star-fill" class="text-lg text-yellow icon" />
                        </div>
                        <div class="rate-star">
                          <Icon icon="ph:star-fill" class="text-lg text-yellow icon" />
                        </div>
                        <div class="rate-star">
                          <Icon icon="ph:star-fill" class="text-lg text-yellow icon" />
                        </div>
                        <div class="rate-star">
                          <Icon icon="ph:star-fill" class="text-lg text-yellow icon" />
                        </div>
                        <div class="rate-star">
                          <Icon icon="ph:star-fill" class="text-lg text-yellow icon" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <p class="text-grayDark4 text-xs leading-[20px] tracking-[0.2px]">{{ $t('today') }}</p>
                </div>

                <div class="flex flex-col gap-[12px] pl-[60px] mt-[16px]">
                  <div class="flex w-full items-center justify-between">
                    <h6 class="text-sm text-dark font-bold leading-[24px]">{{ $t('did_you_find_this_item_useful') }}</h6>
                    <div class="flex items-center gap-[12px]">
                      <Icon icon="iconamoon:like-fill" class="cursor-pointer text-lg text-orange" />
                      <Icon icon="iconamoon:dislike-fill" class="cursor-pointer text-lg text-graylight" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Accordion2Component>

        <div class="flex flex-col gap-[12px] mt-[16px]">
          <div class="w-full grid grid-cols-2 gap-[12px]">
            <div class="bg-gray p-[12px] bg-gray rounded-[16px] flex items-center justify-center gap-[8px] cursor-pointer">
              <img class="w-full max-w-[24px]" src="@/assets/imgs/twitter.svg" alt="" />
              <p class="text-sm text-black font-semibold leading-[20px] tracking-[-0.2px]">{{ $t('share_in_twitter') }}</p>
            </div>
            <div class="bg-gray p-[12px] bg-gray rounded-[16px] flex items-center justify-center gap-[8px] cursor-pointer">
              <img class="w-full max-w-[24px]" src="@/assets/imgs/facebook.svg" alt="" />
              <p class="text-sm text-black font-semibold leading-[20px] tracking-[-0.2px]">{{ $t('share_in_facebook') }}</p>
            </div>
          </div>
        </div>
      </template>
    </SingleViewComponent>
    <div class="relative w-full">
      <div class="mb-[92px]"></div>
      <div class="w-full flex flex-col gap-[8px] max-h-[318px] h-full relative overflow-hidden rounded-r-[20px]">
        <div class="relative h-[50%] flex items-center justify-around bg-gray gap-[8px]">
          <img class="w-full max-w-[100px] object-cover" src="@/assets/imgs/shirt.png" alt="Item 1" />
          <img class="w-full max-w-[100px] object-cover" src="@/assets/imgs/shirt.png" alt="Item 1" />
        </div>
        <div class="relative h-[50%] flex items-center justify-around bg-gray gap-[8px]">
          <img class="w-full max-w-[100px] object-cover" src="@/assets/imgs/shirt.png" alt="Item 1" />
          <img class="w-full max-w-[100px] object-cover" src="@/assets/imgs/shirt.png" alt="Item 1" />
        </div>
      </div>

      <div class="p-[24px] rounded-[24px] border border-graylight mb-[141px] mt-[19px] w-[calc(100%-40px)] ml-auto sticky top-[40px]">
        <div class="w-full flex flex-col gap-[26px]">
          <div class="flex flex-col gap-[18px]">
            <p class="font-bold text-sm leading-[20px] text-black">{{ $t('info') }}</p>
            <div class="flex w-full flex justify-between">
              <div class="flex items-center gap-[8px]">
                <p class="text-xs text-grayDark font-normal leading-[20px] tracking-[0.2px]">{{ $t('sale_time') }}:</p>
                <div class="bg-gray px-[9px] py-[4px] rounded-[6px]">
                  <p class="text-xs text-black font-medium leading-[20px] tracking-[-0.2px]">02:10:54</p>
                </div>
              </div>
              <div class="flex items-center gap-[8px]">
                <p class="text-grayDark font-semibold text-xs leading-[16px] previous-price before:bg-black tracking-[-0.1px]">$69.90</p>
                <div class="bg-greenLight px-[9px] py-[4px] rounded-[6px]">
                  <p class="text-xs text-green font-medium leading-[20px] tracking-[-0.2px]">-30%</p>
                </div>
              </div>
            </div>
            <div class="w-full flex flex-col bg-gray rounded-[10px] py-[4px] items-center justify-center">
              <p class="text-grayDark4 text-xs leading-[20px] tracking-[0.2px]">{{ $t('price') }}</p>
              <p class="text-black font-bold leading-[24px] text-base">$230.00</p>
            </div>
            <div
              class="w-full flex bg-gray rounded-[16px] py-[14px] items-center justify-center gap-[8px] mt-[6px] cursor-pointer hover:bg-orange group transition-all"
            >
              <Icon icon="solar:heart-outline" class="text-xl text-black group-hover:text-white transition-all" />
              <p class="text-sm font-semibold text-black leading-[20px] tracking-[-0.2px] group-hover:text-white transition-all">
                {{ $t('add_to_favorites') }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="mb-[100px] flex flex-col w-full max-w-[1600px] mx-auto px-[25px]">
    <h6 class="font-bold text-black text-xl mb-[24px]">{{ $t('you_may_also_like') }}</h6>

    <div class="w-full grid grid-cols-6 gap-[16px]">
      <a href="#" class="relative w-full flex flex-col shadow-sm">
        <div
          class="relative w-full h-[160px] sm:h-[276px] md:h-[224px] lg:h-[232px] xl:h-[210px] 2xl:h-[247px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden bg-gray flex items-center justify-center px-[20px]"
        >
          <img
            class="max-w-[76px] sm:w-[131px] md:max-w-[106px] lg:max-w-[110px] xl:max-w-[100px] 2xl:max-w-[117px] w-full object-cover"
            src="@/assets/imgs/shirt.png"
            alt=""
          />

          <div class="absolute w-full top-[12px] px-[12px] flex items-start justify-between">
            <div class="date w-max px-[8px] py-[4px] bg-gray flex items-center justify-center rounded-[8px]">
              <div class="flex flex-col items-center">
                <p class="text-sm font-bold text-black leading-[20px] tracking-[-0.2px]">02:10:54</p>
              </div>
            </div>
            <Icon icon="solar:heart-outline" class="text-xl text-black" />
          </div>
        </div>
        <div class="w-full py-[12px] px-[16px] flex flex-col bg-white rounded-bl-[16px] rounded-br-[16px]">
          <div class="flex items-center justify-between pb-[4px] border-b-[1px] border-gray">
            <div class="flex items-center gap-[12px]">
              <div class="w-[48px] h-[48px] rounded-full flex items-center justify-center bg-gray">
                <img class="w-full max-w-[36px]" src="@/assets/imgs/stores.svg" alt="" />
              </div>
              <p class="text-sm font-bold leading-[20px] sm:block hidden text-black">Pull&Bear</p>
            </div>
            <div class="flex items-center gap-[8px]">
              <div class="py-[6px] px-[8px] bg-greenLight rounded-[8px] text-green font-semibold text-sm leading-[20px] tracking-[-0.2px]">
                -30%
              </div>
            </div>
          </div>
          <div class="w-full mt-[4px]">
            <div class="flex flex-col gap-[8px]">
              <p class="font-bold text-back text-sm leading-[20px]">Pull&Bear shrimp T-shirt</p>
              <div class="flex flex-col">
                <p class="text-grayDark font-semibold text-xs leading-[16px] previous-price before:bg-black tracking-[-0.1px]">$69.90</p>
                <p class="text-black font-bold teext-[18px] leading-[26px] tracking-[-0.1px]">$49.00</p>
              </div>
            </div>
          </div>
        </div>
      </a>
      <a href="#" class="relative w-full flex flex-col shadow-sm">
        <div
          class="relative w-full h-[160px] sm:h-[276px] md:h-[224px] lg:h-[232px] xl:h-[210px] 2xl:h-[247px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden bg-gray flex items-center justify-center px-[20px]"
        >
          <img
            class="max-w-[76px] sm:w-[131px] md:max-w-[106px] lg:max-w-[110px] xl:max-w-[100px] 2xl:max-w-[117px] w-full object-cover"
            src="@/assets/imgs/shirt.png"
            alt=""
          />

          <div class="absolute w-full top-[12px] px-[12px] flex items-start justify-between">
            <div class="date w-max px-[8px] py-[4px] bg-gray flex items-center justify-center rounded-[8px]">
              <div class="flex flex-col items-center">
                <p class="text-sm font-bold text-black leading-[20px] tracking-[-0.2px]">02:10:54</p>
              </div>
            </div>
            <Icon icon="solar:heart-outline" class="text-xl text-black" />
          </div>
        </div>
        <div class="w-full py-[12px] px-[16px] flex flex-col bg-white rounded-bl-[16px] rounded-br-[16px]">
          <div class="flex items-center justify-between pb-[4px] border-b-[1px] border-gray">
            <div class="flex items-center gap-[12px]">
              <div class="w-[48px] h-[48px] rounded-full flex items-center justify-center bg-gray">
                <img class="w-full max-w-[36px]" src="@/assets/imgs/stores.svg" alt="" />
              </div>
              <p class="text-sm font-bold leading-[20px] sm:block hidden text-black">Pull&Bear</p>
            </div>
            <div class="flex items-center gap-[8px]">
              <div class="py-[6px] px-[8px] bg-greenLight rounded-[8px] text-green font-semibold text-sm leading-[20px] tracking-[-0.2px]">
                -30%
              </div>
            </div>
          </div>
          <div class="w-full mt-[4px]">
            <div class="flex flex-col gap-[8px]">
              <p class="font-bold text-back text-sm leading-[20px]">Pull&Bear shrimp T-shirt</p>
              <div class="flex flex-col">
                <p class="text-grayDark font-semibold text-xs leading-[16px] previous-price before:bg-black tracking-[-0.1px]">$69.90</p>
                <p class="text-black font-bold teext-[18px] leading-[26px] tracking-[-0.1px]">$49.00</p>
              </div>
            </div>
          </div>
        </div>
      </a>
      <a href="#" class="relative w-full flex flex-col shadow-sm">
        <div
          class="relative w-full h-[160px] sm:h-[276px] md:h-[224px] lg:h-[232px] xl:h-[210px] 2xl:h-[247px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden bg-gray flex items-center justify-center px-[20px]"
        >
          <img
            class="max-w-[76px] sm:w-[131px] md:max-w-[106px] lg:max-w-[110px] xl:max-w-[100px] 2xl:max-w-[117px] w-full object-cover"
            src="@/assets/imgs/shirt.png"
            alt=""
          />

          <div class="absolute w-full top-[12px] px-[12px] flex items-start justify-between">
            <div class="date w-max px-[8px] py-[4px] bg-gray flex items-center justify-center rounded-[8px]">
              <div class="flex flex-col items-center">
                <p class="text-sm font-bold text-black leading-[20px] tracking-[-0.2px]">02:10:54</p>
              </div>
            </div>
            <Icon icon="solar:heart-outline" class="text-xl text-black" />
          </div>
        </div>
        <div class="w-full py-[12px] px-[16px] flex flex-col bg-white rounded-bl-[16px] rounded-br-[16px]">
          <div class="flex items-center justify-between pb-[4px] border-b-[1px] border-gray">
            <div class="flex items-center gap-[12px]">
              <div class="w-[48px] h-[48px] rounded-full flex items-center justify-center bg-gray">
                <img class="w-full max-w-[36px]" src="@/assets/imgs/stores.svg" alt="" />
              </div>
              <p class="text-sm font-bold leading-[20px] sm:block hidden text-black">Pull&Bear</p>
            </div>
            <div class="flex items-center gap-[8px]">
              <div class="py-[6px] px-[8px] bg-greenLight rounded-[8px] text-green font-semibold text-sm leading-[20px] tracking-[-0.2px]">
                -30%
              </div>
            </div>
          </div>
          <div class="w-full mt-[4px]">
            <div class="flex flex-col gap-[8px]">
              <p class="font-bold text-back text-sm leading-[20px]">Pull&Bear shrimp T-shirt</p>
              <div class="flex flex-col">
                <p class="text-grayDark font-semibold text-xs leading-[16px] previous-price before:bg-black tracking-[-0.1px]">$69.90</p>
                <p class="text-black font-bold teext-[18px] leading-[26px] tracking-[-0.1px]">$49.00</p>
              </div>
            </div>
          </div>
        </div>
      </a>
      <a href="#" class="relative w-full flex flex-col shadow-sm">
        <div
          class="relative w-full h-[160px] sm:h-[276px] md:h-[224px] lg:h-[232px] xl:h-[210px] 2xl:h-[247px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden bg-gray flex items-center justify-center px-[20px]"
        >
          <img
            class="max-w-[76px] sm:w-[131px] md:max-w-[106px] lg:max-w-[110px] xl:max-w-[100px] 2xl:max-w-[117px] w-full object-cover"
            src="@/assets/imgs/shirt.png"
            alt=""
          />

          <div class="absolute w-full top-[12px] px-[12px] flex items-start justify-between">
            <div class="date w-max px-[8px] py-[4px] bg-gray flex items-center justify-center rounded-[8px]">
              <div class="flex flex-col items-center">
                <p class="text-sm font-bold text-black leading-[20px] tracking-[-0.2px]">02:10:54</p>
              </div>
            </div>
            <Icon icon="solar:heart-outline" class="text-xl text-black" />
          </div>
        </div>
        <div class="w-full py-[12px] px-[16px] flex flex-col bg-white rounded-bl-[16px] rounded-br-[16px]">
          <div class="flex items-center justify-between pb-[4px] border-b-[1px] border-gray">
            <div class="flex items-center gap-[12px]">
              <div class="w-[48px] h-[48px] rounded-full flex items-center justify-center bg-gray">
                <img class="w-full max-w-[36px]" src="@/assets/imgs/stores.svg" alt="" />
              </div>
              <p class="text-sm font-bold leading-[20px] sm:block hidden text-black">Pull&Bear</p>
            </div>
            <div class="flex items-center gap-[8px]">
              <div class="py-[6px] px-[8px] bg-greenLight rounded-[8px] text-green font-semibold text-sm leading-[20px] tracking-[-0.2px]">
                -30%
              </div>
            </div>
          </div>
          <div class="w-full mt-[4px]">
            <div class="flex flex-col gap-[8px]">
              <p class="font-bold text-back text-sm leading-[20px]">Pull&Bear shrimp T-shirt</p>
              <div class="flex flex-col">
                <p class="text-grayDark font-semibold text-xs leading-[16px] previous-price before:bg-black tracking-[-0.1px]">$69.90</p>
                <p class="text-black font-bold teext-[18px] leading-[26px] tracking-[-0.1px]">$49.00</p>
              </div>
            </div>
          </div>
        </div>
      </a>
      <a href="#" class="relative w-full flex flex-col shadow-sm">
        <div
          class="relative w-full h-[160px] sm:h-[276px] md:h-[224px] lg:h-[232px] xl:h-[210px] 2xl:h-[247px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden bg-gray flex items-center justify-center px-[20px]"
        >
          <img
            class="max-w-[76px] sm:w-[131px] md:max-w-[106px] lg:max-w-[110px] xl:max-w-[100px] 2xl:max-w-[117px] w-full object-cover"
            src="@/assets/imgs/shirt.png"
            alt=""
          />

          <div class="absolute w-full top-[12px] px-[12px] flex items-start justify-between">
            <div class="date w-max px-[8px] py-[4px] bg-gray flex items-center justify-center rounded-[8px]">
              <div class="flex flex-col items-center">
                <p class="text-sm font-bold text-black leading-[20px] tracking-[-0.2px]">02:10:54</p>
              </div>
            </div>
            <Icon icon="solar:heart-outline" class="text-xl text-black" />
          </div>
        </div>
        <div class="w-full py-[12px] px-[16px] flex flex-col bg-white rounded-bl-[16px] rounded-br-[16px]">
          <div class="flex items-center justify-between pb-[4px] border-b-[1px] border-gray">
            <div class="flex items-center gap-[12px]">
              <div class="w-[48px] h-[48px] rounded-full flex items-center justify-center bg-gray">
                <img class="w-full max-w-[36px]" src="@/assets/imgs/stores.svg" alt="" />
              </div>
              <p class="text-sm font-bold leading-[20px] sm:block hidden text-black">Pull&Bear</p>
            </div>
            <div class="flex items-center gap-[8px]">
              <div class="py-[6px] px-[8px] bg-greenLight rounded-[8px] text-green font-semibold text-sm leading-[20px] tracking-[-0.2px]">
                -30%
              </div>
            </div>
          </div>
          <div class="w-full mt-[4px]">
            <div class="flex flex-col gap-[8px]">
              <p class="font-bold text-back text-sm leading-[20px]">Pull&Bear shrimp T-shirt</p>
              <div class="flex flex-col">
                <p class="text-grayDark font-semibold text-xs leading-[16px] previous-price before:bg-black tracking-[-0.1px]">$69.90</p>
                <p class="text-black font-bold teext-[18px] leading-[26px] tracking-[-0.1px]">$49.00</p>
              </div>
            </div>
          </div>
        </div>
      </a>
      <a href="#" class="relative w-full flex flex-col shadow-sm">
        <div
          class="relative w-full h-[160px] sm:h-[276px] md:h-[224px] lg:h-[232px] xl:h-[210px] 2xl:h-[247px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden bg-gray flex items-center justify-center px-[20px]"
        >
          <img
            class="max-w-[76px] sm:w-[131px] md:max-w-[106px] lg:max-w-[110px] xl:max-w-[100px] 2xl:max-w-[117px] w-full object-cover"
            src="@/assets/imgs/shirt.png"
            alt=""
          />

          <div class="absolute w-full top-[12px] px-[12px] flex items-start justify-between">
            <div class="date w-max px-[8px] py-[4px] bg-gray flex items-center justify-center rounded-[8px]">
              <div class="flex flex-col items-center">
                <p class="text-sm font-bold text-black leading-[20px] tracking-[-0.2px]">02:10:54</p>
              </div>
            </div>
            <Icon icon="solar:heart-outline" class="text-xl text-black" />
          </div>
        </div>
        <div class="w-full py-[12px] px-[16px] flex flex-col bg-white rounded-bl-[16px] rounded-br-[16px]">
          <div class="flex items-center justify-between pb-[4px] border-b-[1px] border-gray">
            <div class="flex items-center gap-[12px]">
              <div class="w-[48px] h-[48px] rounded-full flex items-center justify-center bg-gray">
                <img class="w-full max-w-[36px]" src="@/assets/imgs/stores.svg" alt="" />
              </div>
              <p class="text-sm font-bold leading-[20px] sm:block hidden text-black">Pull&Bear</p>
            </div>
            <div class="flex items-center gap-[8px]">
              <div class="py-[6px] px-[8px] bg-greenLight rounded-[8px] text-green font-semibold text-sm leading-[20px] tracking-[-0.2px]">
                -30%
              </div>
            </div>
          </div>
          <div class="w-full mt-[4px]">
            <div class="flex flex-col gap-[8px]">
              <p class="font-bold text-back text-sm leading-[20px]">Pull&Bear shrimp T-shirt</p>
              <div class="flex flex-col">
                <p class="text-grayDark font-semibold text-xs leading-[16px] previous-price before:bg-black tracking-[-0.1px]">$69.90</p>
                <p class="text-black font-bold teext-[18px] leading-[26px] tracking-[-0.1px]">$49.00</p>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  </div>

  <SubscribeComponent />
  <FooterComponent />
</template>

<script lang="ts">
import HeaderComponent from '@/components/layouts/HeaderComponent.vue'
import FooterComponent from '@/components/layouts/FooterComponent.vue'
import BreadcrumbComponent from '@/components/layouts/BreadcrumbComponent.vue'
import SubscribeComponent from '@/components/layouts/SubscribeComponent.vue'
import SingleViewComponent from '@/components/SingleViewComponent.vue'
import Accordion2Component from '@/components/accordion/Accordion2Component.vue'

interface PagesArr {
  page: string
  routeName: string
}

export default {
  name: 'Events',
  data() {
    return {
      pagesArr: [
        {
          page: this.$t('sales'),
          routeName: this.$Routes.SALES
        }
      ] as PagesArr[]
    }
  },
  components: {
    HeaderComponent,
    FooterComponent,
    BreadcrumbComponent,
    SubscribeComponent,
    SingleViewComponent,
    Accordion2Component
  }
}
</script>
