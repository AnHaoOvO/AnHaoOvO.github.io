// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', function() {
    // 获取元素
    const showAnswerBtn = document.getElementById('show-answer');
    const answerElement = document.getElementById('answer');
    
    // 添加点击事件监听器
    showAnswerBtn.addEventListener('click', function() {
        // 显示答案
        answerElement.classList.remove('hidden');
        
        // 添加淡入动画
        answerElement.style.opacity = '0';
        let opacity = 0;
        const interval = setInterval(function() {
            if (opacity >= 1) {
                clearInterval(interval);
            }
            answerElement.style.opacity = opacity;
            opacity += 0.1;
        }, 30);
        
        // 禁用按钮并更改文本
        this.disabled = true;
        this.textContent = '座標系を確認';
        
        // 添加按钮样式变化
        this.style.backgroundColor = '#95a5a6';
        this.style.cursor = 'default';
    });
    
    // 添加页面滚动动画效果
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.invitation > *');
        elements.forEach(element => {
            const position = element.getBoundingClientRect();
            // 检查元素是否在视口中
            if(position.top < window.innerHeight && position.bottom >= 0) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // 初始调用一次
    animateOnScroll();
    
    // 滚动时调用
    window.addEventListener('scroll', animateOnScroll);
});