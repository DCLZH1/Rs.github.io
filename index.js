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
setupCopyButton("dashboard-btn1", "996155023");
setupCopyButton("dashboard-btn2", "https://raw.githubusercontent.com/DCLZH1/Main/refs/heads/main/Script.luau");
settp("dashboard-btn3","https://discord.gg/CQQnenEWsj");
settp("dashboard-btn4","https://www.roblox.com/communities/35773943/CDRIMOP#!/about");
