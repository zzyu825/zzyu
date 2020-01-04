// git 分布式版本控制系统
// 分布式 =》 集中式
// 版本控制
// git config --list 或者用户-zzyu-.gitconfig 查看已有的配置
// git config --global user.name/user.email "" 设置全局配置

// git init 本地仓库初始化 （rm -rf .git 强制删库）文件夹中没有的话点查看-隐藏项目
// git add index.html 将文件放入暂存区 暂存区作用（1、为文件创建索引 2、进行分类）
// git commit -m 'project init' 作为一个版本提交到本地仓库
// -m参数是输入提交信息的 -am参数就是可以把还没有执行add命令的修改一起提交
// git add . 所有文件全部放入暂存区
// git status 