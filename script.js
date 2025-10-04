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
    // 各ゲームは独立したリポジトリ（別々のGitHub Pages URL）でホスティングされていると仮定
    // 例: game-mahjong が https://your-github-username.github.io/game-mahjong/ にある
    const gameUrl = `https://${GITHUB_USERNAME}.github.io/${gameId}/`;

    // 1. iframeにURLを設定してゲームを読み込む
    iframe.src = gameUrl;

    // 2. 初期メッセージを非表示にし、iframeを表示する
    // iframeの`src`が空でない場合にのみ実行されるべきです
    if (iframe.style.display === 'none') {
        iframe.style.display = 'block';
    }
    if (initialMessage.style.display !== 'none') {
        initialMessage.style.display = 'none';
    }

    // 3. (オプション) 読み込み完了時の処理
    // iframe.onload = function() {
    //     console.log(`${gameId} の読み込みが完了しました。`);
    // };
}

// グローバルスコープに関数を公開 (HTMLのonclick属性で利用するため)
window.loadGame = loadGame;

// サイト読み込み時（リロード時）の初期設定
document.addEventListener('DOMContentLoaded', () => {
    // 起動時に、iframeを非表示、メッセージを表示しておく
    iframe.style.display = 'none';
    initialMessage.style.display = 'block';
});