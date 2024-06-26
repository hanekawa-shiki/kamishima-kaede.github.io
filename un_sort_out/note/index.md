# 常用指令

```tex
ls              显示文件或目录
    -l          列出文件详细信息l(list)
    -a          列出当前目录下所有文件及目录，包括隐藏的a(all)
mkdir           创建目录
    -p          创建目录，若无父目录，则创建p(parent)
cd              切换目录
touch           创建空文件
echo            创建带有内容的文件。
cat             查看文件内容
cp              拷贝

mv              移动或重命名
rm              删除文件
    -r          递归删除，可删除子目录及文件
    -f          强制删除
find            在文件系统中搜索某文件
wc              统计文本中行数、字数、字符数
grep            在文本文件中查找某个字符串
rmdir           删除空目录
tree            树形结构显示目录，需要安装tree包
pwd             显示当前目录
ln              创建链接文件
more、less      分页显示文本文件内容
head、tail      显示文件头、尾内容
ctrl+alt+F1     命令行全屏模式
```
## `ubuntu`常用命令

```tex
uname -a              查看到Linux内核版本
apt-get update        升级安装包相关的命令,刷新可安装的软件列表(但是不做任何实际的安装动作)
apt-get upgrade       进行安装包的更新(软件版本的升级)
apt-get dist-upgrade  进行系统版本的升级(Ubuntu版本的升级)
do-release-upgrade    Ubuntu官方推荐的系统升级方式,若加参数-d还可以升级到开发版本,但会不稳定
```