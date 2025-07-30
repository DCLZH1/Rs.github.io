const codeConfig = {
    title: "脚本",
    language: "Lua",
    codeContent: `loadstring(game:HttpGet("https://raw.githubusercontent.com/DCLZH1/Main/refs/heads/main/Script.luau"))()`,
    containerId: "code-display-container",
    copyButtonId: "dynamic-copy-btn"
};

function renderCodeDisplay() {
    const container = document.getElementById(codeConfig.containerId);
    if (!container) return;

    container.innerHTML = `
        <div class="code-container">
            <div class="code-header">
                <span class="code-title">${codeConfig.title}</span>
                <span class="code-language">${codeConfig.language}</span>
                <button id="${codeConfig.copyButtonId}" class="cyber-btn code-copy-btn">
                    <span class="btn-text">复制</span>
                    <span class="btn-glow"></span>
                </button>
            </div>
            <pre class="code-block"><code id="lua-code">${escapeHtml(codeConfig.codeContent)}</code></pre>
        </div>
    `;

    setupCodeCopyButton(
        document.getElementById(codeConfig.copyButtonId),
        codeConfig.codeContent
    );
}

function escapeHtml(unsafe) {
    return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

document.addEventListener('DOMContentLoaded', renderCodeDisplay);
