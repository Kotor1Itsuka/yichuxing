<template>
	 <van-cell-group inset>
        <van-field v-model="sms" center clearable placeholder="请输入筛选的时间或关键字">
            <template #button>
                <van-button size="small" type="primary">点击筛选</van-button>
            </template>
        </van-field>
    </van-cell-group>
	<h2>被举报的用户</h2>
	<van-collapse v-model="activeNames">
		<van-collapse-item title="用户1" name="1">
			<van-card  desc="描述信息" title="被举报的用户1"
				thumb="https://img0.baidu.com/it/u=2299948213,287352139&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=506">
				<template #footer>
					<van-button size="small" type="warning">禁言</van-button>
					<van-button size="small" type="danger">封禁</van-button>
				</template>
			</van-card>
		</van-collapse-item>
		<van-collapse-item title="用户2" name="2">
			<van-card  desc="描述信息" title="被举报的用户2"
				thumb="https://img0.baidu.com/it/u=2299948213,287352139&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=506">
				<template #footer>
					<van-button size="small" type="warning">禁言</van-button>
					<van-button size="small" type="danger">封禁</van-button>
				</template>
			</van-card>
		</van-collapse-item>
		<van-collapse-item title="用户3" name="3">
			<van-card  desc="描述信息" title="被举报的用户3"
				thumb="https://img0.baidu.com/it/u=2299948213,287352139&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=506">
				<template #footer>
					<van-button size="small" type="warning">禁言</van-button>
					<van-button size="small" type="danger">封禁</van-button>
				</template>
			</van-card>
		</van-collapse-item>
	</van-collapse>
	<h2>被举报的帖子</h2>
	<van-collapse v-model="activeNames1">
		<van-collapse-item title="帖子1" name="1">
			<van-card  desc="描述信息" title="被举报的帖子1"
				thumb="https://img1.baidu.com/it/u=2524643605,2452634879&fm=253&fmt=auto&app=138&f=JPEG?w=515&h=500">
				<template #footer>
					<van-button size="small" type="warning">删除</van-button>
					<van-button size="small" type="danger">忽略</van-button>
				</template>
			</van-card>
		</van-collapse-item>
		<van-collapse-item title="帖子2" name="2">
			<van-card  desc="描述信息" title="被举报的帖子2"
				thumb="https://img1.baidu.com/it/u=2524643605,2452634879&fm=253&fmt=auto&app=138&f=JPEG?w=515&h=500">
				<template #footer>
					<van-button size="small" type="warning">删除</van-button>
					<van-button size="small" type="danger">忽略</van-button>
				</template>
			</van-card>
		</van-collapse-item>
		<van-collapse-item title="帖子3" name="3">
			<van-card  desc="描述信息" title="被举报的帖子3"
				thumb="https://img1.baidu.com/it/u=2524643605,2452634879&fm=253&fmt=auto&app=138&f=JPEG?w=515&h=500">
				<template #footer>
					<van-button size="small" type="warning">删除</van-button>
					<van-button size="small" type="danger">忽略</van-button>
				</template>
			</van-card>
		</van-collapse-item>
	</van-collapse>
</template>

<script>
	import {
		ref
	} from 'vue'
	export default {
		setup() {
			const activeNames = ref(['0']);
			const activeNames1 = ref(['0']);
			return {
				activeNames,
				activeNames1
			};
		}

	}
</script>

<style scoped>
	h2 {
		text-align: center;
	}
</style>