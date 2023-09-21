<template>
  <div class="w-full">
    <div class="w-full pt-[20px] pb-[25px] pl-[60px] select-none">
      <div class="w-full flex items-center flex-wrap gap-[8px]">
        <label v-if="editMode" class="flex items-center cursor-pointer">
          <input
            type="checkbox"
            value=""
            name="bordered-checkbox"
            class="absolute sr-only w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 peer"
          />
          <div
            class="px-[24px] border-graylight py-[10px] border rounded-[12px] peer peer-checked:bg-orange peer-checked:text-white text-xs text-black capitalize font-semibold leading-[20px] tracking-[-0.2px]"
          >
            {{ $t('film_&_entertainment') }}
          </div>
        </label>
        <label v-if="editMode" class="flex items-center cursor-pointer">
          <input
            type="checkbox"
            value=""
            name="bordered-checkbox"
            class="absolute sr-only w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 peer"
          />
          <div
            class="px-[24px] border-graylight py-[10px] border rounded-[12px] peer peer-checked:bg-orange peer-checked:text-white text-xs text-black capitalize font-semibold leading-[20px] tracking-[-0.2px]"
          >
            {{ $t('film_&_entertainment') }}
          </div>
        </label>
        <label v-if="editMode" class="flex items-center cursor-pointer">
          <input
            type="checkbox"
            value=""
            name="bordered-checkbox"
            class="absolute sr-only w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 peer"
          />
          <div
            class="px-[24px] border-graylight py-[10px] border rounded-[12px] peer peer-checked:bg-orange peer-checked:text-white text-xs text-black capitalize font-semibold leading-[20px] tracking-[-0.2px]"
          >
            {{ $t('film_&_entertainment') }}
          </div>
        </label>
        <label :class="editMode ? 'cursor-pointer' : ''" class="flex items-center">
          <input
            v-if="editMode"
            type="checkbox"
            value=""
            checked
            name="bordered-checkbox"
            class="absolute sr-only w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 peer"
          />
          <div
            :class="editMode ? 'border-graylight' : 'border-transparent'"
            class="px-[24px] py-[10px] border rounded-[12px] peer peer-checked:bg-orange peer-checked:text-white text-xs text-black capitalize font-semibold leading-[20px] tracking-[-0.2px]"
          >
            {{ $t('food_&_drinks') }}
          </div>
        </label>

        <label :class="editMode ? 'cursor-pointer' : ''" class="flex items-center">
          <input
            v-if="editMode"
            type="checkbox"
            value=""
            checked
            name="bordered-checkbox"
            class="absolute sr-only w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 peer"
          />
          <div
            :class="editMode ? 'border-graylight' : 'border-transparent'"
            class="px-[24px] py-[10px] border rounded-[12px] peer peer-checked:bg-orange peer-checked:text-white text-xs text-black capitalize font-semibold leading-[20px] tracking-[-0.2px]"
          >
            {{ $t('film_&_entertainment') }}
          </div>
        </label>

        <label v-if="editMode" class="flex items-center cursor-pointer">
          <input
            type="checkbox"
            value=""
            name="bordered-checkbox"
            class="absolute sr-only w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 peer"
          />
          <div
            class="px-[24px] border-graylight py-[10px] border rounded-[12px] peer peer-checked:bg-orange peer-checked:text-white text-xs text-black capitalize font-semibold leading-[20px] tracking-[-0.2px]"
          >
            {{ $t('film_&_entertainment') }}
          </div>
        </label>
        <label :class="editMode ? 'cursor-pointer' : ''" class="flex items-center">
          <input
            v-if="editMode"
            type="checkbox"
            value=""
            checked
            name="bordered-checkbox"
            class="absolute sr-only w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 peer"
          />
          <div
            :class="editMode ? 'border-graylight' : 'border-transparent'"
            class="px-[24px] py-[10px] border rounded-[12px] peer peer-checked:bg-orange peer-checked:text-white text-xs text-black capitalize font-semibold leading-[20px] tracking-[-0.2px]"
          >
            {{ $t('film_&_entertainment') }}
          </div>
        </label>

        <label v-if="editMode" class="flex items-center cursor-pointer">
          <input
            type="checkbox"
            value=""
            name="bordered-checkbox"
            class="absolute sr-only w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 peer"
          />
          <div
            class="px-[24px] border-graylight py-[10px] border rounded-[12px] peer peer-checked:bg-orange peer-checked:text-white text-xs text-black capitalize font-semibold leading-[20px] tracking-[-0.2px]"
          >
            {{ $t('film_&_entertainment') }}
          </div>
        </label>
        <label :class="editMode ? 'cursor-pointer' : ''" class="flex items-center">
          <input
            v-if="editMode"
            type="checkbox"
            value=""
            name="bordered-checkbox"
            class="absolute sr-only w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 peer"
          />
          <div
            :class="editMode ? 'border-graylight' : 'border-transparent'"
            class="px-[24px] py-[10px] border rounded-[12px] peer peer-checked:bg-orange peer-checked:text-white text-xs text-black capitalize font-semibold leading-[20px] tracking-[-0.2px]"
          >
            {{ $t('film_&_entertainment') }}
          </div>
        </label>

        <label v-if="editMode" class="flex items-center cursor-pointer">
          <input
            type="checkbox"
            value=""
            name="bordered-checkbox"
            class="absolute sr-only w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 peer"
          />
          <div
            class="px-[24px] border-graylight py-[10px] border rounded-[12px] peer peer-checked:bg-orange peer-checked:text-white text-xs text-black capitalize font-semibold leading-[20px] tracking-[-0.2px]"
          >
            {{ $t('film_&_entertainment') }}
          </div>
        </label>
        <label :class="editMode ? 'cursor-pointer' : ''" class="flex items-center">
          <input
            v-if="editMode"
            type="checkbox"
            value=""
            name="bordered-checkbox"
            class="absolute sr-only w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 peer"
          />
          <div
            :class="editMode ? 'border-graylight' : 'border-transparent'"
            class="px-[24px] py-[10px] border rounded-[12px] peer peer-checked:bg-orange peer-checked:text-white text-xs text-black capitalize font-semibold leading-[20px] tracking-[-0.2px]"
          >
            {{ $t('film_&_entertainment') }}
          </div>
        </label>

        <label v-if="editMode" class="flex items-center cursor-pointer">
          <input
            type="checkbox"
            value=""
            name="bordered-checkbox"
            class="absolute sr-only w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 peer"
          />
          <div
            class="px-[24px] border-graylight py-[10px] border rounded-[12px] peer peer-checked:bg-orange peer-checked:text-white text-xs text-black capitalize font-semibold leading-[20px] tracking-[-0.2px]"
          >
            {{ $t('film_&_entertainment') }}
          </div>
        </label>

        <label :class="editMode ? 'cursor-pointer' : ''" class="flex items-center">
          <input
            v-if="editMode"
            type="checkbox"
            value=""
            name="bordered-checkbox"
            class="absolute sr-only w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 peer"
          />
          <div
            :class="editMode ? 'border-graylight' : 'border-transparent'"
            class="px-[24px] py-[10px] border rounded-[12px] peer peer-checked:bg-orange peer-checked:text-white text-xs text-black capitalize font-semibold leading-[20px] tracking-[-0.2px]"
          >
            {{ $t('film_&_entertainment') }}
          </div>
        </label>
      </div>
    </div>

    <div v-if="!editMode" class="w-full pt-[16px] pb-[24px] pl-[60px] border-t-[1px] border-gray">
        <button
          type="button"
          @click="editInterests"
          class="py-[17px] px-[69px] border-[1px] border-orange rounded-[20px] group hover:bg-orange transition-all cursor-pointer"
        >
          <p class="text-pink text-sm font-semibold leading-[20px] tracking-[-0.2px] group-hover:text-white transition-all">
            {{ $t('edit') }}
          </p>
        </button>
      </div>

    <div v-if="editMode" class="w-full mt-[16px] pt-[16px] pb-[24px] pl-[60px] border-t-[1px] border-gray">
      <div class="flex gap-[8px] items-center">
        <button
          type="submit"
          class="py-[17px] px-[69px] border-[1px] border-graylight rounded-[20px] group hover:bg-orange transition-all cursor-pointer"
        >
          <p class="text-black text-sm font-semibold leading-[20px] tracking-[-0.2px] group-hover:text-white transition-all">
            {{ $t('save') }}
          </p>
        </button>

        <button
          type="button"
          @click="cancelEditInterests"
          class="py-[17px] px-[69px] border-[1px] border-graylight rounded-[20px] group hover:bg-pink transition-all cursor-pointer"
        >
          <p class="text-black text-sm font-semibold leading-[20px] tracking-[-0.2px] group-hover:text-white transition-all">
            {{ $t('cancel') }}
          </p>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Profile_Interests',
  data() {
    return {
      editMode: false as boolean,
    }
  },
  methods: {
    cancelEditInterests() {
        this.editMode = false
    },
    editInterests() {
        this.editMode = true
    }
  }
}
</script>
