<template>
    <div class="w-full grid grid-cols-[auto,324px] gap-[16px] mb-[32px]">
        <div class="relative overflow-hidden w-full rounded-[32px] bg-gray px-[24px] py-[28px]">
            <slot name="main"></slot>
            <img class="absolute left-0 bottom-0" src="@/assets/imgs/divider.svg" alt="">

        </div>
        <div class="w-full rounded-[32px] bg-gray px-[24px] py-[28px]">
            <slot name="articles"></slot>
        </div>
    </div>
</template>