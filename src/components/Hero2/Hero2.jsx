import React from "react";
import "./hero2.css";
function Hero2() {
  return (
    <div className="hero2container">
      <div className="row hero2row">
        <div className="col-sm-6  hero2textcon">
          <h4 className="hero2title">
            مراجعات شاملة في مادة الجيولوجيا استعد للنجاح!
          </h4>
          <p className="hero2textbody">
            "هل أنت مستعد لاجتياز امتحانات الجيولوجيا بثقة؟ نقدم لك سلسلة
            مراجعات شاملة تغطي جميع مواضيع المادة بأسلوب مبسط ومركز. انضم إلينا
            لتطوير فهمك للجيولوجيا من الأساسيات إلى المواضيع المتقدمة، مع شرح
            معمق ورسوم توضيحية تساعدك على استيعاب المفاهيم بسرعة. لا تفوت الفرصة
            – استعد للنجاح معنا!"
          </p>
          <button className="hero2btn"> تصفح المراجعات</button>
        </div>
        <div className="col-sm-5  hero2imgstyle">
          <div className=" hero2imgcontainer row">
            <div className="col-sm-6">
              <img src="/img/geology.png" alt="" />
            </div>
            <div className="col-sm-6">
              <img src="/img/ground.png" alt="" />
            </div>
            <div className="col-sm-6">
              <img src="/img/ground.png" alt="" />
            </div>
            <div className="col-sm-6">
              <img src="/img/geology.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero2;
