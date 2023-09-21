<template>
  <div class="w-full my-[32px]">
    <div class="relative max-w-[1600px] mx-auto">
      <div class="w-full max-w-[664px] mx-auto px-[25px] sm:px-[0px]">
        <div class="flex flex-col w-full">
          <slot name="head"> </slot>

          <div class="w-full flex flex-col">
            <slot name="hero"></slot>

            <slot name="body"></slot>
          </div>
          <div class="mt-[100px] w-full">
            <slot name="suggestions"></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  // mounted() {
  //   this.accordion()
  // },
  methods: {
    // accordion() {
    //   const accordions = document.querySelectorAll('.accordion')
    //   if (accordions) {
    //     accordions.forEach(accordion => {
    //       const accordionMenu: HTMLElement = accordion.querySelector('.accordion-menu')
    //       const accordionArrow: HTMLElement = accordion.querySelector('.chevron')
    //       if (accordionMenu && accordionArrow) {
    //         accordionMenu.style.display = 'none'
    //         accordionArrow.style.transform = 'rotate(180deg)'
    //       }
    //       accordion.addEventListener('click', e => {
    //         if (!e.target.closest('.accordion-menu')) {
    //           if (accordionMenu.style.display === 'none') {
    //             accordionMenu.style.display = 'block'
    //             accordionArrow.style.transform = 'rotate(0deg)'
    //           } else {
    //             accordionMenu.style.display = 'none'
    //             accordionArrow.style.transform = 'rotate(180deg)'
    //           }
    //         }
    //       })
    //     })
    //   }
    // }
  }
}
</script>
