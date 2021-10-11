## 一、todoList 案例相关知识点

## 二、github 搜索案例相关知识点

## 三、路由的基本使用

## 四、路由组件与一般组件的区别

    1.写法不同
        一般组件：<Demo/>
        路由组件：<Route path="/demo" component={Demo}>
    2.存放位置不同：
        一般组件：components
        路由组件：pages
    3.接收到的props不同：
        一般组件：写组件标签时传递的什么，就能收到的什么
        路由组件：
                history:
                    go: ƒ go(n)
                    goBack: ƒ goBack()
                    goForward: ƒ goForward()
                    push: ƒ push(path, state)
                    replace: ƒ replace(path, state)
                location:
                    pathname: "/about"
                    search: ""
                    state: undefined
                match:
                    params: {}
                    path: "/about"
                    url: "/about"

## 五、NavLink 与封装 NavLink

    1.NavLink可以实现路由链接的高亮，通过activeClassName指定样式名
    2.标签体内容是一个特殊的标签属性
    3.通过this.props.children可以获取标签体内容

## 六、Switch 的使用

        1.通常情况下，path和component是一一对应的关系
        2.Switch可以提高路由匹配效率（单一匹配）

## 七、解决多级路径刷新页面丢失样式的问题

        1.public/index.html中引入样式时不写 ./  写 / （常用）
        2.public/index.html中引入样式时不写 ./  写 %PUBLIC_URL%  （常用）
        3.路由使用HashRouter

## 八、路由的严格匹配与模糊匹配

        1.默认使用的是模糊匹配（简单记：【输入的路径】必须包含【匹配的路径】，且顺序要一致）
        2.开启严格匹配：<Route exact={true} path="/about">
        3.严格匹配不要随便开启，需要再开，避免开始后会导致无法继续匹配二级路由

## 九、Redirect 的使用

            1.一般卸载所有路由注册的最下方，当所有路由无法匹配时，跳转到Redirect指定的路由
            2.具体编码:
                <Route exact={true} path="/about" component={About}></Route>
                <Route exact={true} path="/home" component={Home}></Route>
                <Redirect to="/about" />

## 十、向路由组件传递参数

        1.params参数
            路由链接（携带参数）:<Link to="/home/message/detail/18">{i.title}</Link>
            注册路由（声明接收）：<Route path="/home/message/detail/:id/:title" component={Detail}/>
            接收参数：const {id,title} = this.props.match.params
