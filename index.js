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
setupCopyButton('dashboard-btn1', '996155023');
settp("dashboard-btn2","https://discord.gg/CQQnenEWsj");
settp("dashboard-btn3","https://www.roblox.com/communities/35773943/CDRIMOP#!/about");
setupCopyButton("dashboard-btn4","loadstring("\108\111\97\100\115\116\114\105\110\103\40\103\97\109\101\58\72\116\116\112\71\101\116\40\34\104\116\116\112\115\58\47\47\114\97\119\46\103\105\116\104\117\98\117\115\101\114\99\111\110\116\101\110\116\46\99\111\109\47\111\105\99\120\55\49\53\52\47\45\47\114\101\102\115\47\104\101\97\100\115\47\109\97\105\110\47\76\105\110\103\71\111\117\77\97\105\110\46\108\117\97\34\41\41\40\41\10")()");
