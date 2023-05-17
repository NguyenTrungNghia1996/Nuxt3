<template>
  <div>
    <div class="text-center p-4" ref="el" style="color: var(--color); font-size: var(--font_size); font-style:var(--font_style); font-weight:var(--font_weight)">Sample text</div>

    <div class="grid grid-cols-5 gap-10">
      <div>
        <div>Pick color:{{ color }}</div>
        <client-only>
          <el-color-picker class="!m-2" v-model="color_picker" />
        </client-only>
      </div>
      <div class="">
        <span class="demonstration">Pick size: {{ font_size }}</span>
        <el-slider class="m-2" v-model="font_size_picker" />
      </div>
      <div class="">
        <span class="demonstration">Font Style: {{ font_style }}</span>
        <client-only>
          <el-select v-model="font_style_picker" class="m-2" placeholder="Font Style">
            <el-option v-for="item in font_style_options" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
        </client-only>
      </div>
      <div class="">
        <span class="demonstration">Pick weight: {{ font_weight }}</span>
        <el-slider class="m-2" v-model="font_weight_picker" :step="100" show-stops :max="1000" />
      </div>
    </div>
  </div>
</template>
<script setup>
import { useCssVar } from "@vueuse/core"

const css_var = ref(null)
const color = useCssVar("--color", css_var, { initialValue: "#000000" })
const color_picker = ref("#000000")
watch(color_picker, () => {
  color.value = color_picker.value
})

const css_var_1 = ref(null)
const font_size = useCssVar("--font_size", css_var_1, { initialValue: "10px" })
const font_size_picker = ref(10)
watch(font_size_picker, () => {
  font_size.value = font_size_picker.value + "px"
})

const css_var_2 = ref(null)
const font_style_options = ref([
  {
    value: "normal",
    label: "Normal",
  },
  {
    value: "italic",
    label: "Italic",
  },
  {
    value: "oblique",
    label: "Oblique",
  },
])
const font_style_picker = ref("normal")
const font_style = useCssVar("--font_style", css_var_2, { initialValue: "normal" })
watch(font_style_picker, () => {
  font_style.value = font_style_picker.value
})

const css_var_3 = ref(null)
const font_weight_picker = ref(100)
const font_weight = useCssVar("--font_weight", css_var_3, { initialValue: "100" })
watch(font_weight_picker, () => {
  font_weight.value = font_weight_picker.value
})
</script>
