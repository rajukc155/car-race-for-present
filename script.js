const area = document.getElementById("contentArea");
// ------- 共通の画面生成関数(画面番号と画像名で作る) -------
function showScreen(title, description, imageFile) {
area.innerHTML = ` <h2>${title}</h2>
<p>${description}</p>
<img src="images/${imageFile}" width="300">
<br><br>
<button id="backBtn">最初の画面に戻る</button>
`;
// 戻るボタン
document.getElementById("backBtn").addEventListener("click", () => {
showScreen( "画面1", "ここは画面1です。最初の画面に戻ってきました。", "screen1.png"
);
});
}
// ------- 画面1 -------
document.getElementById("btn1").addEventListener("click", () => {
showScreen( "画面1", "ここは画面1です。学習の最初に表示される画面です。", "screen1.png"
);
});

// ------- 画面2 -------
document.getElementById("btn2").addEventListener("click", () => {
showScreen( "画面2", "ここは画面2です。情報を表示するサンプル画面です。", "screen2.png"
);
});
