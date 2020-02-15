# 尝试 github 上传大文件

### 第一次，1G 成功

> 生成 1024 个 1MB 的文件

```sh
node index.js
```

### 创建仓库，并上传

```sh
    git init     				# 本地项目根目录下执行这个命令
    git add .    				# 将项目的所有文件添加到仓库中
    git commit -m "注释语句"
    curl -u 'roy-lau' https://api.github.com/user/repos -d '{"name":"github-bigfiles"}'
    git remote add origin git@github.com:roy-lau/github-bigfiles.git
    git push origin master:master
```
