<template>
  <HeaderComponent />
  <BreadcrumbComponent :pagesArr="pagesArr" currentPage="Zara" />

  <div class="grid grid-cols-[640px,auto] gap-[8px] max-w-[1120px] mx-auto px-[25px]">
    <SingleViewComponent>
      <template #head>
        <h6 class="font-bold text-black text-xl mb-[24px]">Zara</h6>
      </template>

      <template #hero>
        <div class="relative w-full">
          <img class="w-full rounded-l-[16px] max-h-[318px] object-cover object-top" src="@/assets/imgs/item2.png" alt="" />
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
              <Icon icon="ph:star-half-fill" class="text-lg text-orange icon" />

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
          <div class="accordion-menu w-full relative">
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

        <div class="w-full flex flex-col gap-[8px] mt-[48px]">
          <div class="w-full flex items-center mb-[16px]">
            <ul class="flex items-center gap-[4px]">
              <li
                @click="filterShop"
                :shop-filter="ShopSingleFilter_ENUM.PRODUCTS"
                :class="shopFilter === ShopSingleFilter_ENUM.PRODUCTS ? 'bg-orange text-white' : 'bg-gray text-black'"
                class="px-[16px] py-[12px] rounded-[12px] text-xs font-semibold leading-[16px] tracking-[-0.1px] cursor-pointer"
              >
                {{ $t('products') }}
              </li>
              <li
                @click="filterShop"
                :shop-filter="ShopSingleFilter_ENUM.NEWS"
                :class="shopFilter === ShopSingleFilter_ENUM.NEWS ? 'bg-orange text-white' : 'bg-gray text-black'"
                class="px-[16px] py-[12px] rounded-[12px] text-xs font-semibold leading-[16px] tracking-[-0.1px] cursor-pointer"
              >
                {{ $t('news') }}
              </li>
              <li
                @click="filterShop"
                :shop-filter="ShopSingleFilter_ENUM.EVENTS"
                :class="shopFilter === ShopSingleFilter_ENUM.EVENTS ? 'bg-orange text-white' : 'bg-gray text-black'"
                class="px-[16px] py-[12px] rounded-[12px] text-xs font-semibold leading-[16px] tracking-[-0.1px] cursor-pointer"
              >
                {{ $t('events') }}
              </li>
              <li
                @click="filterShop"
                :shop-filter="ShopSingleFilter_ENUM.REWARDS"
                :class="shopFilter === ShopSingleFilter_ENUM.REWARDS ? 'bg-orange text-white' : 'bg-gray text-black'"
                class="px-[16px] py-[12px] rounded-[12px] text-xs font-semibold leading-[16px] tracking-[-0.1px] cursor-pointer"
              >
                {{ $t('rewards') }}
              </li>
            </ul>
          </div>
          <div class="relative w-full flex flex-col">
            <div class="w-full grid grid-cols-2 gap-[16px]">
              <a class="relative w-full flex flex-col shadow-sm">
                <div class="relative w-full lg:h-[315px] xl:h-[324px] 2xl:h-[382px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden">
                  <img class="w-full h-full object-cover" src="@/assets/imgs/item2.png" alt="" />
                  <div class="absolute w-full top-[12px] px-[12px] flex items-start justify-between">
                    <div></div>
                    <Icon icon="solar:heart-outline" class="text-xl text-white" />
                  </div>
                </div>
                <div class="w-full py-[12px] px-[16px] flex flex-col bg-white rounded-bl-[16px] rounded-br-[16px]">
                  <div class="flex items-center justify-between pb-[4px] border-b-[1px] border-gray">
                    <div class="flex items-center gap-[12px]">
                      <div class="w-[48px] h-[48px] rounded-full flex items-center justify-center bg-gray">
                        <img class="w-full max-w-[36px]" src="@/assets/imgs/zara.svg" alt="" />
                      </div>
                      <p class="text-sm font-bold leading-[20px] text-black">ZARA</p>
                    </div>
                    <div class="flex items-center gap-[8px]">
                      <p class="text-sm font-medium text-black leading-[20px] tracking-[-0.2px]">9 June 2022</p>
                    </div>
                  </div>
                  <div class="w-full mt-[4px]">
                    <p class="font-bold text-back text-sm leading-[20px]">Masterclass - Fitness master burn your calories.</p>
                  </div>
                </div>
              </a>
              <a class="relative w-full flex flex-col shadow-sm">
                <div class="relative w-full lg:h-[315px] xl:h-[324px] 2xl:h-[382px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden">
                  <img class="w-full h-full object-cover" src="@/assets/imgs/item2.png" alt="" />
                  <div class="absolute w-full top-[12px] px-[12px] flex items-start justify-between">
                    <div></div>
                    <Icon icon="solar:heart-outline" class="text-xl text-white" />
                  </div>
                </div>
                <div class="w-full py-[12px] px-[16px] flex flex-col bg-white rounded-bl-[16px] rounded-br-[16px]">
                  <div class="flex items-center justify-between pb-[4px] border-b-[1px] border-gray">
                    <div class="flex items-center gap-[12px]">
                      <div class="w-[48px] h-[48px] rounded-full flex items-center justify-center bg-gray">
                        <img class="w-full max-w-[36px]" src="@/assets/imgs/zara.svg" alt="" />
                      </div>
                      <p class="text-sm font-bold leading-[20px] text-black">ZARA</p>
                    </div>
                    <div class="flex items-center gap-[8px]">
                      <p class="text-sm font-medium text-black leading-[20px] tracking-[-0.2px]">9 June 2022</p>
                    </div>
                  </div>
                  <div class="w-full mt-[4px]">
                    <p class="font-bold text-back text-sm leading-[20px]">Masterclass - Fitness master burn your calories.</p>
                  </div>
                </div>
              </a>
              <a class="relative w-full flex flex-col shadow-sm">
                <div class="relative w-full lg:h-[315px] xl:h-[324px] 2xl:h-[382px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden">
                  <img class="w-full h-full object-cover" src="@/assets/imgs/item2.png" alt="" />
                  <div class="absolute w-full top-[12px] px-[12px] flex items-start justify-between">
                    <div></div>
                    <Icon icon="solar:heart-outline" class="text-xl text-white" />
                  </div>
                </div>
                <div class="w-full py-[12px] px-[16px] flex flex-col bg-white rounded-bl-[16px] rounded-br-[16px]">
                  <div class="flex items-center justify-between pb-[4px] border-b-[1px] border-gray">
                    <div class="flex items-center gap-[12px]">
                      <div class="w-[48px] h-[48px] rounded-full flex items-center justify-center bg-gray">
                        <img class="w-full max-w-[36px]" src="@/assets/imgs/zara.svg" alt="" />
                      </div>
                      <p class="text-sm font-bold leading-[20px] text-black">ZARA</p>
                    </div>
                    <div class="flex items-center gap-[8px]">
                      <p class="text-sm font-medium text-black leading-[20px] tracking-[-0.2px]">9 June 2022</p>
                    </div>
                  </div>
                  <div class="w-full mt-[4px]">
                    <p class="font-bold text-back text-sm leading-[20px]">Masterclass - Fitness master burn your calories.</p>
                  </div>
                </div>
              </a>
              <a class="relative w-full flex flex-col shadow-sm">
                <div class="relative w-full lg:h-[315px] xl:h-[324px] 2xl:h-[382px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden">
                  <img class="w-full h-full object-cover" src="@/assets/imgs/item2.png" alt="" />
                  <div class="absolute w-full top-[12px] px-[12px] flex items-start justify-between">
                    <div></div>
                    <Icon icon="solar:heart-outline" class="text-xl text-white" />
                  </div>
                </div>
                <div class="w-full py-[12px] px-[16px] flex flex-col bg-white rounded-bl-[16px] rounded-br-[16px]">
                  <div class="flex items-center justify-between pb-[4px] border-b-[1px] border-gray">
                    <div class="flex items-center gap-[12px]">
                      <div class="w-[48px] h-[48px] rounded-full flex items-center justify-center bg-gray">
                        <img class="w-full max-w-[36px]" src="@/assets/imgs/zara.svg" alt="" />
                      </div>
                      <p class="text-sm font-bold leading-[20px] text-black">ZARA</p>
                    </div>
                    <div class="flex items-center gap-[8px]">
                      <p class="text-sm font-medium text-black leading-[20px] tracking-[-0.2px]">9 June 2022</p>
                    </div>
                  </div>
                  <div class="w-full mt-[4px]">
                    <p class="font-bold text-back text-sm leading-[20px]">Masterclass - Fitness master burn your calories.</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </template>
    </SingleViewComponent>
    <div class="relative w-full">
      <div class="mb-[92px]"></div>
      <div class="w-full flex flex-col gap-[8px] max-h-[318px] h-full relative overflow-hidden rounded-r-[20px]">
        <div class="relative h-[50%] flex items-center gap-[8px]">
          <img class="w-full h-[100%] object-cover" src="@/assets/imgs/item1.png" alt="Item 1" />
          <img class="w-full h-[100%] object-cover" src="@/assets/imgs/item1.png" alt="Item 1" />
        </div>
        <div class="relative h-[50%] flex items-center gap-[8px]">
          <img class="w-full h-[100%] object-cover" src="@/assets/imgs/item1.png" alt="Item 1" />
          <img class="w-full h-[100%] object-cover" src="@/assets/imgs/item1.png" alt="Item 1" />
        </div>
      </div>

      <div class="p-[24px] rounded-[24px] border border-graylight mb-[141px] mt-[19px] w-[calc(100%-40px)] ml-auto sticky top-[40px]">
        <div class="w-full flex flex-col gap-[26px]">
          <div class="flex flex-col gap-[16px]">
            <p class="font-bold text-sm leading-[20px] text-black">{{ $t('contact') }}</p>
            <div class="flex flex-col gap-[18px]">
              <div class="w-full flex items-center gap-[12px]">
                <div class="w-[48px] h-[48px] rounded-full bg-gray flex items-center justify-center">
                  <Icon icon="mdi-light:email" class="text-lg text-black" />
                </div>
                <div class="flex flex-col gap-[4px]">
                  <p class="font-bold text-sm text-back leading-[20px]">{{ $t('email') }}</p>
                  <a href="#" class="font-semibold text-xs leading-[20px] tracking-[-0.2px] text-orange">{{ $t('send_email') }}</a>
                </div>
              </div>
              <div class="w-full flex items-center gap-[12px]">
                <div class="w-[48px] h-[48px] rounded-full bg-gray flex items-center justify-center">
                  <Icon icon="pepicons-pencil:smartphone-cutout" class="text-lg text-black" />
                </div>
                <div class="flex flex-col gap-[4px]">
                  <p class="font-bold text-sm text-back leading-[20px]">{{ $t('phone_number') }}</p>
                  <a href="" class="font-semibold text-xs leading-[20px] tracking-[-0.2px] text-orange">{{ $t('call_the_shop') }}</a>
                </div>
              </div>
              <div class="w-full flex items-center gap-[12px]">
                <div class="w-[48px] h-[48px] rounded-full bg-gray flex items-center justify-center">
                  <Icon icon="solar:link-bold" class="text-lg text-black" />
                </div>
                <div class="flex flex-col gap-[4px]">
                  <p class="font-bold text-sm text-back leading-[20px]">{{ $t('website') }}</p>
                  <a href="#" class="font-semibold text-xs leading-[20px] tracking-[-0.2px] text-orange">{{ $t('visit') }}</a>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-col gap-[16px]">
            <p class="font-bold text-sm leading-[20px] text-black">{{ $t('opening_hours') }}</p>
            <div class="w-full flex flex-col">
              <div class="w-full flex flex-col py-[12px] border-b border-gray">
                <div class="w-full flex items-center justify-between">
                  <p class="text-grayDark4 font-medium text-sm leadinig-[20px] tracking-[-0.2px]">{{ $t('monday') }}</p>
                  <p class="text-base text-black font-bold leading-[24px]">09:00 - 16:30</p>
                </div>
              </div>
              <div class="w-full flex flex-col py-[12px] border-b border-gray">
                <div class="w-full flex items-center justify-between">
                  <p class="text-grayDark4 font-medium text-sm leadinig-[20px] tracking-[-0.2px]">{{ $t('monday') }}</p>
                  <p class="text-base text-black font-bold leading-[24px]">09:00 - 16:30</p>
                </div>
              </div>
              <div class="w-full flex flex-col py-[12px] border-b border-gray">
                <div class="w-full flex items-center justify-between">
                  <p class="text-grayDark4 font-medium text-sm leadinig-[20px] tracking-[-0.2px]">{{ $t('monday') }}</p>
                  <p class="text-base text-black font-bold leading-[24px]">09:00 - 16:30</p>
                </div>
              </div>
              <div class="w-full flex flex-col py-[12px] border-b border-gray">
                <div class="w-full flex items-center justify-between">
                  <p class="text-grayDark4 font-medium text-sm leadinig-[20px] tracking-[-0.2px]">{{ $t('monday') }}</p>
                  <p class="text-base text-black font-bold leading-[24px]">09:00 - 16:30</p>
                </div>
              </div>
              <div class="w-full flex flex-col py-[12px] border-b border-gray">
                <div class="w-full flex items-center justify-between">
                  <p class="text-grayDark4 font-medium text-sm leadinig-[20px] tracking-[-0.2px]">{{ $t('monday') }}</p>
                  <p class="text-base text-black font-bold leading-[24px]">09:00 - 16:30</p>
                </div>
              </div>
              <div class="w-full flex flex-col py-[12px] border-b border-gray">
                <div class="w-full flex items-center justify-between">
                  <p class="text-grayDark4 font-medium text-sm leadinig-[20px] tracking-[-0.2px]">{{ $t('monday') }}</p>
                  <p class="text-base text-black font-bold leading-[24px]">09:00 - 16:30</p>
                </div>
              </div>
              <div class="w-full flex flex-col py-[12px] border-b border-gray">
                <div class="w-full flex items-center justify-between">
                  <p class="text-grayDark4 font-medium text-sm leadinig-[20px] tracking-[-0.2px]">{{ $t('monday') }}</p>
                  <p class="text-base text-black font-bold leading-[24px]">09:00 - 16:30</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="mb-[100px] flex flex-col w-full max-w-[1600px] mx-auto px-[25px]">
    <h6 class="font-bold text-black text-xl mb-[24px]">{{ $t('you_may_also_like') }}</h6>

    <div class="w-full grid grid-cols-4 gap-[16px]">
      <a href="#" class="relative w-full flex flex-col shadow-sm">
        <div class="relative w-full lg:h-[315px] xl:h-[324px] 2xl:h-[382px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden">
          <img class="w-full h-full object-cover" src="@/assets/imgs/zara.png" alt="" />
        </div>
        <div class="w-full py-[12px] px-[16px] flex flex-col bg-white rounded-bl-[16px] rounded-br-[16px]">
          <div class="flex items-center justify-between pb-[12px] border-b-[1px] border-gray">
            <div class="date px-[8px] py-[4px] bg-gray flex items-center justify-center rounded-[8px]">
              <div class="flex flex-col items-center">
                <p class="text-xs font-medium text-black leading-[20px] lowercase">Clothes, fashion</p>
              </div>
            </div>
          </div>
          <div class="w-full flex items-center justify-between mt-[8px] flex gap-[4px]">
            <div class="flex items-center gap-[12px]">
              <div class="w-[48px] h-[48px] rounded-full flex items-center justify-center bg-gray">
                <img class="w-full max-w-[36px]" src="@/assets/imgs/zara.svg" alt="" />
              </div>
              <div class="flex flex-col gap-[4px]">
                <p class="text-sm font-bold leading-[20px] text-black">ZARA</p>
                <div class="flex items-center gap-[8px]">
                  <Icon icon="solar:routing-3-bold" class="text-lg text-orange" />

                  <p class="font-semibold text-sm leading-[20px] tracking-[-0.2px] text-pink">2th floor</p>
                </div>
              </div>
            </div>

            <div class="px-[20px] py-[10px] border rounded-[12px] border-pink">
              <p class="text-xs font-semibold leading-[20px] tracking-[-0.2px] text-pink">{{ $t('follow') }}</p>
            </div>
          </div>
        </div> </a
      ><a href="#" class="relative w-full flex flex-col shadow-sm">
        <div class="relative w-full lg:h-[315px] xl:h-[324px] 2xl:h-[382px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden">
          <img class="w-full h-full object-cover" src="@/assets/imgs/zara.png" alt="" />
        </div>
        <div class="w-full py-[12px] px-[16px] flex flex-col bg-white rounded-bl-[16px] rounded-br-[16px]">
          <div class="flex items-center justify-between pb-[12px] border-b-[1px] border-gray">
            <div class="date px-[8px] py-[4px] bg-gray flex items-center justify-center rounded-[8px]">
              <div class="flex flex-col items-center">
                <p class="text-xs font-medium text-black leading-[20px] lowercase">Clothes, fashion</p>
              </div>
            </div>
          </div>
          <div class="w-full flex items-center justify-between mt-[8px] flex gap-[4px]">
            <div class="flex items-center gap-[12px]">
              <div class="w-[48px] h-[48px] rounded-full flex items-center justify-center bg-gray">
                <img class="w-full max-w-[36px]" src="@/assets/imgs/zara.svg" alt="" />
              </div>
              <div class="flex flex-col gap-[4px]">
                <p class="text-sm font-bold leading-[20px] text-black">ZARA</p>
                <div class="flex items-center gap-[8px]">
                  <Icon icon="solar:routing-3-bold" class="text-lg text-orange" />

                  <p class="font-semibold text-sm leading-[20px] tracking-[-0.2px] text-pink">2th floor</p>
                </div>
              </div>
            </div>

            <div class="px-[20px] py-[10px] border rounded-[12px] border-pink">
              <p class="text-xs font-semibold leading-[20px] tracking-[-0.2px] text-pink">{{ $t('follow') }}</p>
            </div>
          </div>
        </div> </a
      ><a href="#" class="relative w-full flex flex-col shadow-sm">
        <div class="relative w-full lg:h-[315px] xl:h-[324px] 2xl:h-[382px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden">
          <img class="w-full h-full object-cover" src="@/assets/imgs/zara.png" alt="" />
        </div>
        <div class="w-full py-[12px] px-[16px] flex flex-col bg-white rounded-bl-[16px] rounded-br-[16px]">
          <div class="flex items-center justify-between pb-[12px] border-b-[1px] border-gray">
            <div class="date px-[8px] py-[4px] bg-gray flex items-center justify-center rounded-[8px]">
              <div class="flex flex-col items-center">
                <p class="text-xs font-medium text-black leading-[20px] lowercase">Clothes, fashion</p>
              </div>
            </div>
          </div>
          <div class="w-full flex items-center justify-between mt-[8px] flex gap-[4px]">
            <div class="flex items-center gap-[12px]">
              <div class="w-[48px] h-[48px] rounded-full flex items-center justify-center bg-gray">
                <img class="w-full max-w-[36px]" src="@/assets/imgs/zara.svg" alt="" />
              </div>
              <div class="flex flex-col gap-[4px]">
                <p class="text-sm font-bold leading-[20px] text-black">ZARA</p>
                <div class="flex items-center gap-[8px]">
                  <Icon icon="solar:routing-3-bold" class="text-lg text-orange" />

                  <p class="font-semibold text-sm leading-[20px] tracking-[-0.2px] text-pink">2th floor</p>
                </div>
              </div>
            </div>

            <div class="px-[20px] py-[10px] border rounded-[12px] border-pink">
              <p class="text-xs font-semibold leading-[20px] tracking-[-0.2px] text-pink">{{ $t('follow') }}</p>
            </div>
          </div>
        </div> </a
      ><a href="#" class="relative w-full flex flex-col shadow-sm">
        <div class="relative w-full lg:h-[315px] xl:h-[324px] 2xl:h-[382px] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden">
          <img class="w-full h-full object-cover" src="@/assets/imgs/zara.png" alt="" />
        </div>
        <div class="w-full py-[12px] px-[16px] flex flex-col bg-white rounded-bl-[16px] rounded-br-[16px]">
          <div class="flex items-center justify-between pb-[12px] border-b-[1px] border-gray">
            <div class="date px-[8px] py-[4px] bg-gray flex items-center justify-center rounded-[8px]">
              <div class="flex flex-col items-center">
                <p class="text-xs font-medium text-black leading-[20px] lowercase">Clothes, fashion</p>
              </div>
            </div>
          </div>
          <div class="w-full flex items-center justify-between mt-[8px] flex gap-[4px]">
            <div class="flex items-center gap-[12px]">
              <div class="w-[48px] h-[48px] rounded-full flex items-center justify-center bg-gray">
                <img class="w-full max-w-[36px]" src="@/assets/imgs/zara.svg" alt="" />
              </div>
              <div class="flex flex-col gap-[4px]">
                <p class="text-sm font-bold leading-[20px] text-black">ZARA</p>
                <div class="flex items-center gap-[8px]">
                  <Icon icon="solar:routing-3-bold" class="text-lg text-orange" />

                  <p class="font-semibold text-sm leading-[20px] tracking-[-0.2px] text-pink">2th floor</p>
                </div>
              </div>
            </div>

            <div class="px-[20px] py-[10px] border rounded-[12px] border-pink">
              <p class="text-xs font-semibold leading-[20px] tracking-[-0.2px] text-pink">{{ $t('follow') }}</p>
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
import { ShopSingleFilter } from '@/enums/shop/ShopSingleFilter.ts'
import Accordion2Component from '@/components/accordion/Accordion2Component.vue'
import HeaderComponent from '@/components/layouts/HeaderComponent.vue'
import FooterComponent from '@/components/layouts/FooterComponent.vue'
import BreadcrumbComponent from '@/components/layouts/BreadcrumbComponent.vue'
import SubscribeComponent from '@/components/layouts/SubscribeComponent.vue'
import SingleViewComponent from '@/components/SingleViewComponent.vue'

interface PagesArr {
  page: string
  routeName: string
}

export default {
  name: 'Events',
  data() {
    return {
      shopFilter: ShopSingleFilter.PRODUCTS,
      ShopSingleFilter_ENUM: ShopSingleFilter,
      pagesArr: [
        {
          page: this.$t('shop'),
          routeName: this.$Routes.SHOP
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
  },
  methods: {
    filterShop(e: Event) {
      const target = e.target as Element
      const targetFilter = target.closest('li').getAttribute('shop-filter')
      this.shopFilter = targetFilter
    }
  }
}
</script>
