(function(scope) {var $2 = new Layer({"backgroundBlur":10,"name":"2","backgroundColor":"rgba(255, 255, 255, 0.9)","width":375,"x":475,"height":667,"constraintValues":{"left":475,"height":667,"heightFactor":1,"width":375,"widthFactor":1},"blending":"normal","clip":true,"borderStyle":"solid"});var __layer_0__ = new Layer({"parent":$2,"name":"statusBar","backgroundSize":"fill","backgroundColor":null,"width":367,"x":6,"height":11,"constraintValues":{"left":6,"aspectRatioLocked":true,"height":11,"centerAnchorX":0.5053333333333333,"width":367,"right":2,"top":4,"centerAnchorY":0.01424287856071964},"blending":"normal","image":"images\/design\/zTpceFvEqZu5rrpPWLzDbClW6Fg8b67dkmf3hwrsCHQjDwmAwwEiicIz36742V8453qhN1x4qN6waRLsiQueaA.png","clip":false,"borderStyle":"solid","y":4});var __layer_1__ = new TextLayer({"parent":$2,"name":"title2","backgroundColor":null,"width":53,"x":15,"styledText":{"blocks":[{"inlineStyles":[{"startIndex":0,"endIndex":4,"css":{"fontSize":"13px","WebkitTextFillColor":"#939393","whiteSpace":"pre","fontWeight":400,"letterSpacing":"0px","tabSize":4,"fontFamily":"\"PingFangSC-Regular\", \"PingFang SC\", serif","lineHeight":"1.2"}}],"text":"我的分组"}],"alignment":"center"},"height":15,"constraintValues":{"left":15,"height":15,"centerAnchorX":0.11066666666666666,"width":53,"top":46,"centerAnchorY":0.080209895052473765},"blending":"normal","autoSize":true,"y":46});var __layer_2__ = new TextLayer({"parent":$2,"name":"title2","backgroundColor":null,"width":27,"x":333,"styledText":{"blocks":[{"inlineStyles":[{"startIndex":0,"endIndex":2,"css":{"fontSize":"13px","WebkitTextFillColor":"#FF8200","whiteSpace":"pre","letterSpacing":"0px","lineHeight":"1.2","tabSize":4,"fontFamily":"\".SFNSText\", \"SFProText-Regular\", \"SFUIText-Regular\", \".SFUIText\", sans-serif"}}],"text":"编辑"}],"alignment":"right"},"height":15,"constraintValues":{"left":null,"height":15,"centerAnchorX":0.92400000000000004,"width":27,"right":15,"top":46,"centerAnchorY":0.080209895052473765},"blending":"normal","autoSize":true,"y":46});var Back = new Layer({"parent":$2,"name":"Back","backgroundSize":"fill","backgroundColor":null,"width":20,"x":178,"height":20,"constraintValues":{"left":null,"aspectRatioLocked":true,"height":20,"centerAnchorX":0.5013333333333333,"width":20,"bottom":36,"top":null,"centerAnchorY":0.93103448275862066},"blending":"normal","image":"images\/design\/C4bHiPK2rSU6svJASpWZXUIQcLTEAuN13ZVdGNI1JHO6RCr9pkOlDFB2CjjYeFHIjUphpl3lKKUnDk9M9Q.png","clip":true,"borderStyle":"solid","y":611});var $1 = new Layer({"name":"1","backgroundColor":"#F2F2F2","width":375,"height":667,"constraintValues":{"height":667,"heightFactor":1,"width":375,"widthFactor":1},"blending":"normal","clip":true,"borderStyle":"solid"});var story = new Layer({"parent":$1,"name":"story","backgroundColor":"transparent","width":55,"x":10,"height":79,"constraintValues":{"left":10,"height":79,"centerAnchorX":0.10000000000000001,"width":55,"top":16,"centerAnchorY":0.083208395802098947},"blending":"normal","clip":false,"borderStyle":"solid","y":16});var Text_1 = new TextLayer({"parent":story,"backgroundColor":null,"width":71,"x":-8,"styledText":{"blocks":[{"inlineStyles":[{"startIndex":0,"endIndex":6,"css":{"fontSize":"12px","letterSpacing":"NaNpx","lineHeight":"NaN","tabSize":4,"fontFamily":"\".SFNSText\", \"SFProText-Regular\", \"SFUIText-Regular\", \".SFUIText\", sans-serif","WebkitTextFillColor":"rgb(0, 0, 0)"}}],"text":"{name}"}],"alignment":"center"},"height":18,"constraintValues":{"left":-8,"height":18,"centerAnchorX":0.5,"width":71,"bottom":2,"right":-8,"top":null,"centerAnchorY":0.86075949367088611},"blending":"normal","autoSize":false,"y":59});var avatarBG = new Layer({"parent":story,"name":"avatarBG","backgroundColor":"hsla(0, 0%, 100%, 0.5)","width":57,"x":-1,"height":57,"constraintValues":{"left":-1,"aspectRatioLocked":true,"height":57,"centerAnchorX":0.5,"width":57,"right":-1,"top":-3,"centerAnchorY":0.32278481012658228},"blending":"normal","borderRadius":"50.0%","clip":false,"borderStyle":"solid","y":-3});var avatar = new Layer({"parent":story,"name":"avatar","backgroundColor":"rgba(0,170,255,0.5)","width":51,"x":2,"height":51,"constraintValues":{"left":2,"height":51,"centerAnchorX":0.5,"width":51,"right":2,"centerAnchorY":0.32278481012658228,"aspectRatioLocked":true},"blending":"normal","borderRadius":"50.0%","clip":false,"borderStyle":"solid"});var bottom = new Layer({"parent":$1,"name":"bottom","backgroundSize":"fill","backgroundColor":null,"width":375,"height":46,"constraintValues":{"aspectRatioLocked":true,"height":46,"centerAnchorX":0.5,"width":375,"bottom":0,"right":0,"top":null,"centerAnchorY":0.96551724137931039},"blending":"normal","image":"images\/design\/8ojf8Oznj2Hd8vi1cj8OjGdrJ4wAjuAj91Oq3TsRNcLooAqpIWgK4YwBgbk9CklN1qAN581L9jVIHoknfw.png","clip":false,"borderStyle":"solid","y":621});var subNavi = new Layer({"parent":$1,"backgroundBlur":10,"name":"subNavi","shadows":[{"spread":0,"x":0,"type":"box","y":0.5,"blur":0,"color":"#e6e6e6"}],"backgroundColor":null,"width":375,"height":42,"constraintValues":{"height":42,"centerAnchorX":0.5,"width":375,"right":0,"top":64,"centerAnchorY":0.12743628185907047},"blending":"normal","clip":false,"borderStyle":"solid","y":64});var BG = new Layer({"parent":subNavi,"name":"BG","backgroundSize":"fill","backgroundColor":null,"width":375,"height":42,"constraintValues":{"height":42,"centerAnchorX":0.5,"width":375,"bottom":0,"right":0,"centerAnchorY":0.5},"blending":"normal","image":"images\/design\/8WSxgFhLGz5sOdp3z9zAdzH24COUhkMnITx5KJopwDlxBjlh9EJfhKLMPP34LmKmQ6fA3UWMXqO3YVoztGJg.png","clip":true,"borderStyle":"solid"});var subMore = new Layer({"parent":subNavi,"name":"subMore","shadows":[{"spread":0,"x":-2,"type":"box","y":0,"blur":5,"color":"hsla(0, 0%, 0%, 0.05)"}],"backgroundColor":"rgba(250, 250, 250, 1.00)","width":41,"x":334,"height":42,"constraintValues":{"left":null,"height":42,"centerAnchorX":0.94533333333333336,"width":41,"bottom":0,"right":0,"centerAnchorY":0.5},"blending":"normal","opacity":0,"clip":false,"borderStyle":"solid"});var __layer_3__ = new Layer({"parent":subNavi,"backgroundColor":"hsl(0, 0%, 96%)","width":375,"height":1,"constraintValues":{"height":1,"centerAnchorX":0.5,"width":375,"bottom":0,"right":0,"top":null,"centerAnchorY":0.98809523809523814},"blending":"normal","clip":false,"borderStyle":"solid","visible":false,"y":41});var __layer_4__ = new Layer({"parent":subNavi,"backgroundSize":"fill","backgroundColor":null,"width":42,"x":333,"height":42,"constraintValues":{"left":null,"height":42,"centerAnchorX":0.94399999999999995,"width":42,"bottom":0,"right":0,"centerAnchorY":0.5,"aspectRatioLocked":true},"blending":"normal","image":"images\/design\/LZYBZCYbFa0sbigok5kZuEViXU4jZ85c316G9OuXwYNX6SyiP7kdXyfvuIJcPh3Rv8vGAiG7KDDlj2Tgg7zg.png","clip":true,"borderStyle":"solid","visible":false});var __layer_5__ = new Layer({"parent":subNavi,"backgroundSize":"fill","backgroundColor":null,"width":51,"x":324,"height":42,"constraintValues":{"left":null,"height":42,"centerAnchorX":0.78800000000000003,"width":51,"bottom":0,"right":0,"centerAnchorY":1.5714285714285714,"aspectRatioLocked":true},"blending":"normal","image":"images\/design\/nuhdf9SZwH2hauOtFlwXJSnz8cgwxsbtHiPdLMRFVqs6BJDaqXGphMPZRGT6G6io7uIenjlUhR31imNqc4Lg.png","clip":true,"borderStyle":"solid","visible":false});var __layer_6__ = new Layer({"parent":subNavi,"name":"2","backgroundSize":"fill","backgroundColor":null,"width":51,"x":324,"height":42,"constraintValues":{"left":null,"height":42,"centerAnchorX":0.93200000000000005,"width":51,"bottom":0,"right":0,"centerAnchorY":0.5,"aspectRatioLocked":true},"blending":"normal","image":"images\/design\/gQ3BtpXk18fpBK1gFlKF7DSBK1eXOpmi2iSklMMtiWaAxUpxhrkcXxBp5qLi0bZH1T1TFJV2jI5505h3DLkA.png","clip":true,"borderStyle":"solid"});var __layer_7__ = new Layer({"parent":$1,"backgroundBlur":12,"name":"Uper","backgroundColor":"rgb(249, 249, 249)","width":375,"height":63,"constraintValues":{"height":63,"centerAnchorX":0.5,"width":375,"right":0,"centerAnchorY":0.047226386806596701},"blending":"normal","opacity":0.97999999999999998,"clip":false,"borderStyle":"solid","visible":false});var statusBar = new Layer({"parent":__layer_7__,"name":"statusBar","backgroundSize":"fill","backgroundColor":null,"width":367,"x":6,"height":11,"constraintValues":{"left":6,"aspectRatioLocked":true,"height":11,"centerAnchorX":0.5053333333333333,"width":367,"right":2,"top":4,"centerAnchorY":0.15079365079365081},"blending":"normal","image":"images\/design\/zTpceFvEqZu5rrpPWLzDbClW6Fg8b67dkmf3hwrsCHQjDwmAwwEiicIz36742V8453qhN1x4qN6waRLsiQueaA.png","clip":false,"borderStyle":"solid","y":4});var title2 = new TextLayer({"parent":__layer_7__,"name":"title2","backgroundColor":null,"width":33,"x":140,"styledText":{"blocks":[{"inlineStyles":[{"startIndex":0,"endIndex":2,"css":{"fontSize":"16px","WebkitTextFillColor":"hsl(0, 0%, 0%)","whiteSpace":"pre","letterSpacing":"0px","lineHeight":"1.2","tabSize":4,"fontFamily":"\".SFNSText\", \"SFProText-Regular\", \"SFUIText-Regular\", \".SFUIText\", sans-serif"}}],"text":"关注"}],"alignment":"center"},"height":19,"constraintValues":{"left":140,"height":19,"centerAnchorX":0.41733333333333333,"width":33,"bottom":11,"top":null,"centerAnchorY":0.67460317460317465},"blending":"normal","autoSize":true,"y":33});var __layer_8__ = new SVGLayer({"parent":__layer_7__,"backgroundColor":null,"width":21,"x":14,"htmlIntrinsicSize":{"height":24,"width":24},"color":"rgba(96, 96, 96, 1.00)","height":21,"constraintValues":{"left":14,"aspectRatioLocked":true,"height":21,"centerAnchorX":0.065333333333333327,"width":21,"bottom":10,"top":null,"centerAnchorY":0.67460317460317465},"blending":"normal","y":32,"svg":"<?xml version=\"1.0\"?><svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-camera\"><path d=\"M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z\"><\/path><circle cx=\"12\" cy=\"13\" r=\"4\"><\/circle><\/svg>"});var __layer_9__ = new Layer({"parent":__layer_7__,"backgroundSize":"fill","backgroundColor":null,"width":23,"x":339,"height":20,"constraintValues":{"left":null,"aspectRatioLocked":true,"height":20,"centerAnchorX":0.93466666666666665,"width":23,"bottom":11,"right":13,"top":null,"centerAnchorY":0.66666666666666663},"blending":"normal","image":"images\/design\/5I0k1XaL8Pyxdb1bpIEagt4o3geurkU91hdhD1jXNTYmYFKUBe02q0bCb0sd9j60z495d0DsNk2jLez1pVw.png","clip":false,"borderStyle":"solid","y":32});var __layer_10__ = new TextLayer({"parent":__layer_7__,"name":"title2","backgroundColor":null,"width":33,"x":202,"styledText":{"blocks":[{"inlineStyles":[{"startIndex":0,"endIndex":2,"css":{"fontSize":"16px","WebkitTextFillColor":"hsl(0, 0%, 0%)","whiteSpace":"pre","letterSpacing":"0px","lineHeight":"1.2","tabSize":4,"fontFamily":"\".SFNSText\", \"SFProText-Regular\", \"SFUIText-Regular\", \".SFUIText\", sans-serif"}}],"text":"热门"}],"alignment":"center"},"height":19,"constraintValues":{"left":null,"height":19,"centerAnchorX":0.58266666666666667,"width":33,"bottom":11,"right":140,"top":null,"centerAnchorY":0.67460317460317465},"blending":"normal","opacity":0.29999999999999999,"autoSize":true,"y":33});var __layer_11__ = new Layer({"parent":__layer_7__,"backgroundColor":"#ff8200","width":26,"x":144,"height":3,"constraintValues":{"left":144,"height":3,"centerAnchorX":0.41866666666666669,"width":26,"bottom":2,"top":null,"centerAnchorY":0.94444444444444442},"blending":"normal","borderRadius":10,"clip":false,"borderStyle":"solid","y":58});var __layer_12__ = new Layer({"parent":__layer_7__,"backgroundColor":"hsl(0, 0%, 96%)","width":375,"height":1,"constraintValues":{"height":1,"centerAnchorX":0.5,"width":375,"bottom":0,"right":0,"top":null,"centerAnchorY":0.99206349206349209},"blending":"normal","clip":false,"borderStyle":"solid","y":62});var Uper = new Layer({"parent":$1,"backgroundBlur":10,"name":"Uper","shadows":[],"backgroundColor":"rgba(255, 255, 255, 0.9)","width":375,"height":64,"constraintValues":{"height":64,"centerAnchorX":0.5,"width":375,"right":0,"centerAnchorY":0.047226386806596701},"blending":"normal","clip":false,"borderStyle":"solid"});var __layer_13__ = new Layer({"parent":Uper,"backgroundSize":"fill","backgroundColor":null,"width":375,"height":65,"constraintValues":{"aspectRatioLocked":true,"height":65,"centerAnchorX":0.5,"width":375,"bottom":-1,"right":0,"top":null,"centerAnchorY":0.5078125},"blending":"normal","image":"images\/design\/6uCnk5U09kEOVOw6cQ2iRV41xHqukBIKGtERj03OSQ1il0trBaHPiCo28DxwWyK53eFewKHKOA1UqSnBs8NA.png","clip":true,"borderStyle":"solid","visible":false});var __layer_14__ = new Layer({"parent":Uper,"backgroundSize":"fill","backgroundColor":null,"width":375,"height":65,"constraintValues":{"aspectRatioLocked":true,"height":65,"centerAnchorX":0.5,"width":375,"bottom":-1,"right":0,"top":null,"centerAnchorY":0.5078125},"blending":"normal","image":"images\/design\/WX0cPV9fRSYtHaLmkrKwx6uwaXn19OJ3a9JkN2NPYGlkrWmWXD6UPg52IOrCXDl6mqpUaVX2vId5QPFDNRw.png","clip":true,"borderStyle":"solid"});var __layer_15__ = new Layer({"name":"enter","backgroundSize":"fill","backgroundColor":null,"width":375,"x":-431,"height":450,"constraintValues":null,"blending":"normal","image":"images\/design\/bsKZs45JLbfvHGwbcaY4EZxrVNZaxsw1xZy0dbx4R5Plj0KERc3V49W83J0ApIhCNQYIPGLvfSrGqh1HZubiA.png","clip":false,"borderStyle":"solid","y":51});var __layer_16__ = new Layer({"name":"enter2","backgroundSize":"fill","backgroundColor":null,"width":375,"x":-431,"height":360,"constraintValues":null,"blending":"normal","image":"images\/design\/hqANr98mF4gmS47LqfDpEv0VzAkiC1ZjZooSWfkYxRu61CrSNE1DEUmCz559IwmJuIiyvt74z0LnwWlsQ.png","clip":false,"borderStyle":"solid","y":511});var __layer_17__ = new Layer({"name":"enter3","backgroundSize":"fill","backgroundColor":null,"width":375,"x":-431,"height":390,"constraintValues":null,"blending":"normal","image":"images\/design\/CcziNgTk0xT3QuSKey2BTfzv7ZnLiNsHcpOZmrN7r6bbwY97ye4td2svFCaFwx0UcM9UjMoRMVhiGhi8cXHWw.png","clip":false,"borderStyle":"solid","y":881});var __layer_18__ = new Layer({"backgroundSize":"fill","backgroundColor":null,"width":375,"x":-853,"height":667,"constraintValues":null,"blending":"normal","image":"images\/design\/wRXOYMHraOeRuDvXYGSqZVT3uZC9KbYFxyeVQtYpTDGZNtUnpIntunRjFkPh6JZQvqA7dTHQkIss8ubhNGPQ.jpg","clip":false,"borderStyle":"solid","y":35});var __layer_19__ = new Layer({"name":"enter4","backgroundSize":"fill","backgroundColor":null,"width":375,"x":-827,"height":390,"constraintValues":null,"blending":"normal","image":"images\/design\/w2GsiFkiWJbeFZEmfHuy6VuOy5tVkcjAgnn6xkobnLOIVmXIz7A5XFk6Q7FVxc3AI2vblDmttOyPGdculbHQ.png","clip":false,"borderStyle":"solid","y":-372});var sub6 = new TextLayer({"name":"sub6","backgroundColor":null,"width":31,"x":330,"styledText":{"blocks":[{"inlineStyles":[{"startIndex":0,"endIndex":2,"css":{"fontSize":"15px","WebkitTextFillColor":"#333333","whiteSpace":"pre","fontWeight":400,"letterSpacing":"0px","tabSize":4,"fontFamily":"\"PingFangSC-Regular\", \"PingFang SC\", serif","lineHeight":"1.2"}}],"text":"分组"}],"alignment":"center"},"height":18,"constraintValues":null,"blending":"normal","autoSize":true,"y":-83});var sub5 = new TextLayer({"name":"sub5","backgroundColor":null,"width":50,"x":260,"styledText":{"blocks":[{"inlineStyles":[{"startIndex":0,"endIndex":4,"css":{"fontSize":"15px","WebkitTextFillColor":"#333333","whiteSpace":"pre","fontWeight":400,"letterSpacing":"0px","tabSize":4,"fontFamily":"\"PingFangSC-Regular\", \"PingFang SC\", serif","lineHeight":"1.2"}}],"text":"V+微博"}],"alignment":"center"},"height":18,"constraintValues":null,"blending":"normal","autoSize":true,"y":-83});var sub4 = new TextLayer({"name":"sub4","backgroundColor":null,"width":61,"x":182,"styledText":{"blocks":[{"inlineStyles":[{"startIndex":0,"endIndex":4,"css":{"fontSize":"15px","WebkitTextFillColor":"#333333","whiteSpace":"pre","fontWeight":400,"letterSpacing":"0px","tabSize":4,"fontFamily":"\"PingFangSC-Regular\", \"PingFang SC\", serif","lineHeight":"1.2"}}],"text":"特别关注"}],"alignment":"center"},"height":18,"constraintValues":null,"blending":"normal","autoSize":true,"y":-83});var sub3 = new TextLayer({"name":"sub3","backgroundColor":null,"width":46,"x":118,"styledText":{"blocks":[{"inlineStyles":[{"startIndex":0,"endIndex":3,"css":{"fontSize":"15px","WebkitTextFillColor":"#333333","whiteSpace":"pre","fontWeight":400,"letterSpacing":"0px","tabSize":4,"fontFamily":"\"PingFangSC-Regular\", \"PingFang SC\", serif","lineHeight":"1.2"}}],"text":"群微博"}],"alignment":"center"},"height":18,"constraintValues":null,"blending":"normal","autoSize":true,"y":-83});var sub2 = new TextLayer({"name":"sub2","backgroundColor":null,"width":46,"x":54,"styledText":{"blocks":[{"inlineStyles":[{"startIndex":0,"endIndex":3,"css":{"fontSize":"15px","WebkitTextFillColor":"#333333","whiteSpace":"pre","fontWeight":400,"letterSpacing":"0px","tabSize":4,"fontFamily":"\"PingFangSC-Regular\", \"PingFang SC\", serif","lineHeight":"1.2"}}],"text":"好友圈"}],"alignment":"center"},"height":18,"constraintValues":null,"blending":"normal","autoSize":true,"y":-83});var sub1 = new TextLayer({"name":"sub1","backgroundColor":null,"width":31,"x":4,"styledText":{"blocks":[{"inlineStyles":[{"startIndex":0,"endIndex":2,"css":{"fontSize":"15px","WebkitTextFillColor":"#333333","whiteSpace":"pre","fontWeight":400,"letterSpacing":"0px","tabSize":4,"fontFamily":"\"PingFangSC-Regular\", \"PingFang SC\", serif","lineHeight":"1.2"}}],"text":"关注"}],"alignment":"center"},"height":18,"constraintValues":null,"blending":"normal","autoSize":true,"y":-83});var sub7 = new TextLayer({"name":"sub7","backgroundColor":null,"width":40,"x":4,"styledText":{"blocks":[{"inlineStyles":[{"startIndex":0,"endIndex":3,"css":{"fontSize":"15px","WebkitTextFillColor":"#333333","whiteSpace":"pre","fontWeight":400,"letterSpacing":"0px","tabSize":4,"fontFamily":"\"PingFangSC-Regular\", \"PingFang SC\", serif","lineHeight":"1.2"}}],"text":"分组2"}],"alignment":"center"},"height":18,"constraintValues":null,"blending":"normal","autoSize":true,"y":-59});var sub13 = new TextLayer({"name":"sub13","backgroundColor":null,"width":61,"x":316,"styledText":{"blocks":[{"inlineStyles":[{"startIndex":0,"endIndex":4,"css":{"fontSize":"15px","WebkitTextFillColor":"#333333","whiteSpace":"pre","fontWeight":400,"letterSpacing":"0px","tabSize":4,"fontFamily":"\"PingFangSC-Regular\", \"PingFang SC\", serif","lineHeight":"1.2"}}],"text":"周边微博"}],"alignment":"center"},"height":18,"constraintValues":null,"blending":"normal","autoSize":true,"y":-29});var sub12 = new TextLayer({"name":"sub12","backgroundColor":null,"width":61,"x":316,"styledText":{"blocks":[{"inlineStyles":[{"startIndex":0,"endIndex":4,"css":{"fontSize":"15px","WebkitTextFillColor":"#333333","whiteSpace":"pre","fontWeight":400,"letterSpacing":"0px","tabSize":4,"fontFamily":"\"PingFangSC-Regular\", \"PingFang SC\", serif","lineHeight":"1.2"}}],"text":"悄悄关注"}],"alignment":"center"},"height":18,"constraintValues":null,"blending":"normal","autoSize":true,"y":-59});var sub8 = new TextLayer({"name":"sub8","backgroundColor":null,"width":40,"x":56,"styledText":{"blocks":[{"inlineStyles":[{"startIndex":0,"endIndex":3,"css":{"fontSize":"15px","WebkitTextFillColor":"#333333","whiteSpace":"pre","fontWeight":400,"letterSpacing":"0px","tabSize":4,"fontFamily":"\"PingFangSC-Regular\", \"PingFang SC\", serif","lineHeight":"1.2"}}],"text":"分组3"}],"alignment":"center"},"height":18,"constraintValues":null,"blending":"normal","autoSize":true,"y":-59});var sub9 = new TextLayer({"name":"sub9","backgroundColor":null,"width":40,"x":120,"styledText":{"blocks":[{"inlineStyles":[{"startIndex":0,"endIndex":3,"css":{"fontSize":"15px","WebkitTextFillColor":"#333333","whiteSpace":"pre","fontWeight":400,"letterSpacing":"0px","tabSize":4,"fontFamily":"\"PingFangSC-Regular\", \"PingFang SC\", serif","lineHeight":"1.2"}}],"text":"分组4"}],"alignment":"center"},"height":18,"constraintValues":null,"blending":"normal","autoSize":true,"y":-59});var sub10 = new TextLayer({"name":"sub10","backgroundColor":null,"width":40,"x":181,"styledText":{"blocks":[{"inlineStyles":[{"startIndex":0,"endIndex":3,"css":{"fontSize":"15px","WebkitTextFillColor":"#333333","whiteSpace":"pre","fontWeight":400,"letterSpacing":"0px","tabSize":4,"fontFamily":"\"PingFangSC-Regular\", \"PingFang SC\", serif","lineHeight":"1.2"}}],"text":"分组5"}],"alignment":"center"},"height":18,"constraintValues":null,"blending":"normal","autoSize":true,"y":-59});var sub11 = new TextLayer({"name":"sub11","backgroundColor":null,"width":40,"x":246,"styledText":{"blocks":[{"inlineStyles":[{"startIndex":0,"endIndex":3,"css":{"fontSize":"15px","WebkitTextFillColor":"#333333","whiteSpace":"pre","fontWeight":400,"letterSpacing":"0px","tabSize":4,"fontFamily":"\"PingFangSC-Regular\", \"PingFang SC\", serif","lineHeight":"1.2"}}],"text":"分组6"}],"alignment":"center"},"height":18,"constraintValues":null,"blending":"normal","autoSize":true,"y":-59});var subPopup = new Layer({"name":"subPopup","shadows":[],"backgroundColor":"rgba(0, 0, 0, 0.05)","width":80,"x":496,"height":35,"constraintValues":null,"blending":"normal","borderRadius":4.5,"clip":false,"borderStyle":"solid","y":-68});var PopupText = new TextLayer({"parent":subPopup,"name":"PopupText","backgroundColor":null,"width":92,"x":-5,"styledText":{"blocks":[{"inlineStyles":[{"startIndex":0,"endIndex":9,"css":{"fontSize":"14px","letterSpacing":"0px","lineHeight":"1.2","tabSize":4,"fontFamily":"\".SFNSText\", \"SFProText-Regular\", \"SFUIText-Regular\", \".SFUIText\", sans-serif","WebkitTextFillColor":"#FFAA22"}}],"text":"{subname}"}],"alignment":"center"},"height":18,"constraintValues":{"left":-5,"height":18,"centerAnchorX":0.51249999999999996,"width":92,"right":-7,"top":null,"centerAnchorY":0.48571428571428571},"blending":"normal","opacity":0,"autoSize":false,"y":8});var enter = new Layer({"name":"enter","backgroundSize":"fill","backgroundColor":null,"width":375,"x":30,"height":449,"constraintValues":null,"blending":"normal","image":"images\/design\/knbiLNwMaomfgPJEZKwLfX2mSQQjgD2UBK5yoQvM5lsSuzVdxoQgAmpzYm59GQNxlmrIXbdei4HgCnzHOQ.png","clip":true,"borderStyle":"solid","y":818});var enter2 = new Layer({"name":"enter2","backgroundSize":"fill","backgroundColor":null,"width":375,"x":423,"height":449,"constraintValues":null,"blending":"normal","image":"images\/design\/lJgbSkaIJ08NL0iFbUi5Ni8c16VA76hBxZpDTyRYHwHz0j01tkaXWsYGcRdOLJlbg3dhnkONzYdaNXpisJ4Q.png","clip":true,"borderStyle":"solid","y":814});var enter3 = new Layer({"name":"enter3","backgroundSize":"fill","backgroundColor":null,"width":375,"x":303,"height":449,"constraintValues":null,"blending":"normal","image":"images\/design\/xfUI3yZX6nTTXP1Xj6k93ddmCAvQw8TgsJPFK4ZHNG6TxmK2faQ09Pml8k68MomZu9QUkqWv6MsgIwFPQ.png","clip":true,"borderStyle":"solid","y":1003});var enter4 = new Layer({"name":"enter4","backgroundSize":"fill","backgroundColor":null,"width":375,"x":835,"height":449,"constraintValues":null,"blending":"normal","image":"images\/design\/hgqrwTagpQ9xD7bYJivYa6uRQGpRQ9XEwLxFg4xXec5kq7DPqvYYPkEogSY18RnhkEHrApNCwwqQH7WEQFWnw.png","clip":true,"borderStyle":"solid","y":901});var enter5 = new Layer({"name":"enter5","backgroundSize":"fill","backgroundColor":null,"width":375,"x":908,"height":449,"constraintValues":null,"blending":"normal","image":"images\/design\/a16ZQlN31C4HzhlxyqX5DfkocukczJC7WKnacix0jNaLnSlmnHejYUfHRu3kapAzEr0XOrybzFLCNEXjyIKeQ.png","clip":true,"borderStyle":"solid","y":542});var __layer_20__ = new Layer({"backgroundSize":"fill","backgroundColor":null,"width":375,"x":231,"height":44,"constraintValues":null,"blending":"normal","image":"images\/design\/ToU110BGsBxmWp9VIxM7IriR08o4c0S7dXEXbrin5K9WqB06vv8OKOmpKAmQjOPI0uTvXd5KrNz00Tsg.png","clip":true,"borderStyle":"solid","y":-151});var stories = new Layer({"name":"stories","backgroundColor":"rgba(250, 250, 250, 1.00)","width":375,"x":-275,"height":103,"constraintValues":null,"blending":"normal","opacity":0,"clip":false,"borderStyle":"solid","y":-203});var __layer_21__ = new Layer({"parent":stories,"backgroundColor":"hsl(0, 0%, 96%)","width":375,"height":1,"constraintValues":{"height":1,"centerAnchorX":0.5,"width":375,"bottom":0,"right":0,"top":null,"centerAnchorY":0.99206349206349209},"blending":"normal","clip":false,"borderStyle":"solid","y":102});var StoryCard = new Layer({"name":"StoryCard","backgroundSize":"fill","backgroundColor":null,"width":375,"height":235,"constraintValues":null,"blending":"normal","image":"images\/design\/ebDpQoE8P9uui6XC0LS34cNAXJ8iEDnWNUeLfEnGy26TFUmkyGcPDUF0DtIfbcGtW8YYxSYEyAuGZLVWg.png","clip":true,"borderStyle":"solid","y":-469});var Story1 = new Layer({"parent":StoryCard,"name":"Story1","backgroundSize":"fill","backgroundColor":null,"width":100,"x":13,"height":185,"constraintValues":{"left":13,"aspectRatioLocked":true,"height":185,"centerAnchorX":0.16800000000000001,"width":100,"bottom":16,"top":34,"centerAnchorY":0.53829787234042559},"blending":"normal","image":"images\/design\/CW6aqLXrve5Vm94tuUQgKjEX82TZm74upnMUGOK3H5rQQ01t0nim3R1cdS0ZDsQL1qGwwUf19tTPbqVyUzA.png","clip":true,"borderStyle":"solid","y":34});var Story2 = new Layer({"parent":StoryCard,"name":"Story2","backgroundSize":"fill","backgroundColor":null,"width":100,"x":119,"height":185,"constraintValues":{"left":null,"aspectRatioLocked":true,"height":185,"centerAnchorX":0.45066666666666666,"width":100,"bottom":16,"top":34,"centerAnchorY":0.53829787234042559},"blending":"normal","image":"images\/design\/GszyROuNmeaSbwxRk9t6fnCyWV4bboflvddkFovSf4OMjJoU1nLWGg2US03zTGJyK559rbXEsiOifft7RPtA.png","clip":true,"borderStyle":"solid","y":34});var Story3 = new Layer({"parent":StoryCard,"name":"Story3","backgroundSize":"fill","backgroundColor":null,"width":100,"x":225,"height":185,"constraintValues":{"left":null,"aspectRatioLocked":true,"height":185,"centerAnchorX":0.73333333333333328,"width":100,"bottom":16,"top":34,"centerAnchorY":0.53829787234042559},"blending":"normal","image":"images\/design\/r20248lAN3bb9wlFqC3OyqGfk03eKE4hfA6AimoR9USOFM3TQzUKuXRPM7Z2B0nZ1Rch4Hn8j1tWGrR4mapqQ.png","clip":true,"borderStyle":"solid","y":34});var Story4 = new Layer({"parent":StoryCard,"name":"Story4","backgroundSize":"fill","backgroundColor":null,"width":100,"x":331,"height":185,"constraintValues":{"left":null,"aspectRatioLocked":true,"height":185,"centerAnchorX":1.016,"width":100,"bottom":16,"top":34,"centerAnchorY":0.53829787234042559},"blending":"normal","image":"images\/design\/idzJbExZL491dE6S6DXkupBynaLDb48zfZD6q4HJDeGUTNEjBgaIURCVaMpFVfsDUANCtJcpYBLqBzZx4wIg.png","clip":true,"borderStyle":"solid","y":34});if(story !== undefined){story.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|story","targetName":"story","vekterClass":"FrameNode"}};if(sub11 !== undefined){sub11.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|sub11","targetName":"sub11","vekterClass":"TextNode","text":"分组6"}};if(sub1 !== undefined){sub1.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|sub1","targetName":"sub1","vekterClass":"TextNode","text":"关注"}};if(__layer_10__ !== undefined){__layer_10__.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|__layer_10__","vekterClass":"TextNode","text":"热门"}};if(bottom !== undefined){bottom.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|bottom","targetName":"bottom","vekterClass":"FrameNode"}};if(sub6 !== undefined){sub6.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|sub6","targetName":"sub6","vekterClass":"TextNode","text":"分组"}};if(sub5 !== undefined){sub5.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|sub5","targetName":"sub5","vekterClass":"TextNode","text":"V+微博"}};if(Back !== undefined){Back.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|Back","targetName":"Back","vekterClass":"FrameNode"}};if(BG !== undefined){BG.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|BG","targetName":"BG","vekterClass":"FrameNode"}};if(sub13 !== undefined){sub13.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|sub13","targetName":"sub13","vekterClass":"TextNode","text":"周边微博"}};if(title2 !== undefined){title2.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|title2","targetName":"title2","vekterClass":"TextNode","text":"关注"}};if(__layer_21__ !== undefined){__layer_21__.__framerInstanceInfo = {"hash":"#vekter|__layer_21__","vekterClass":"FrameNode","framerClass":"Layer"}};if(sub2 !== undefined){sub2.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|sub2","targetName":"sub2","vekterClass":"TextNode","text":"好友圈"}};if($2 !== undefined){$2.__framerInstanceInfo = {"deviceName":"Apple iPhone 8","framerClass":"Layer","hash":"#vekter|$2","targetName":"$2","vekterClass":"FrameNode","deviceType":"apple-iphone-8-space-gray"}};if(Text_1 !== undefined){Text_1.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|Text_1","targetName":"Text_1","vekterClass":"TextNode","text":"{name}"}};if($1 !== undefined){$1.__framerInstanceInfo = {"deviceName":"Apple iPhone 8","framerClass":"Layer","hash":"#vekter|$1","targetName":"$1","vekterClass":"FrameNode","deviceType":"apple-iphone-8-space-gray"}};if(__layer_18__ !== undefined){__layer_18__.__framerInstanceInfo = {"hash":"#vekter|__layer_18__","vekterClass":"FrameNode","framerClass":"Layer"}};if(Story3 !== undefined){Story3.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|Story3","targetName":"Story3","vekterClass":"FrameNode"}};if(__layer_2__ !== undefined){__layer_2__.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|__layer_2__","vekterClass":"TextNode","text":"编辑"}};if(__layer_14__ !== undefined){__layer_14__.__framerInstanceInfo = {"hash":"#vekter|__layer_14__","vekterClass":"FrameNode","framerClass":"Layer"}};if(__layer_15__ !== undefined){__layer_15__.__framerInstanceInfo = {"hash":"#vekter|__layer_15__","vekterClass":"FrameNode","framerClass":"Layer"}};if(__layer_19__ !== undefined){__layer_19__.__framerInstanceInfo = {"hash":"#vekter|__layer_19__","vekterClass":"FrameNode","framerClass":"Layer"}};if(__layer_13__ !== undefined){__layer_13__.__framerInstanceInfo = {"hash":"#vekter|__layer_13__","vekterClass":"FrameNode","framerClass":"Layer"}};if(__layer_11__ !== undefined){__layer_11__.__framerInstanceInfo = {"hash":"#vekter|__layer_11__","vekterClass":"FrameNode","framerClass":"Layer"}};if(avatarBG !== undefined){avatarBG.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|avatarBG","targetName":"avatarBG","vekterClass":"FrameNode"}};if(Story4 !== undefined){Story4.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|Story4","targetName":"Story4","vekterClass":"FrameNode"}};if(enter4 !== undefined){enter4.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|enter4","targetName":"enter4","vekterClass":"FrameNode"}};if(__layer_1__ !== undefined){__layer_1__.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|__layer_1__","vekterClass":"TextNode","text":"我的分组"}};if(enter5 !== undefined){enter5.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|enter5","targetName":"enter5","vekterClass":"FrameNode"}};if(__layer_3__ !== undefined){__layer_3__.__framerInstanceInfo = {"hash":"#vekter|__layer_3__","vekterClass":"FrameNode","framerClass":"Layer"}};if(__layer_5__ !== undefined){__layer_5__.__framerInstanceInfo = {"hash":"#vekter|__layer_5__","vekterClass":"FrameNode","framerClass":"Layer"}};if(__layer_9__ !== undefined){__layer_9__.__framerInstanceInfo = {"hash":"#vekter|__layer_9__","vekterClass":"FrameNode","framerClass":"Layer"}};if(sub4 !== undefined){sub4.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|sub4","targetName":"sub4","vekterClass":"TextNode","text":"特别关注"}};if(subMore !== undefined){subMore.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|subMore","targetName":"subMore","vekterClass":"FrameNode"}};if(Story1 !== undefined){Story1.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|Story1","targetName":"Story1","vekterClass":"FrameNode"}};if(sub10 !== undefined){sub10.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|sub10","targetName":"sub10","vekterClass":"TextNode","text":"分组5"}};if(Uper !== undefined){Uper.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|Uper","targetName":"Uper","vekterClass":"FrameNode"}};if(__layer_0__ !== undefined){__layer_0__.__framerInstanceInfo = {"hash":"#vekter|__layer_0__","vekterClass":"FrameNode","framerClass":"Layer"}};if(__layer_12__ !== undefined){__layer_12__.__framerInstanceInfo = {"hash":"#vekter|__layer_12__","vekterClass":"FrameNode","framerClass":"Layer"}};if(subPopup !== undefined){subPopup.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|subPopup","targetName":"subPopup","vekterClass":"FrameNode"}};if(enter3 !== undefined){enter3.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|enter3","targetName":"enter3","vekterClass":"FrameNode"}};if(enter !== undefined){enter.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|enter","targetName":"enter","vekterClass":"FrameNode"}};if(StoryCard !== undefined){StoryCard.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|StoryCard","targetName":"StoryCard","vekterClass":"FrameNode"}};if(sub8 !== undefined){sub8.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|sub8","targetName":"sub8","vekterClass":"TextNode","text":"分组3"}};if(statusBar !== undefined){statusBar.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|statusBar","targetName":"statusBar","vekterClass":"FrameNode"}};if(PopupText !== undefined){PopupText.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|PopupText","targetName":"PopupText","vekterClass":"TextNode","text":"{subname}"}};if(__layer_4__ !== undefined){__layer_4__.__framerInstanceInfo = {"hash":"#vekter|__layer_4__","vekterClass":"FrameNode","framerClass":"Layer"}};if(sub12 !== undefined){sub12.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|sub12","targetName":"sub12","vekterClass":"TextNode","text":"悄悄关注"}};if(sub7 !== undefined){sub7.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|sub7","targetName":"sub7","vekterClass":"TextNode","text":"分组2"}};if(sub3 !== undefined){sub3.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|sub3","targetName":"sub3","vekterClass":"TextNode","text":"群微博"}};if(__layer_20__ !== undefined){__layer_20__.__framerInstanceInfo = {"hash":"#vekter|__layer_20__","vekterClass":"FrameNode","framerClass":"Layer"}};if(subNavi !== undefined){subNavi.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|subNavi","targetName":"subNavi","vekterClass":"FrameNode"}};if(__layer_7__ !== undefined){__layer_7__.__framerInstanceInfo = {"hash":"#vekter|__layer_7__","vekterClass":"FrameNode","framerClass":"Layer"}};if(__layer_8__ !== undefined){__layer_8__.__framerInstanceInfo = {"originalFilename":"camera","framerClass":"SVGLayer","hash":"#vekter|__layer_8__","vekterClass":"SVGNode"}};if(__layer_16__ !== undefined){__layer_16__.__framerInstanceInfo = {"hash":"#vekter|__layer_16__","vekterClass":"FrameNode","framerClass":"Layer"}};if(Story2 !== undefined){Story2.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|Story2","targetName":"Story2","vekterClass":"FrameNode"}};if(avatar !== undefined){avatar.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|avatar","targetName":"avatar","vekterClass":"FrameNode"}};if(__layer_6__ !== undefined){__layer_6__.__framerInstanceInfo = {"hash":"#vekter|__layer_6__","vekterClass":"FrameNode","framerClass":"Layer"}};if(sub9 !== undefined){sub9.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|sub9","targetName":"sub9","vekterClass":"TextNode","text":"分组4"}};if(__layer_17__ !== undefined){__layer_17__.__framerInstanceInfo = {"hash":"#vekter|__layer_17__","vekterClass":"FrameNode","framerClass":"Layer"}};if(stories !== undefined){stories.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|stories","targetName":"stories","vekterClass":"FrameNode"}};if(enter2 !== undefined){enter2.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|enter2","targetName":"enter2","vekterClass":"FrameNode"}};if (scope["__vekterVariables"]) { scope["__vekterVariables"].map(function(variable) { delete scope[variable] } ) };Object.assign(scope, {$2, Back, $1, story, Text_1, avatarBG, avatar, bottom, subNavi, BG, subMore, statusBar, title2, Uper, sub6, sub5, sub4, sub3, sub2, sub1, sub7, sub13, sub12, sub8, sub9, sub10, sub11, subPopup, PopupText, enter, enter2, enter3, enter4, enter5, stories, StoryCard, Story1, Story2, Story3, Story4});scope["__vekterVariables"] = ["$2", "Back", "$1", "story", "Text_1", "avatarBG", "avatar", "bottom", "subNavi", "BG", "subMore", "statusBar", "title2", "Uper", "sub6", "sub5", "sub4", "sub3", "sub2", "sub1", "sub7", "sub13", "sub12", "sub8", "sub9", "sub10", "sub11", "subPopup", "PopupText", "enter", "enter2", "enter3", "enter4", "enter5", "stories", "StoryCard", "Story1", "Story2", "Story3", "Story4"];if (typeof Framer.CurrentContext.layout === 'function') {Framer.CurrentContext.layout()};})(window);