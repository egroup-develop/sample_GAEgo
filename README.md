# sample_GAEgo
[原田さんAPI](https://study-golang.appspot.com/input)からjsonをAngularJsのhttp.getで取得、html上に画像を表示しユーザーに四回好みを選択してもらったあとに結果を送信する。
- クロスドメインは解消。ありがとうございます
- 新たに配列を用意しUrl,Title,Id情報を再度格納させ、それをscopeしangularJs上で用いた。
  - for文を用いて画像がクリックされる度に次のUrlが格納されるように変更。
  - 選択された画像のIdを記憶させる配列を別で用意しconsole.logで途中経過が確認できる。
  - APIから取得できる画像は4枚なので、4回の選択が終わったあとに結果のIdをserverに送信する。
