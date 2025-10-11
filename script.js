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
    'game-puzzle': { width: '800px', height: '600px' }, // 例: パズルゲームは横長
    'default': { width: '100%', height: '100%' } // デフォルトはコンテナに合わせる
};

const iframe = document.getElementById('game-container-iframe');
const initialMessage = document.getElementById('initial-message');

/**
 * 選択されたゲームのFlutter Webアプリをiframeに読み込みます。
 * @param {string} gameId - 各ゲームのGitHubリポジトリ名 (例: 'game-mahjong')
 */
function loadGame(gameId) {
    // 1. ゲーム設定を取得（存在しない場合はデフォルト設定を利用）
    const config = GAME_CONFIG[gameId] || GAME_CONFIG['default'];

    // 2. iframeのサイズを更新
    iframe.style.width = config.width;
    iframe.style.height = config.height;

    // 3. 統合サイトのリポジトリ内の相対パスを使用してURLを構築
    const gameUrl = `games/${gameId}/web/`;

    // 4. iframeにURLを設定してゲームを読み込む
    iframe.src = gameUrl;

    // 5. iframeと初期メッセージの表示を切り替える
    if (iframe.style.display === 'none') {
        iframe.style.display = 'block';
    }
    if (initialMessage.style.display !== 'none') {
        initialMessage.style.display = 'none';
    }
}

// グローバルスコープに関数を公開 (HTMLのonclick属性で利用するため)
window.loadGame = loadGame;

// サイト読み込み時（リロード時）の初期設定
document.addEventListener('DOMContentLoaded', () => {
    // 起動時に、iframeを非表示、メッセージを表示しておく
    iframe.style.display = 'none';
    initialMessage.style.display = 'block';
});