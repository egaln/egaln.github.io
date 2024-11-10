/*滚动到
    // JavaScript代码，用于处理点击导航链接后页面滚动到相应功能部分
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault(); // 阻止默认行为，即不跳转到链接的锚点处
            const targetId = this.getAttribute('href').substring(1); // 获取链接的锚点ID，去除开头的#
            const targetElement = document.getElementById(targetId); // 根据ID获取目标元素
            if (targetElement) {
                // 计算目标元素距离文档顶部的距离，并滚动页面到该位置
                const offsetTop = targetElement.offsetTop;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth' // 平滑滚动
                });
            }
        });
    });
*/
/*不影响点logo显示首页但点登录会影响main中的section显示
        // JavaScript代码，用于处理点击导航链接后显示相应的功能内容
        document.querySelectorAll('nav a').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault(); // 阻止默认行为，即不跳转到链接的锚点处
                
                // 获取链接的锚点ID，去除开头的#
                const targetId = this.getAttribute('href').substring(1);
                
                // 隐藏所有section
                document.querySelectorAll('main section').forEach(section => {
                    section.classList.remove('show');
                });
                
                // 显示目标section
                const targetSection = document.getElementById(targetId);
                if (targetSection) {
                    targetSection.classList.add('show');
                }
            });
        });
        */
       /*影响首页，但不影响section
        document.addEventListener('DOMContentLoaded', function() {
            // 监听导航链接的点击事件
            document.querySelectorAll('.nav-item a').forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault(); // 阻止默认的链接跳转行为
                    
                    // 获取目标功能区的 ID（去除开头的#）
                    const targetId = this.getAttribute('href').substring(1);
                    
                    // 隐藏所有功能区
                    document.querySelectorAll('main section').forEach(section => {
                        section.classList.remove('show');
                    });
                    
                    // 显示目标功能区
                    const targetSection = document.getElementById(targetId);
                    if (targetSection) {
                        targetSection.classList.add('show');
                    }
                });
            });
        });
        */
       /*
        document.addEventListener('DOMContentLoaded', function() {
            // 监听导航链接的点击事件
            document.querySelectorAll('.nav-item a, .nav-left img').forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault(); // 阻止默认的链接跳转行为
                    
                    // 获取目标功能区的 ID（去除开头的#）
                    const targetId = this.getAttribute('href').substring(1);
                    
                    // 如果点击的是 logo，则默认显示首页
                    if (this.tagName === 'IMG') {
                        targetId = 'home';
                    }
                    
                    // 隐藏所有功能区
                    document.querySelectorAll('main section').forEach(section => {
                        section.classList.remove('show');
                    });
                    
                    // 显示目标功能区
                    const targetSection = document.getElementById(targetId);
                    if (targetSection) {
                        targetSection.classList.add('show');
                    }
                });
            });
        });
        
        document.addEventListener('DOMContentLoaded', function() {
            // 监听导航链接和logo图片的点击事件
            document.querySelectorAll('.nav-item a, .nav-left img').forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault(); // 阻止默认的链接跳转行为
                    
                    // 获取目标功能区的 ID（去除开头的#）
                    let targetId = this.getAttribute('href').substring(1);
                    
                    // 如果点击的是 logo，则默认显示首页
                    if (this.tagName === 'IMG') {
                        targetId = 'home';
                    }
                    
                    // 隐藏所有功能区
                    document.querySelectorAll('main section').forEach(section => {
                        section.classList.remove('show');
                    });
                    
                    // 显示目标功能区
                    const targetSection = document.getElementById(targetId);
                    if (targetSection) {
                        targetSection.classList.add('show');
                    } else {
                        console.error(`无法找到ID为 ${targetId} 的功能区域。`);
                    }
                });
            });
        });
        */
       /*
document.addEventListener('DOMContentLoaded', function() {
    // 监听导航链接和logo图片的点击事件
    document.querySelectorAll('.nav-item a, .nav-left img').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // 阻止默认的链接跳转行为
            
            // 获取目标功能区的 ID（去除开头的#）
            let targetId = this.getAttribute('href').substring(1);
            
            // 如果点击的是 logo，则默认显示首页
            if (this.tagName === 'IMG') {
                targetId = 'home';
            }
            
            // 显示目标功能区
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                // 隐藏除了目标功能区外的其他section
                document.querySelectorAll('main section').forEach(section => {
                    if (section !== targetSection) {
                        section.classList.remove('show');
                    }
                });

                // 显示目标功能区
                targetSection.classList.add('show');
            } else {
                console.error(`无法找到ID为 ${targetId} 的功能区域。`);
            }
        });
    });

    // 监听登录和注册按钮的点击事件
    document.querySelectorAll('.nav-right a').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault(); // 阻止默认的链接跳转行为
            
            // 打开对应的模态框
            const modalId = this.getAttribute('href').substring(1);
            openModal(modalId);
        });
    });
});
*/
//无法修改地址，源代码无//更新浏览器地址行，一切正常
document.addEventListener('DOMContentLoaded', function() {
    // 监听导航链接的点击事件
    document.querySelectorAll('.nav-item a, .nav-left a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // 阻止默认的链接跳转行为
            
            // 获取目标功能区的 ID（去除开头的#）
            let targetId = this.getAttribute('href').substring(1);
            
            // 如果点击的是 logo（nav-left 下的第一个 a 标签），则默认显示首页
            if (this.parentNode.classList.contains('nav-left')) {
                targetId = 'home';
            }
            
            // 显示目标功能区
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                // 隐藏除了目标功能区外的其他 section
                document.querySelectorAll('main section').forEach(section => {
                    if (section !== targetSection) {
                        section.classList.remove('show');
                    }
                });

                // 显示目标功能区
                targetSection.classList.add('show');
            } else {
                console.error(`无法找到ID为 ${targetId} 的功能区域。`);
            }
            /*
            // 更新浏览器地址栏
            const url = `/${targetId}`; // 构造新的 URL 路径
            history.pushState(null, '', url); // 更新地址栏
            */
        });
    });

    // 监听登录和注册按钮的点击事件
    document.querySelectorAll('.nav-right a').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault(); // 阻止默认的链接跳转行为
            
            // 打开对应的模态框
            const modalId = this.getAttribute('href').substring(1);
            openModal(modalId);
            /*
            // 更新浏览器地址栏
            const url = `/${targetId}`; // 构造新的 URL 路径
            history.pushState(null, '', url); // 更新地址栏
            */
        });
    });
});
//
/*
document.addEventListener('DOMContentLoaded', function() {
    // 监听导航链接和侧边栏链接的点击事件
    document.querySelectorAll('.nav-item a, .nav-left a, .sidebar-nav a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // 阻止默认的链接跳转行为
            
            // 获取目标功能区的 ID（去除开头的#）
            let targetId = this.getAttribute('href').substring(1);
            
            // 如果点击的是 logo（nav-left 下的第一个 a 标签），则默认显示首页
            if (this.parentNode.classList.contains('nav-left')) {
                targetId = 'home';
            }
            
            // 显示目标功能区
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                // 隐藏除了目标功能区外的其他 section
                document.querySelectorAll('main section').forEach(section => {
                    if (section !== targetSection) {
                        section.classList.remove('show');
                    }
                });

                // 显示目标功能区
                targetSection.classList.add('show');
            } else {
                console.error(`无法找到ID为 ${targetId} 的功能区域。`);
            }
            
            // 更新浏览器地址栏
            const url = `/${targetId}`; // 构造新的 URL 路径
            history.pushState(null, '', url); // 更新地址栏
        });
    });

    // 监听登录和注册按钮的点击事件
    document.querySelectorAll('.nav-right a').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault(); // 阻止默认的链接跳转行为
            
            // 打开对应的模态框
            const modalId = this.getAttribute('href').substring(1);
            openModal(modalId);

            // 更新浏览器地址栏
            const url = `/${modalId}`; // 构造新的 URL 路径
            history.pushState(null, '', url); // 更新地址栏
        });
    });

    // 处理浏览器的前进和后退按钮
    window.addEventListener('popstate', function() {
        const hash = window.location.pathname.substring(1);
        document.querySelectorAll('main section').forEach(section => {
            section.classList.remove('show');
        });
        const targetSection = document.getElementById(hash);
        if (targetSection) {
            targetSection.classList.add('show');
        }
    });

    // 初始加载时显示正确的 section
    const initialHash = window.location.pathname.substring(1) || 'home';
    document.querySelectorAll('main section').forEach(section => {
        section.classList.remove('show');
    });
    const initialSection = document.getElementById(initialHash);
    if (initialSection) {
        initialSection.classList.add('show');
    }
});
*/

        

