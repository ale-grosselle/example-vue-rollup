<template>
    <div class="btn waves-effect waves-light" @click="onclick">
        <slot></slot>
        <i v-if="materialIconName" class="material-icons" :class="cssClassIcon">
            {{materialIconName}}
        </i>
    </div>
</template>

<script type="application/javascript">
// @flow

//Button has only css, not JS.
import ButtonVanilla from "vanilla/genericComponent/button";
export default {
	// declare the props
	props: {
		materialIconName: String,
		iconClass: {
			type: String,
			default: ""
		},
		iconPosition: {
			type: String,
			validator: function(value: string): boolean {
				return value === "left" || value === "right";
			},
			default: "left"
		}
	},
	computed: {
		cssClassIcon(): string {
			return this.iconClass + " " + this.iconPosition;
		}
	},
	methods: {
		onclick(e: Event) {
			this.$emit("click", e);
		}
	},
	mounted: function() {
		//Init button vanilla (add scss)
		new ButtonVanilla();
	}
};
</script>

<style lang="scss">
</style>
