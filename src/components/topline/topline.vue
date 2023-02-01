<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="c-topline">
        <div class="x-container topline_container">
            <div class="headline">
                <slot name="headline"></slot>
            </div>
            <div class="content content_black">
                <slot name="content" v-if="$slots.content"></slot>
            </div>
        </div>
    </div>
</template>

<style lang="scss" src="./topline.scss" scoped></style>