//登录注册弹窗
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'flex'; // 显示弹窗
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none'; // 隐藏弹窗
}

/*刷新当前导航栏而不是回到首页
document.addEventListener('DOMContentLoaded', function() {
    // 恢复导航状态
    const currentNavId = localStorage.getItem('currentNavId');
    if (currentNavId) {
        // 隐藏除了目标功能区外的其他 section
        document.querySelectorAll('main section').forEach(section => {
            if (section.id === currentNavId) {
                section.classList.add('show');
            } else {
                section.classList.remove('show');
            }
        });
    }

    // 监听导航链接的点击事件
    document.querySelectorAll('.nav-item a, .nav-left a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // 阻止默认的链接跳转行为

            // 获取目标功能区的 ID（去除开头的#）
            let targetId = this.getAttribute('href').substring(1);

            // 如果点击的是 logo（nav-left 下的第一个 a 标签），则默认显示首页
            if (this.parentNode.classList.contains('nav-left')) {
                targetId = 'home';
            }

            // 显示目标功能区
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                // 隐藏除了目标功能区外的其他 section
                document.querySelectorAll('main section').forEach(section => {
                    if (section !== targetSection) {
                        section.classList.remove('show');
                    }
                });

                // 显示目标功能区
                targetSection.classList.add('show');

                // 保存当前导航状态到 localStorage
                localStorage.setItem('currentNavId', targetId);
            } else {
                console.error(`无法找到ID为 ${targetId} 的功能区域。`);
            }
        });
    });
});
*/
document.addEventListener('DOMContentLoaded', function() {
    // 恢复导航状态
    const currentNavId = localStorage.getItem('currentNavId');
    if (currentNavId) {
        // 直接显示当前导航的内容
        const targetSection = document.getElementById(currentNavId);
        if (targetSection) {
            targetSection.classList.add('show');
        }
    }

    // 监听导航链接的点击事件
    document.querySelectorAll('.nav-item a, .nav-left a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // 阻止默认的链接跳转行为

            // 获取目标功能区的 ID（去除开头的#）
            let targetId = this.getAttribute('href').substring(1);

            // 如果点击的是 logo（nav-left 下的第一个 a 标签），则默认显示首页
            if (this.parentNode.classList.contains('nav-left')) {
                targetId = 'home';
            }

            // 显示目标功能区
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                // 隐藏除了目标功能区外的其他 section
                document.querySelectorAll('main section').forEach(section => {
                    if (section !== targetSection) {
                        section.classList.remove('show');
                    }
                });

                // 显示目标功能区
                targetSection.classList.add('show');

                // 保存当前导航状态到 localStorage
                localStorage.setItem('currentNavId', targetId);
            } else {
                console.error(`无法找到ID为 ${targetId} 的功能区域。`);
            }
        });
    });
});


