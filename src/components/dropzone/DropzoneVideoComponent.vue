<template>
  <div>
    <div ref="dropzone" class="dropzone">
      <div
        class="dz-default dz-message max-w-max flex items-center gap-[12px] px-[13px] py-[12px] rounded-[16px] border-[1px] border-graylight cursor-pointer">
        <Icon icon="basil:video-outline" class="icon text-black text-lg" />
        <p class="text-sm text-grayDark font-medium leading-[20px] tracking-[-0.2px]">{{ acceptedFilesCount }} / {{maxFiles }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Dropzone from 'dropzone'

export default {
  data() {
    return {
      dropzone: null as Dropzone | null,
      acceptedFilesCount: 0 as number,
      maxFiles: 1 as number
    }
  },
  methods: {
    initializeDropzone() {
      const vm = this
      Dropzone.autoDiscover = false
      this.dropzone = new Dropzone(this.$refs.dropzone, {
        acceptedFiles: 'video/*',
        addRemoveLinks: true,
        previewsContainer: '.dropzone-previews',
        previewTemplate: `
          <div class="dz-preview dz-file-preview relative group">
            <div class="dz-details">
              <div class="w-full flex items-center justify-center w-[118px] rounded-[16px] bg-graylight">
                <img class="w-[50%] h-[118px]" src="../../src/assets/imgs/Video.svg"/>
                </div>
            </div>
            <div class="absolute top-0 right-0 rounded-full w-[40px] h-[40px] flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition-all dz-remove bg-black dz-remove" data-dz-remove>
              <button>
                <svg class="" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 3.98667C11.78 3.76667 9.54667 3.65334 7.32 3.65334C6 3.65334 4.68 3.72 3.36 3.85334L2 3.98667" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M5.66669 3.31334L5.81335 2.44C5.92002 1.80667 6.00002 1.33334 7.12669 1.33334H8.87335C10 1.33334 10.0867 1.83334 10.1867 2.44667L10.3334 3.31334" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M12.5667 6.09333L12.1334 12.8067C12.06 13.8533 12 14.6667 10.14 14.6667H5.86002C4.00002 14.6667 3.94002 13.8533 3.86668 12.8067L3.43335 6.09333" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M6.88666 11H9.10666" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M6.33331 8.33334H9.66665" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        `,
        url: 'https://asd.com',
        maxFiles: this.maxFiles,
        dictDefaultMessage: '',
        init: function () {
          this.on('addedfile', function (file) {
            if (this.files.length > this.options.maxFiles) {
              this.removeFile(file)
            }
            vm.updateFileCount()
          })
          this.on('removedfile', function (file) {
            vm.updateFileCount()
          })
          this.on('success', function (file, response) {
            // Handle successful upload if needed
          })
        }
      })

      // Event delegation for remove button click
      this.$refs.dropzone.addEventListener('click', event => {
        if (event.target.closest('.dz-remove')) {
          const previewElement = event.target.closest('.dz-preview')
          if (previewElement) {
            const file = previewElement.querySelector('img[data-dz-thumbnail]').__file
            if (file) {
              this.removeFile(file)
            }
          }
        }
      })
    },
    destroyDropzone() {
      if (this.dropzone) {
        this.dropzone.destroy()
      }
    },
    removeFile(file) {
      if (this.dropzone) {
        this.dropzone.removeFile(file)
      }
      this.updateFileCount()
    },
    updateFileCount() {
      // Use a timeout to ensure the DOM has been updated
      setTimeout(() => {
        this.acceptedFilesCount = this.dropzone.getAcceptedFiles().length
      }, 0)
    }
  },
  mounted() {
    this.initializeDropzone()
  },
  destroyed() {
    this.destroyDropzone()
  },
}
</script>

<style>
.dropzone-previews a.dz-remove {
  display: none;
}
</style>



