<template>
  <div class="flex flex-col items-center w-full">
    <div class="w-full grid grid-cols-[auto,auto,654px]">
      <div class="flex flex-col gap-[16px]">
        <h6 class="text-sm font-bold text-black leading-[20px]">{{ $t('featured_categories') }}</h6>
        <div class="flex flex-col gap-[14px]">
          <a href="#" class="flex items-center gap-[12px]">
            <div class="flex items-center justify-center w-[48px] h-[48px] rounded-full bg-gray">
              <Icon icon="solar:bag-4-bold" class="text-lg text-black" />
            </div>
            <div class="flex flex-col gap-[4px]">
              <p class="text-sm font-bold text-black leading-[20px]">{{ $t('all') }}</p>
              <p class="text-xs font-medium text-grayDark4 leading-[20px] tracking-[-0.2px]">32 {{ $t('places') }}</p>
            </div>
          </a>
          <a href="#" class="flex items-center gap-[12px]">
            <div class="flex items-center justify-center w-[48px] h-[48px] rounded-full bg-gray">
              <Icon icon="bxs:t-shirt" class="text-lg text-black" />
            </div>
            <div class="flex flex-col gap-[4px]">
              <p class="text-sm font-bold text-black leading-[20px]">{{ $t('clothes') }}</p>
              <p class="text-xs font-medium text-grayDark4 leading-[20px] tracking-[-0.2px]">32 {{ $t('places') }}</p>
            </div>
          </a>
          <a href="#" class="flex items-center gap-[12px]">
            <div class="flex items-center justify-center w-[48px] h-[48px] rounded-full bg-gray">
              <Icon icon="mingcute:tv-1-fill" class="text-lg text-black" />
            </div>
            <div class="flex flex-col gap-[4px]">
              <p class="text-sm font-bold text-black leading-[20px]">{{ $t('electronics') }}</p>
              <p class="text-xs font-medium text-grayDark4 leading-[20px] tracking-[-0.2px]">32 {{ $t('places') }}</p>
            </div>
          </a>
          <a href="#" class="flex items-center gap-[12px]">
            <div class="flex items-center justify-center w-[48px] h-[48px] rounded-full bg-gray">
              <Icon icon="emojione-monotone:high-heeled-shoe" class="text-lg text-black" />
            </div>
            <div class="flex flex-col gap-[4px]">
              <p class="text-sm font-bold text-black leading-[20px]">{{ $t('shoes') }}</p>
              <p class="text-xs font-medium text-grayDark4 leading-[20px] tracking-[-0.2px]">32 {{ $t('places') }}</p>
            </div>
          </a>
          <a href="#" class="flex items-center gap-[12px]">
            <div class="flex items-center justify-center w-[48px] h-[48px] rounded-full bg-gray">
              <Icon icon="icon-park-solid:necktie" class="text-lg text-black" />
            </div>
            <div class="flex flex-col gap-[4px]">
              <p class="text-sm font-bold text-black leading-[20px]">{{ $t('for_men') }}</p>
              <p class="text-xs font-medium text-grayDark4 leading-[20px] tracking-[-0.2px]">32 {{ $t('places') }}</p>
            </div>
          </a>
          <a href="#" class="flex items-center gap-[12px]">
            <div class="flex items-center justify-center w-[48px] h-[48px] rounded-full bg-gray">
              <Icon icon="emojione-monotone:womans-hat" class="text-lg text-black" />
            </div>
            <div class="flex flex-col gap-[4px]">
              <p class="text-sm font-bold text-black leading-[20px]">{{ $t('for_women') }}</p>
              <p class="text-xs font-medium text-grayDark4 leading-[20px] tracking-[-0.2px]">32 {{ $t('places') }}</p>
            </div>
          </a>
          <a href="#" class="flex items-center gap-[12px]">
            <div class="flex items-center justify-center w-[48px] h-[48px] rounded-full bg-gray">
              <Icon icon="ic:round-curtains" class="text-lg text-black" />
            </div>
            <div class="flex flex-col gap-[4px]">
              <p class="text-sm font-bold text-black leading-[20px]">{{ $t('decor') }}</p>
              <p class="text-xs font-medium text-grayDark4 leading-[20px] tracking-[-0.2px]">32 {{ $t('places') }}</p>
            </div>
          </a>
          <a href="#" class="flex items-center gap-[12px]">
            <div class="flex items-center justify-center w-[48px] h-[48px] rounded-full bg-gray">
              <Icon icon="mingcute:shorts-fill" class="text-lg text-black" />
            </div>
            <div class="flex flex-col gap-[4px]">
              <p class="text-sm font-bold text-black leading-[20px]">{{ $t('sport') }}</p>
              <p class="text-xs font-medium text-grayDark4 leading-[20px] tracking-[-0.2px]">32 {{ $t('places') }}</p>
            </div>
          </a>
        </div>
      </div>

      <div class="flex flex-col gap-[16px]">
        <h6 class="text-sm font-bold text-black leading-[20px]">{{ $t('brands') }}</h6>
        <div class="flex flex-col gap-[14px]">
          <a href="#" class="flex items-center gap-[12px]">
            <div class="flex items-center justify-center w-[48px] h-[48px] rounded-full bg-gray">
              <img class="w-full max-w-full" src="@/assets/imgs/zara.svg" alt="" />
            </div>
            <div class="flex flex-col gap-[4px]">
              <p class="text-sm font-bold text-black leading-[20px]">ZARA</p>
              <p class="text-xs font-medium text-grayDark4 leading-[20px] tracking-[-0.2px]">{{ $t('clothes') }}</p>
            </div>
          </a>
          <a href="#" class="flex items-center gap-[12px]">
            <div class="flex items-center justify-center w-[48px] h-[48px] rounded-full bg-gray">
              <img class="w-full max-w-full" src="@/assets/imgs/converse.svg" alt="" />
            </div>
            <div class="flex flex-col gap-[4px]">
              <p class="text-sm font-bold text-black leading-[20px]">Converse</p>
              <p class="text-xs font-medium text-grayDark4 leading-[20px] tracking-[-0.2px]">{{ $t('clothes') }}</p>
            </div>
          </a>
          <a href="#" class="flex items-center gap-[12px]">
            <div class="flex items-center justify-center w-[48px] h-[48px] rounded-full bg-gray">
              <img class="w-full max-w-full" src="@/assets/imgs/reboke.svg" alt="" />
            </div>
            <div class="flex flex-col gap-[4px]">
              <p class="text-sm font-bold text-black leading-[20px]">Reebok</p>
              <p class="text-xs font-medium text-grayDark4 leading-[20px] tracking-[-0.2px]">{{ $t('clothes') }}</p>
            </div>
          </a>
          <a href="#" class="flex items-center gap-[12px]">
            <div class="flex items-center justify-center w-[48px] h-[48px] rounded-full bg-gray">
              <img class="w-full max-w-full" src="@/assets/imgs/underArmour.svg" alt="" />
            </div>
            <div class="flex flex-col gap-[4px]">
              <p class="text-sm font-bold text-black leading-[20px]">Under Armour</p>
              <p class="text-xs font-medium text-grayDark4 leading-[20px] tracking-[-0.2px]">{{ $t('clothes') }}</p>
            </div>
          </a>
          <a href="#" class="flex items-center gap-[12px]">
            <div class="flex items-center justify-center w-[48px] h-[48px] rounded-full bg-gray">
              <img class="w-full max-w-full" src="@/assets/imgs/nike.svg" alt="" />
            </div>
            <div class="flex flex-col gap-[4px]">
              <p class="text-sm font-bold text-black leading-[20px]">Nike</p>
              <p class="text-xs font-medium text-grayDark4 leading-[20px] tracking-[-0.2px]">{{ $t('clothes') }}</p>
            </div>
          </a>
          <a href="#" class="flex items-center gap-[12px]">
            <div class="flex items-center justify-center w-[48px] h-[48px] rounded-full bg-gray">
              <img class="w-full max-w-full" src="@/assets/imgs/boss.svg" alt="" />
            </div>
            <div class="flex flex-col gap-[4px]">
              <p class="text-sm font-bold text-black leading-[20px]">Hugo Boss</p>
              <p class="text-xs font-medium text-grayDark4 leading-[20px] tracking-[-0.2px]">{{ $t('clothes') }}</p>
            </div>
          </a>
          <a href="#" class="flex items-center gap-[12px]">
            <div class="flex items-center justify-center w-[48px] h-[48px] rounded-full bg-gray">
              <img class="w-full max-w-full" src="@/assets/imgs/burbery.svg" alt="" />
            </div>
            <div class="flex flex-col gap-[4px]">
              <p class="text-sm font-bold text-black leading-[20px]">Burbery</p>
              <p class="text-xs font-medium text-grayDark4 leading-[20px] tracking-[-0.2px]">{{ $t('clothes') }}</p>
            </div>
          </a>
          <a href="#" class="flex items-center gap-[12px]">
            <div class="flex items-center justify-center w-[48px] h-[48px] rounded-full bg-gray">
              <img class="w-full max-w-full" src="@/assets/imgs/cartier.svg" alt="" />
            </div>
            <div class="flex flex-col gap-[4px]">
              <p class="text-sm font-bold text-black leading-[20px]">Cartier</p>
              <p class="text-xs font-medium text-grayDark4 leading-[20px] tracking-[-0.2px]">{{ $t('clothes') }}</p>
            </div>
          </a>
        </div>
      </div>

      <div class="flex flex-col gap-[16px]">
        <h6 class="text-sm font-bold text-black leading-[20px]">{{ $t('sales') }}</h6>
        <div class="w-full grid grid-cols-3">
          <div class="relative w-full flex flex-col shadow-sm">
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
                  <div
                    class="py-[6px] px-[8px] bg-greenLight rounded-[8px] text-green font-semibold text-sm leading-[20px] tracking-[-0.2px]"
                  >
                    -30%
                  </div>
                </div>
              </div>
              <div class="w-full mt-[4px]">
                <div class="flex flex-col gap-[8px]">
                  <p class="font-bold text-back text-sm leading-[20px]">Pull&Bear shrimp T-shirt</p>
                  <div class="flex flex-col">
                    <p class="text-grayDark font-semibold text-xs leading-[16px] previous-price before:bg-black tracking-[-0.1px]">
                      $69.90
                    </p>
                    <p class="text-black font-bold teext-[18px] leading-[26px] tracking-[-0.1px]">$49.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="relative w-full flex flex-col shadow-sm">
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
                  <div
                    class="py-[6px] px-[8px] bg-greenLight rounded-[8px] text-green font-semibold text-sm leading-[20px] tracking-[-0.2px]"
                  >
                    -30%
                  </div>
                </div>
              </div>
              <div class="w-full mt-[4px]">
                <div class="flex flex-col gap-[8px]">
                  <p class="font-bold text-back text-sm leading-[20px]">Pull&Bear shrimp T-shirt</p>
                  <div class="flex flex-col">
                    <p class="text-grayDark font-semibold text-xs leading-[16px] previous-price before:bg-black tracking-[-0.1px]">
                      $69.90
                    </p>
                    <p class="text-black font-bold teext-[18px] leading-[26px] tracking-[-0.1px]">$49.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="relative w-full flex flex-col shadow-sm">
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
                  <div
                    class="py-[6px] px-[8px] bg-greenLight rounded-[8px] text-green font-semibold text-sm leading-[20px] tracking-[-0.2px]"
                  >
                    -30%
                  </div>
                </div>
              </div>
              <div class="w-full mt-[4px]">
                <div class="flex flex-col gap-[8px]">
                  <p class="font-bold text-back text-sm leading-[20px]">Pull&Bear shrimp T-shirt</p>
                  <div class="flex flex-col">
                    <p class="text-grayDark font-semibold text-xs leading-[16px] previous-price before:bg-black tracking-[-0.1px]">
                      $69.90
                    </p>
                    <p class="text-black font-bold teext-[18px] leading-[26px] tracking-[-0.1px]">$49.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <RouterLink :to="{name: $Routes.SHOP}" class="text-orange flex items-center pt-[24px] border-t w-full justify-center mt-[24px] border-graylight gap-[8px]">
      <Icon icon="solar:bag-4-bold" class="text-xl text-orange" />
      {{ $t('view_all_shops') }}
    </RouterLink>
  </div>
</template>

<script lang="ts">
    export default {
        name: "ShopTab"
    }
</script>
