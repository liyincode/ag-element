import {App} from 'vue'
import AgButton from './Button.vue'

export default {
    install(app:App){
        app.component(AgButton.name, AgButton)
    }
}
