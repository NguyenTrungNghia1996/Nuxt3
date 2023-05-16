<script setup>
import Editor from "@tinymce/tinymce-vue";
import "tinymce/tinymce";
import "tinymce/themes/silver";
import "tinymce/icons/default";
import "tinymce/skins/ui/oxide/skin.css";
import "tinymce/plugins/image";
import "tinymce/plugins/media";
import "tinymce/plugins/lists";
import "tinymce/plugins/advlist";
import "tinymce/plugins/link";
import "tinymce/plugins/autolink";
import "tinymce/plugins/lists";
import "tinymce/plugins/link";
import "tinymce/plugins/image";
import "tinymce/plugins/fullscreen";
import "tinymce/plugins/preview";
import "tinymce/plugins/anchor";
import "tinymce/plugins/insertdatetime";
import "tinymce/plugins/media";
import "tinymce/plugins/table";
import "tinymce/plugins/template";
import "tinymce/plugins/hr";
import "tinymce/plugins/toc";
import "tinymce/plugins/textpattern";
import "tinymce/plugins/noneditable";
import "tinymce/plugins/paste";
import "tinymce/plugins/save";

function onPickerCallback(cb, value, meta) {
  var input = document.createElement("input");
  input.setAttribute("type", "file");
  let self = this;
  console.log("todo: update logic upload file");
  input.onchange = function () {
    var file = this.files[0];
    const reader = new FileReader();
    reader.onload = function (e) {
      const blob = new Blob([new Uint8Array(e.target.result)], {
        type: file.type,
      });
      // to do: update new api
      // self.$API
      //   .upload_s3(blob.name, new File([blob], blob.name), { encoding: "blob", content_type: blob.type })
      //   .then(resp => cb(resp))
      //   .catch(error => console.log(error))
    };
    reader.readAsArrayBuffer(file);
    return;
  };
  input.click();
}
function onImageUploadHandler(blobInfo, success, failure, progress) {
  const blob = blobInfo.blob();
  console.log("todo: update logic upload file");
  // this.$API
  //   .upload_s3(blob.name, new File([blob], blob.name), { encoding: "blob", content_type: blob.type })
  //   .then(resp => success(resp))
  //   .catch(error => failure(error))
}
const props = defineProps({
  height: {
    type: String,
    default: "100",
    required: true,
  },
  modelValue: {
    type: String,
    default: "",
  },
  plugins: {
    type: [String, Array],
    default:
      "advlist anchor autolink  hr image  link lists media paste preview  save template",
  },
  toolbar: {
    type: [String, Array],
    default:
      "undo redo fontselect forecolor | bold italic underline | alignleft aligncenter alignright alignjustify | outdent indent | link image media | fullscreen tiny_mce_wiris_formulaEditor tiny_mce_fmed emoticons",
  },
});
const emit = defineEmits(["update:modelValue"]);
const init = ref({
  height: props.height,
  menubar: false,
  statusbar: false,
  skin: false,
  content_css: false,
  content_style: "audio,video,img{display:inline;padding:2px}",
  plugins: props.plugins,
  toolbar: props.toolbar,
  file_picker_types: "file image media",
  file_picker_callback: onPickerCallback,
  images_upload_handler: onImageUploadHandler,
});
const { modelValue } = toRefs(props);
const editorValue = ref(modelValue.value);

watch(modelValue, (newValue) => {
  editorValue.value = newValue;
});

watch(editorValue, (newValue) => {
  emit("update:modelValue", newValue);
});
</script>

<template>
  <editor v-model="editorValue" :init="init" class="border-1 p-2" />
</template>
