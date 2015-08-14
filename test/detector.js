"use strict";
var assert = require("assert");
var fontDetector = require("../src/detector.js");
var lorem = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod" +
    "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam," +
    "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo" +
    "consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse" +
    "cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non" +
    "proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

var _UNICODE = "ကျွန်တော်တို့စက်ရုံမှာ အလုပ်သမား ၂၁၄ ယောက်ရှိပါတယ်။ သူတို့ကို မှီခို နေတဲ့ မိသားစုတွေက" +
    "လည်း ၁,၀၀၀ ကျော်လောက် ရှိပါတယ်။ စက်ရုံသာ ပိတ် လိုက်ရင် ဒီအလုပ်သမားတွေ ဘယ်လို" +
    "လုပ်ကြမလဲ။ ကျွန်တော်တို့ဆီမှာ အလုပ် လုပ်တဲ့ အလုပ်သမားအကုန်လုံးနီးပါးက ကျွန်တော်တို့နဲ့" +
    "၁၀ နှစ်ကျော် လက်တွဲ ပြီး အလုပ်လုပ်လာတဲ့ သူတွေပါ။ နောက်ပြီး ကျွန်တော်တို့ဒီစက်ရုံအတွက်" +
    "နိုင်ငံတကာအရည်အသွေးမီ စည်သွတ်ဘူး တွေထုတ်နိုင်အောင် ငွေကြေးအမြောက် အမြားကို" +
    "လည်း ရင်းနှီးမြှုပ်နှံထားရပါတယ်။ ကာလပေါက်ဈေးနဲ့ တွက်မယ်ဆိုရင် ကျပ်သိန်းပေါင်းတစ်သောင်း" +
    "လောက် ကိုရှိပါတယ်";

var _ZAWGYI = "ကၽြန္ေတာ္တို႔စက္႐ုံမွာ အလုပ္သမား ၂၁၄ ေယာက္ရွိပါတယ္။ သူတို႔ကို မွီခို ေနတဲ့ မိသားစုေတြက" +
    "လည္း ၁,၀၀၀ ေက်ာ္ေလာက္ ရွိပါတယ္။ စက္႐ုံသာ ပိတ္ လိုက္ရင္ ဒီအလုပ္သမားေတြ ဘယ္လို" +
    "လုပ္ၾကမလဲ။ ကၽြန္ေတာ္တို႔ဆီမွာ အလုပ္ လုပ္တဲ့ အလုပ္သမားအကုန္လုံးနီးပါးက ကၽြန္ေတာ္တို႔နဲ႔" +
    "၁၀ ႏွစ္ေက်ာ္ လက္တြဲ ၿပီး အလုပ္လုပ္လာတဲ့ သူေတြပါ။ ေနာက္ၿပီး ကၽြန္ေတာ္တို႔ဒီစက္႐ုံအတြက္" +
    "နိုင္ငံတကာအရည္အေသြးမီ စည္သြတ္ဘူး ေတြထုတ္နိုင္ေအာင္ ေငြေၾကးအေျမာက္ အျမားကို" +
    "လည္း ရင္းႏွီးျမႇုပ္ႏွံထားရပါတယ္။ ကာလေပါက္ေဈးနဲ႔ တြက္မယ္ဆိုရင္ က်ပ္သိန္းေပါင္းတစ္ေသာင္း" +
    "ေလာက္ ကိုရွိပါတယ္";

describe("Font Detector", function () {

  it("should be return false", function () {
    var result = fontDetector(lorem);
    assert.equal(false, result);
  });

  it("should match with Unicode standard font", function () {
    var result = fontDetector(_UNICODE);
    assert.equal(result, "unicode");
  });

  it("should match with Zawgyi font", function () {
    var result = fontDetector(_ZAWGYI);
    assert.equal(result, "zawgyi");
  });
});