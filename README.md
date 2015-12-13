# sample_GAEgo
[原田さんAPI](https://study-golang.appspot.com/input)からjsonをAngularJsのhttp.getで取得、html上に画像を表示し選択された方のIDを出力する
- error:No 'Access-Control-Allow-Origin' header is present on the requested resource
 - クロスドメイン制約。jsonデータ自体は送信されているがサーバ側が「Access-Control-Allow-Origin」ヘッダを出力していないため、
    XMLHttpReques側で拒否されている
   - ひとまずAPIの出力をローカル"out.json"に保存し、jsのリクエスト先URLをlocalhost:8000/out.jsonにして再度実行したら成功。json自体は送信されていることが確認できた。
- APIから送られてくる画像のURLは一つの配列でまとめて5枚分送られてくるため、img src={{item.Url}}では表示出来ない。
   - クロスドメイン制約の問題もあるので、go側でAPIから245人分のデータを取得、保管しておき、ソート画面で使用する2人分の
   データのみをAngularjs側に送るプログラムに変更することに。
   
