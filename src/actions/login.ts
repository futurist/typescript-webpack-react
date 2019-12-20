import {prefix, apiEndpoint} from '../const'

export default {
    name: 'login',
    store: {
        userInfo: {}
    },
    actions: {
        // 用户信息
        getUserInfo: { url: `${apiEndpoint}/api/login`, },
        logout: { url: `${apiEndpoint}/api/logout`, },
        // 是否登录
        isLogin: { url: `${apiEndpoint}/api/isLogin` },
        // 成员列表
        getMemberList: { url: `${apiEndpoint}/api/memberList` }
    }
}
