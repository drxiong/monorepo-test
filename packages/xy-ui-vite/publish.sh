npm config get registry
npm config set registry=http://registry.npmjs.org
# echo '请进行登录相关操作'
# npm login
echo "---publishing---"
npm publish
npm config set registry=https://registry.npmmirror.com
echo "发布完成"
exit