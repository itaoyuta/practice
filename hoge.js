// 二つの値を足すを考えてみよう
// すごいおっきく考えてみて
//      ↓
// 入力するフィールドチェックがいる
// 計算する機能がいる
// 結果を表示する機能がいる


// 以下定義してみる

var 
  ApiValid = {},
  ApiCalc = {},
  ApiView = {}
;

// 入力するフィールドチェックがいる
ApiValid = (function(){
  function _doValidate(){
    return true;
  }
  return {
    DoValid: function(){
      return _doValidate();
    }   
  };
}());


// 計算する機能がいる
ApiCalc = (function(){
  function _doCalc(a, b){
    return Number(a) + Number(b);
  }
  return {
    DoCalc: function(a, b){
      return _doCalc(a, b);
    }   
  };
}());


// 結果を表示する機能がいる
ApiView = (function(){
  function _doUpdateView(v){
    $('#result').text(v);
  }

  return {
    DoUpdateView: function(v){
      _doUpdateView(v);
    }
  };
}());

/*
var test = 'hogehoge';
function hoge(){
  var test = 'bbb';
  console.log(test);
}
*/

$(function(){
  //hoge();


  $(document)
    .on('click', '#submit', function(e){
      var 
        _vA = $('#valueA').val(),
        _vB = $('#valueB').val()
      ;
      if(ApiValid.DoValid(_vA, _vB) == true){
        // 仮に値渡しとする(本当はシングルトン利用したほうがいい)
        ApiView.DoUpdateView(ApiCalc.DoCalc(_vA, _vB));
      }
    })
  ;


  // -> 小数点以下は切り捨てたいな

  // -> エラーだったら、アラートダイアログ出したいな
  
  // -> 1000以上になったら、文字色とか変えたいな
  
  // -> 結果消したいcleanってのを追加したいな


  // どこにコード書きます？？

}());












