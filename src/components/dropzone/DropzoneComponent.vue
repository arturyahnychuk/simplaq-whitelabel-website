<template>
  <div>
    <div ref="dropzone" class="dropzone">
      <div
        class="dz-default dz-message max-w-max flex items-center gap-[12px] px-[13px] py-[12px] rounded-[16px] border-[1px] border-graylight cursor-pointer">
        <Icon icon="ion:image-outline" class="icon text-black text-lg" />
        <p class="text-sm text-grayDark font-medium leading-[20px] tracking-[-0.2px]">{{ acceptedFilesCount }} / {{
          maxFiles }}</p>
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
      maxFiles: 5 as number,
    }
  },
  methods: {
    initializeDropzone() {
      const vm = this
      Dropzone.autoDiscover = false
      this.dropzone = new Dropzone(this.$refs.dropzone, {
        acceptedFiles: 'image/*',
        addRemoveLinks: true,
        previewsContainer: '.dropzone-previews',
        previewTemplate: `
          <div class="dz-preview dz-file-preview relative group">
            <div class="dz-details">
              <img class="rounded-[12px] max-w-[118px] w-full" data-dz-thumbnail />
            </div>
            <div class="absolute top-0 right-0 rounded-full w-[40px] h-[40px] flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition-all dz-remove bg-black dz-remove" data-dz-remove>
              <button class="text-white">
                X
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
