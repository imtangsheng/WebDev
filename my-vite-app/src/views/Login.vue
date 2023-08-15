<script setup lang="ts">
import { reactive, ref, onMounted, toRaw } from "vue";
import { useRouter } from "vue-router";
import { ElMessage } from 'element-plus'
import type { FormInstance} from 'element-plus'
// import md5 from 'blueimp-md5';

import {login} from '../api/index.d'


const router = useRouter();
const ruleFormRef = ref<FormInstance>()
const labelPosition: any = ref("right");

const formLabelAlign = reactive({
  name: "",
  pwd: "",
});

const loginPosition = reactive({
  left: "0",
  top: "0",
});

const onSubmit = async () => {
  const u_info = toRaw(formLabelAlign);
  // const _name = md5(u_info.name);
  // const _pwd = md5(u_info.pwd);
  const _name = u_info.name;
  const _pwd = u_info.pwd;
  const result = await login({username:_name, password:_pwd});
  console.log(result)
  

};

const _drawBG = () => {
  if ((window as any).particlesJS) {
    (window as any).particlesJS("loginBG", {
      particles: {
        number: {
          value: 100,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        color: {
          value: "#ffffff",
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#000000",
          },
          polygon: {
            nb_sides: 5,
          },
        },
        opacity: {
          value: 0.5,
          random: false,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false,
          },
        },
        size: {
          value: 5,
          random: true,
          anim: {
            enable: false,
            speed: 40,
            size_min: 0.1,
            sync: false,
          },
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#76CFF9",
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 6,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200,
          },
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "repulse",
          },
          onclick: {
            enable: true,
            mode: "push",
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 200,
            line_linked: {
              opacity: 1,
            },
          },
          bubble: {
            distance: 200,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3,
          },
          repulse: {
            distance: 200,
          },
          push: {
            particles_nb: 4,
          },
          remove: {
            particles_nb: 2,
          },
        },
      },
      retina_detect: true,
      config_demo: {
        hide_card: false,
        background_color: "#fff",
        background_image: "",
        background_position: "50% 50%",
        background_repeat: "no-repeat",
        background_size: "cover",
      },
    });
  }
};

const _resize = () => {
  loginPosition.left = `${Math.floor((document.body.offsetWidth - 350) / 2)}px`;
  loginPosition.top = `${
    Math.floor((document.body.offsetHeight - 270) / 2) - 50
  }px`;
};

onMounted(() => {
  _resize();
  _drawBG();

  window.addEventListener("resize", _resize);
});
</script>

<template>
  <div
    style="position: fixed; left: 0; right: 0; top: 0; bottom: 0"
    id="loginBG"
  >
    <div class="login-m" :style="loginPosition">
      <div class="login-t">大仓机器人后台管理系统</div>
      <div style="margin: 12px 0 32px 0">
        <el-form
          :label-position="labelPosition"
          label-width="100px"
          :model="formLabelAlign"
          style="max-width: 300px"
          ref="ruleFormRef"
        >
          <el-form-item label="用户名">
            <el-input v-model="formLabelAlign.name" placeholder="请输入用户名" />
          </el-form-item>
          <el-form-item label="密码">
            <el-input 
              v-model="formLabelAlign.pwd" 
              type="password" 
              placeholder="请输入用户密码"
              @keyup.enter="onSubmit"
            />
          </el-form-item>
        </el-form>
      </div>
      <div style="text-align: center">
        <el-button
          @click="onSubmit"
          style="width: 280px; height: 40px; font-size: 16px" 
          type="primary"
        >
          登录
        </el-button>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* .login-wrap {
  left: 0;
  right: 0;
  text-align: center;
  position: absolute;
  z-index: 2;
} */
.login-m {
  width: 350px;
  height: 270px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 8px;
  position: absolute;
}
.login-t {
  text-align: center;
  font-size: 22px;
  color: #606266;
  padding: 24px 0;
  font-weight: bold;
}
</style>