//处理外部文本文件
/*
fetch('example.txt')
    .then(response => response.text())
    .then(text => {
        console.log(text); // 处理获取的文本内容
        const mdContent = document.getElementById('markdown-content');
    })
.catch(error => {
    console.error('Fetch error:', error);
});
*/
// 使用 Fetch API 获取文本文件
fetch('readme.txt')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.text(); // 将响应转换为文本
  })
  .then(data => {
    // 将获取的文本内容输出到页面中的 <div id="output"></div> 标签中
    const outputDiv = document.getElementById('markdown-content');
    outputDiv.textContent = data;
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });
/*
fetch('./readme.md')
  .then(response => response.text())
  .then(text => {
    const markdownContent = document.getElementById('markdown-content');
    markdownContent.innerHTML = marked(text);
  });
*/

//登录注册
document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // 发送注册请求到后端
    fetch('/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: username, password: password })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        alert('Registration successful!');
        window.location.href = '/login.html'; // 可跳转到登录页面
    })
    .catch(error => {
        console.error('Registration error:', error);
        alert('Registration failed. Please try again.');
    });
});

/*时间
function mytime() {
    var a = new Date();
    var b = a.toLocaleTimeString();
    var c = a.toLocaleDateString();
    document.getElementById("time").innerHTML = c + "&nbsp" + b;
}
setInterval(function () { mytime() }, 1000);
*/
// 更新日期和时间函数
function updateTime() {
    var now = new Date();
    var dateStr = now.toLocaleDateString();
    var timeStr = now.toLocaleTimeString();

    // 将日期和时间显示在一个元素中
    var dateTimeStr = dateStr + ' ' + timeStr;
    document.getElementById('time').textContent = dateTimeStr;
}

// 每秒钟更新一次时间
setInterval(updateTime, 1000);

// 页面加载时更新一次时间，避免初始加载的延迟
updateTime();

