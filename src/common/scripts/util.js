// 获取客户端ua信息
export function getUa() {
  const ua = window.navigator.userAgent.toLocaleLowerCase();
  return {
    isApple: !!ua.match(/(ipad|iphone|mac)/i),
    isAndroid: !!ua.match(/android/i),
    isWinPhone: !!ua.match(/MSIE/i),
    ios6: !!ua.match(/os 6.1/i)
  };
}
// 获取浏览器名称
export function getBrowserName() {
  const ua = window.navigator.userAgent.toLowerCase();
  let browser = '';
  if (window.ActiveXObject) {
    browser = 'IE';
  } else if (document.getBoxObjectFor || ua.indexOf('firefox') > -1) {
    browser = 'Firefox';
  } else if (ua.indexOf('micromessenger') > -1) {
    browser = 'WeiXin';
  } else if (ua.indexOf('baidu') !== -1) {
    browser = 'baidubrowser';
  } else if (ua.indexOf('ucbrowser') !== -1) {
    browser = 'ucbrowser';
  } else if (ua.indexOf('miuibrowser') > -1) {
    browser = 'miuibrowser';
  } else if (ua.indexOf('lbbrowser') > -1) {
    browser = 'lbbrowser';
  } else if (ua.indexOf('qqbrowser') > -1) {
    // 处理 qq浏览器  和qq 内置 兼容
    if (getUa().isAndroid) {
      if (ua.indexOf('webp') > -1) {
        browser = 'webpqqbrowser';
      } else {
        browser = 'qqbrowser';
      }
    } else {
      browser = 'qqbrowser';
    }
  // 处理ios 系统 qq内部  和qq浏览器
  } else if (ua.indexOf('qq') > -1) {
    browser = 'qq';
  } else if (ua.indexOf('qhbrowser') > -1) {
    browser = 'qhbrowser';
  } else if (ua.indexOf('hao123') > -1) {
    browser = 'hao123';
  } else if (ua.indexOf('sogoumobilebrowser') > -1) {
    browser = 'sogousearch';
  } else if (ua.indexOf('crios') > -1) {
    browser = 'Crios';
  } else if (ua.indexOf('chrome') > -1) {
    browser = 'Chrome';
  } else if (window.opera) {
    browser = 'Opera';
  } else if (ua.indexOf('safari') > -1) {
    browser = 'Safari';
  }
  return browser;
}
//  唤醒app
export function openApp(browserName, showConfirmModal, schemeUrl) {
  const platforms = getUa();
  if (browserName === 'Chrome') {
    if (platforms.isAndroid) {
      showConfirmModal(() => {
        setTimeout(() => {
          window.location.href = 'http://a.app.qq.com/o/simple.jsp?pkgname=com.wy.lingtouniao';
        }, 3000);
      });
    }
    // qq内部打开
  } else if (browserName === 'webpqqbrowser' || browserName === 'qq') {
    if (platforms.isAndroid) {
      showConfirmModal(() => {
        setTimeout(() => {
          window.location.href =
          `
          http://zhushou.360.cn
          /detail/index/soft_id/3198443
          ?recrefer=SE_D_%E9%A2%86%E5%A4%B4%E9%B8%9F%E7%90%86%E8%B4%A2
          `;
        }, 3000);
      });
    } else {
      showConfirmModal(() => {
        setTimeout(() => {
          window.location.href = 'http://a.app.qq.com/o/simple.jsp?pkgname=com.wy.lingtouniao';
        }, 3000);
      });
    }
  } else if (browserName === 'baidubrowser') {
    if (platforms.isAndroid) {
      window.location.href = `
      http://zhushou.360.cn
      /detail/index/soft_id/3198443
      ?recrefer=SE_D_%E9%A2%86%E5%A4%B4%E9%B8%9F%E7%90%86%E8%B4%A2
      `;
    } else {
      window.location.href = 'http://a.app.qq.com/o/simple.jsp?pkgname=com.wy.lingtouniao';
    }
  } else if (!browserName || browserName.length === 0) {
    if (platforms.isAndroid) {
      window.location.href = `
      http://zhushou.360.cn
      /detail/index/soft_id/3198443
      ?recrefer=SE_D_%E9%A2%86%E5%A4%B4%E9%B8%9F%E7%90%86%E8%B4%A2
      `;
    } else {
      window.location.href = 'http://a.app.qq.com/o/simple.jsp?pkgname=com.wy.lingtouniao';
    }
  } else {
    window.location.href = schemeUrl;
    if (platforms.isAndroid) {
      setTimeout(() => {
        window.location.href = `
        http://zhushou.360.cn
        /detail/index/soft_id/3198443
        ?recrefer=SE_D_%E9%A2%86%E5%A4%B4%E9%B8%9F%E7%90%86%E8%B4%A2
        `;
      }, 3000);
    } else {
      setTimeout(() => {
        window.location.href = 'http://a.app.qq.com/o/simple.jsp?pkgname=com.wy.lingtouniao';
      }, 3000);
    }
  }
}

// native 方法
// 获取getSessionKey
export function getSessionKey() {
  if (typeof window.LtnApp === 'undefined') {
    return sessionStorage.getItem('ltn_sessionKey');
  }
  const res = window.LtnApp.getSessionKey();
  return res.sid;
}
// 获取 用户信息
export function getUserInfo() {
  if (typeof window.LtnApp === 'undefined') {
    return {
      message: '该方法只支持 领投鸟app'
    };
  }
  const res = window.LtnApp.getUserInfo();
  return res.userInfo;
}

// 跳转登录
export function login(url) {
  if (typeof window.LtnApp === 'undefined') {
    window.location.href = `/native/user_login/user_login.html?url=${url}`;
  } else {
    window.LtnApp.login({
      url
    });
  }
}
// 登录超时
export function loginExpired(url) {
  if (typeof window.LtnApp === 'undefined') {
    window.location.href = `/native/user_login/user_login.html?url=${url}`;
  } else {
    window.LtnApp.loginExpired();
  }
}
// 跳转注册
export function signUp(url) {
  if (typeof window.LtnApp === 'undefined') {
    window.location.href = `/native/user_register/user_register.html?url=${url}`;
  } else {
    window.LtnApp.signUp({
      url
    });
  }
}
// 分享
export function share(config) {
  window.LtnApp.share(config);
}
// 跳转原生页面
export function gotoAppPage(type, shouldRemoveMe = 1) {
  window.LtnApp.gotoAppPage({
    type,
    shouldRemoveMe
  });
}
// 跳转 web 页面
export function gotoWebPage(url, shouldRemoveMe = 1) {
  window.LtnApp.gotoWebPage({
    url,
    shouldRemoveMe
  });
}
// 跳转标的详情
export function gotoProductDetail(productId, shouldRemoveMe = 1) {
  window.LtnApp.gotoProductDetail({
    productId,
    shouldRemoveMe
  });
}
// 修改顶部导航颜色
export function statusBarAppearanceUpdate(statusBarStyle) {
  window.LtnApp.statusBarAppearanceUpdate({
    statusBarStyle
  });
}
// 是否隐藏导航栏
export function setNavigationBarHidden(hidden) {
  window.LtnApp.setNavigationBarHidden({
    hidden
  });
}
