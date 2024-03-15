import{_ as a}from"./BasicForm.vue_vue_type_script_setup_true_lang-BME4M3V0.js";import"./BasicForm.vue_vue_type_style_index_0_lang-rcXGZlVm.js";import"./componentMap-xQ68uHIf.js";import{u as r}from"./useForm-B5BTWHx4.js";import{C as i}from"./entry/index-BS_vH3S4-1710492679851.js";import{P as d}from"./index-Db-rmeQw.js";import{d as f,Z as u,a8 as b,a9 as l,k as t,u as e}from"./vue-COhTiP8A.js";import"./FormItem.vue_vue_type_script_lang-CU9FYwNP.js";import"./helper-HFtwS6mJ.js";import"./antd-D1Pawy5U.js";import"./index-CrGRHWhJ.js";import"./useWindowSizeFn-DFkqTy3L.js";import"./useFormItem-BQ20sB9v.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-CRZvcQF4.js";import"./uuid-D0SLUWHI.js";import"./useSortable-skQdmOEv.js";import"./download-CU-9Oc2Q.js";import"./base64Conver-bBv-IO2K.js";import"./index-DtPUyJcu.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-BsIwwtl_.js";import"./copyTextToClipboard-hMH5xuO5.js";import"./index-D65ROKLH.js";import"./index-Cuf0UQK5.js";import"./useContentViewHeight-DszaP9Xd.js";import"./onMountedOrActivated-GpUdBAv_.js";const z=f({__name:"AdvancedForm",setup(h){const p=()=>[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},componentProps:{placeholder:"自定义placeholder",onChange:o=>{}}},{field:"field2",component:"Input",label:"字段2",colProps:{span:8}},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8}},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"字段5",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}}];function s(){return[{field:"field10",component:"Input",label:"字段10",colProps:{span:8}},{field:"field11",component:"Input",label:"字段11",colProps:{span:8}},{field:"field12",component:"Input",label:"字段12",colProps:{span:8}},{field:"field13",component:"Input",label:"字段13",colProps:{span:8}}]}const[c]=r({labelWidth:120,schemas:p(),actionColOptions:{span:24},compact:!0,showAdvancedButton:!0}),n=[];for(let o=14;o<30;o++)n.push({field:"field"+o,component:"Input",label:"字段"+o,colProps:{span:8}});const[m]=r({labelWidth:120,schemas:[...p(),...s(),{field:"",component:"Divider",label:"更多字段"},...n],actionColOptions:{span:24},compact:!0,showAdvancedButton:!0,alwaysShowLines:2});return(o,P)=>(u(),b(e(d),{title:"可折叠表单示例"},{default:l(()=>[t(e(i),{title:"基础收缩示例"},{default:l(()=>[t(e(a),{onRegister:e(c)},null,8,["onRegister"])]),_:1}),t(e(i),{title:"超过3行自动收起，折叠时保留2行",class:"mt-4"},{default:l(()=>[t(e(a),{onRegister:e(m)},null,8,["onRegister"])]),_:1})]),_:1}))}});export{z as default};