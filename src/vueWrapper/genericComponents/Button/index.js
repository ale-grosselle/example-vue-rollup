// @flow
import BtnComponent from "vueWrapper/genericComponents/Button/Button.vue";

const name = "th-button";

BtnComponent.install = function install(Vue) {
	Vue.component(name, BtnComponent);
};

/**
 * @name Button
 * @description
 * This component implements button for Vue.js library
 * The name of the component is **v-button** :
 *
 * You can see all css classes to use here: http://materializecss.com/buttons.html
 *
 * ** Additional css class **:
 * Please see Vanilla documentation for additional class.
 *
 *  ** Component  props: **
 * - materialIconName: string, the name of the material icon to use e.g 'add', icon list here: http://materializecss.com/icons.html
 * - iconPosition: string, accepts only two values, left or right. It defines the icon position
 * - iconClass: string, css class for icon. Example: 'left th-icon'
 *
 * ** Component  event: **
 * - click: expose event click
 *
 * @example
 * <v-button>Text Button</v-button>
 *
 * @example
 * <v-button class="btn-large">Text Button</v-button>
 *
 * @example
 * <div id="app">
 *     <v-button icon-position="right" material-icon-name="add" @click="onClick" class="btn-large fc-gray">
 *         Button
 *     </v-button>
 * </div>
 *
 */
export default BtnComponent;
