<template>
	<div class="all-container">
		<van-nav-bar 
			:title="title" 
			left-text="返回" 
			left-arrow 
			@click-left="onClickLeft" 
		/>
		<router-view></router-view>
	</div>
</template>

<script>
	import { computed } from '@vue/runtime-core'
    import { useRouter, useRoute } from 'vue-router'
    export default {
        setup(){
            const router = useRouter()
			const route = useRoute()
            function onClickLeft(){
				if(route.name !== 'Home'){
					router.go(-1)
				}
            }
            let title = computed(() => route.meta.describe)
            return {
                onClickLeft,
                title
            }
        }
    }
</script>

<style>
	.all-container {
		max-width: 5in;
		min-width: 3in;
	}
</style>