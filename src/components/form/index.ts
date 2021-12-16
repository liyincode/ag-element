import {App} from 'vue'
import AgForm from './Form.vue'
import AgFormItem from './FormItem.vue'
import AgInput from './Input.vue'

export default {
    install(app:App){
        app.component(AgForm.name,AgForm)
        app.component(AgFormItem.name,AgFormItem)
        app.component(AgInput.name,AgInput)
    }
}
