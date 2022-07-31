import { useState } from "react";
import "./Item.css";

const Item = ({ card }) => {
  const [showLogo, setShowLogo] = useState(true);

  return (
    <div className="card" onClick={() => setShowLogo(!showLogo)}>
      {showLogo ? (
        <div>
          <img className="card-logo" src={card.img} alt="logo" />
          <h3 className="card-title">{card.name}</h3>
        </div>
      ) : (
        <ul className="list">
          {card.options.map((element, index) => {
            return <li key={index}>{element}</li>;
          })}
        </ul>

      )} 
      {/* PROJEMİZDE RESMİN ÜZERİNE TIKLANDIĞINDA 
      RESİM İLE ALAKALI BİLGİLER ÇIKMAKTADIR BU SEBEBLE BURADA ONCLİCK FONKSİYONUYLA RESMİN GÖZÜKÜP GÖZÜKMEMESİ 
      İÇİN BİR TRUE FALSE DURUMU AYARLADIK BUNU DA TUTMASI İÇİN BİR STATE YAPISI KURUDUK
      İNİTİAL DEĞER TRUE VE setShowLogo yu showlogunun tersi yapıp onclick fonksiyonun içine koyduk bu sayede tıkladığında showLogo true ise false 
      olup arkadaki bilgileri gösterecek tekrar tıkladığında ise resmi göstercek
      img ve h3 de gelen propsu ilgili kısmını aldık ul kısmında ise options içinde farklı bilgiler olduğu için bunları maps edip bastık
      
      */}

    </div>
  )
}

export default Item