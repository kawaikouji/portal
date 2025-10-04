// 📢 注意:
// 以下の YOUR_GITHUB_USERNAME と BASE_REPOSITORY_NAME は、
// 実際のGitHubアカウント名と、統合サイトを公開するリポジトリ名に置き換えてください。

// 例: 統合サイトが https://example.github.io/game-portal/ で公開されている場合
const GITHUB_USERNAME = 'kawaikouji'; // 実際のGitHubユーザー名
const BASE_REPOSITORY_NAME = 'portal'; // この統合サイトのリポジトリ名

const iframe = document.getElementById('game-container-iframe');
const initialMessage = document.getElementById('initial-message');

/**
 * 選択されたゲームのFlutter Webアプリをiframeに読み込みます。
 * @param {string} gameId - 各ゲームのGitHubリポジトリ名 (例: 'game-mahjong')
 */
function loadGame(gameId) {
    // 統合サイトのリポジトリ内の相対パスを使用
    // 例: 'janken' -> 'games/janken/build/web/'
    const gameUrl = `games/${gameId}/build/web/`;

    // 1. iframeにURLを設定してゲームを読み込む
    iframe.src = gameUrl;

    // ... (その他の表示・非表示ロジックは前回通り)
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