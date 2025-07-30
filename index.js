function settp(buttonId,content){
    const button = document.getElementById(buttonId);
    if (!button) return;

    button.addEventListener("click",function() {
        document.body.classList.add('transition-out');
        
        setTimeout(function() {
            window.location.href = content;
    }, 800);
    }   
)}
//复制q群
function setupCopyButton(buttonId, content) {
    const button = document.getElementById(buttonId);
    if (!button) return;
    
    button.addEventListener('click', function() {
        const btnText = this.querySelector('.btn-text');
        const originalText = btnText.textContent;

        navigator.clipboard.writeText(content).then(() => {
            btnText.textContent = '复制成功!';

            setTimeout(() => {
                btnText.textContent = originalText;
            }, 2000);
        }).catch(err => {
            btnText.textContent = '✗ 复制失败';
        });
    });
}
//代码复制
function setupCodeCopyButton(buttonElement, codeContent) {
    buttonElement.addEventListener('click', function(e) {
        e.stopPropagation();
        const btnText = this.querySelector('.btn-text');
        const originalText = btnText.textContent;

        navigator.clipboard.writeText(codeContent).then(() => {
            btnText.textContent = '已复制';
            this.classList.add('copied');

            setTimeout(() => {
                btnText.textContent = originalText;
                this.classList.remove('copied');
            }, 2000);
        }).catch(err => {
            console.error('复制失败:', err);
            btnText.textContent = '复制失败';
            setTimeout(() => {
                btnText.textContent = originalText;
            }, 2000);
        });
    });
}

setupCopyButton("dashboard-btn1", "996155023");
settp("dashboard-btn2","https://discord.gg/CQQnenEWsj");
settp("dashboard-btn3","https://www.roblox.com/communities/35773943/CDRIMOP#!/about");
setupCodeCopyButton()
