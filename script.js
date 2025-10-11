// 📢 注意:
// 以下の YOUR_GITHUB_USERNAME と BASE_REPOSITORY_NAME は、
// 実際のGitHubアカウント名と、統合サイトを公開するリポジトリ名に置き換えてください。

// 例: 統合サイトが https://example.github.io/game-portal/ で公開されている場合
const GITHUB_USERNAME = 'kawaikouji'; // 実際のGitHubユーザー名
const BASE_REPOSITORY_NAME = 'portal'; // この統合サイトのリポジトリ名

// ゲームごとの設定を管理するオブジェクト
// 'default' は、個別の設定がないゲームに適用される
const GAME_CONFIG = {
    'janken': { width: '400px', height: '711px' }, // 例: じゃんけんゲームは縦長
    'pipeflow': { width: '400px', height: '711px' }, //
    'numberset': { width: '400px', height: '711px' }, //
    'game-puzzle': { width: '800px', height: '600px' }, // 例: パズルゲームは横長
    'default': { width: '100%', height: '100%' } // デフォルトはコンテナに合わせる
};

const iframe = document.getElementById('game-container-iframe');
const initialMessage = document.getElementById('initial-message');

/**
 * スマートフォンからのアクセスかどうかを判定します。
 * @returns {boolean} スマートフォンの場合は true, それ以外は false
 */
function isSmartphone() {
    return /Mobi|Android|iPhone/.test(navigator.userAgent);
}

/**
 * 選択されたゲームのFlutter Webアプリをiframeに読み込みます。
 * @param {string} gameId - 各ゲームのGitHubリポジトリ名 (例: 'game-mahjong')
 */
function loadGame(gameId) {
    const gameUrl = `games/${gameId}/web/`;

    if (isSmartphone()) {
        // スマートフォンの場合は、PWAとして直接起動（リダイレクト）
        window.location.href = gameUrl;
    } else {
        // PCの場合は、iframe内でゲームを起動
        const config = GAME_CONFIG[gameId] || GAME_CONFIG['default'];

        iframe.style.width = config.width;
        iframe.style.height = config.height;
        iframe.src = gameUrl;

        if (iframe.style.display === 'none') {
            iframe.style.display = 'block';
        }
        if (initialMessage.style.display !== 'none') {
            initialMessage.style.display = 'none';
        }
    }
}

// グローバルスコープに関数を公開 (HTMLのonclick属性で利用するため)
window.loadGame = loadGame;

// サイト読み込み時（リロード時）の初期設定
document.addEventListener('DOMContentLoaded', () => {
    // 起動時に、iframeを非表示、メッセージを表示しておく
    if (iframe) {
        iframe.style.display = 'none';
    }
    if (initialMessage) {
        initialMessage.style.display = 'block';
    }
});