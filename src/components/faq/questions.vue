<template>
  <div class="w-full flex flex-col gap-[12px]" id="questionsMain">
    <div v-for="(question, index) in questions" :key="index" :id="question.id" class="w-full px-[24px] bg-white shadow-lg rounded-[12px]">
      <div @click="openQuestion(question.id)" class="pb-[20px] pt-[24px] cursor-pointer w-full flex items-center justify-between">
        <p class="text-sm font-bold text-black leading-[20px]">{{ question.title }}</p>
        <Icon v-if="activeQuestion !== question.id" icon="icon-park-solid:add-one" class="text-lg text-orange cursor-pointer" />
        <Icon v-if="activeQuestion === question.id" icon="ep:remove-filled" class="text-lg text-black cursor-pointer" />
      </div>
      <div v-if="activeQuestion === question.id" class="w-full flex flex-col pb-[24px] gap-[16px]">
        <div class="border-t border-b border-gray py-[16px]">
          <p class="text-xs font-normal leading-[20px] tracking-[0.2px] text-grayDark4">{{ question.text }}</p>
        </div>
        <div class="w-full flex items-center justify-between">
          <p class="text-xs font-medium text-black leading-[20px] tracking-[-0.2px]">{{ $t('does_this_help_you') }}?</p>
          <div class="flex items-center gap-[12px]">
            <Icon icon="iconamoon:like-fill" class="cursor-pointer text-lg text-grayDark4" />
            <Icon icon="iconamoon:dislike-fill" class="cursor-pointer text-lg text-grayDark4" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Questions',
  props: {
    questions: {
      required: true,
      type: Object
    }
  },
  data() {
    return {
      activeQuestion: null as number | null
    }
  },
  methods: {
    openQuestion(id: number) {
      if (this.activeQuestion !== null && this.activeQuestion === id) {
        this.activeQuestion = null
      } else {
        this.activeQuestion = id
      }
    }
  }
}
</script>
