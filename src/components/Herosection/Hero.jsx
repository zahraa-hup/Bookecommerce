import React from "react";
import "./Hero.css"
function Hero() {
  return (
    <section className="bannercontainer">
      <img src="/img/mybanner2.jpg" alt="banner" className="banner" />
      <div className="gridcontainer ">
        <div className="row">
          <div className="col-lg-5 col-md-6 herobooks">
            <img src="/img/book item2.png" alt="book" className=" heroimg3" />
            <img src="/img/book item1.png" alt="book" className=" heroimg2" />
            <img src="/img/book item2.png" alt="book" className=" heroimg1" />
          </div>
          <div className="col-md-6 col-12 herotext">
            <p>
              بيع كتب الجيولوجيا يعدّ فرصة رائعة للطلاب والباحثين ومحبي العلوم
              الطبيعية لفهم تكوين الأرض وتاريخها. تقدم هذه الكتب معلومات معمقة
              حول الصخور، المعادن، البراكين، الزلازل، وتحركات الصفائح التكتونية،
              مما يساعد القارئ على فهم البيئات الطبيعية والكوارث الجيولوجية. من
              خلال توفير كتب الجيولوجيا، يمكن للقراء الاطلاع على أحدث الدراسات
              والنظريات المتعلقة بعلم الأرض، مما يعزز من وعيهم البيئي ويشجعهم
              على المشاركة في الحفاظ على كوكبنا.
            </p>
            <button className="btnreg">سجل الان</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
