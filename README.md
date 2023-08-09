## 开发环境安装与配置

### 创建项目
需要先安装Node.js环境,然后通过npm安装Vue脚手架:
```
npm install -g @vue/cli
```
1. 安装Node.js环境
   需要安装最新版本的Node.js,可以去官网下载安装包进行安装。
2. 安装yarn
   可以使用yarn或者npm作为包管理器,如果要安装yarn:
   ```
   npm install -g yarn
   ```
3. 安装Vite
   ```
   npm install -g vite
   ```
   或
   ```
   yarn global add vite
   ```
4. 创建项目
   ```
   mkdir my-vite-app
   cd my-vite-app
   ```
5. 初始化项目
   ```
   yarn init @vitejs/app
   ```
   选择框架比如vue、react等。
6. 安装依赖
   ```
   yarn
   ```
7. 启动开发服务器
   ```
   yarn dev
   ```
8. 开始开发
在src目录下开发vue或react应用。
9. 构建生产版本
   ```
   yarn build
   ```
输出的结果在dist目录。

### 安装依赖

1. 安装所需路由配置依赖
```
npm install vue-router
```
