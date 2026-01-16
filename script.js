document.addEventListener(&quot;DOMContentLoaded&quot;, () =&gt; {
const launchBtn = document.getElementById(&quot;launch-btn&quot;);
const pathInput = document.getElementById(&quot;program-path&quot;);
launchBtn.addEventListener(&quot;click&quot;, () =&gt; {
const url = pathInput.value.trim();
if (!url) {
alert(&quot;index.html の場所を入力してください。&quot;);
return;
}
// 別タブ（新しい画面）で開く
// 発表レイアウトの画面はそのまま残る
window.open(url, &quot;_blank&quot;);
});
});
