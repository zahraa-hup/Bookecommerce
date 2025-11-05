import React from "react";
import "./Hero1.css"
function Hero1() {
  return (
    <div className="hero1container">
      <div className="row hero1row">
        <div className="col-sm-6  hero1textcon">
          <h4 className="hero1title"> استكشف أعماق الأرض مع مجموعتنا الجديدة من كتب الجيولوجيا !</h4>
          <p className="hero1textbody">
            سواء كنت طالبًا، باحثًا، أو عاشقًا للطبيعة، مجموعتنا الجديدة من كتب
            الجيولوجيا مصممة خصيصًا لك! من أساسيات الجيولوجيا إلى علوم الصخور
            والبترول والهيدرولوجيا الجيولوجية، اكتشف كنوز المعرفة التي تأخذك في
            رحلة عبر الزمن والأرض. أضف لمكتبتك مصادر موثوقة تساعدك على فهم
            كوكبنا بشكل أعمق!
          </p>
          <button className="hero1btn">سجل الان</button>
        </div>
        <div className="col-sm-5  hero1imgstyle" >
          <div className="hero1imgcontainer">
            <img src="/img/books-list.png" alt="" className="her1img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero1;
