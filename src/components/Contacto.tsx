import Whatsapp from "../assets/whatsapp.svg"
import Facebook from "../assets/facebook.svg"
import Instagram from "../assets/instagram.svg"

function Contacto() {
  return (
    <div className="text-4xl space-y-6">
    <div>Contacto</div>
    <div className="flex space-x-4 space-y-2">
      <img src={Whatsapp} alt="Whatsapp" />    
      <span className="text-base"><a href="https://wa.me/5491144404259">1144404259</a></span>
    </div>
    <div className="flex space-x-4 space-y-2">
      <img src={Facebook} alt="Facebook" />
      <span className="text-base">
        <a 
        href="https://www.facebook.com/people/Seccional-La-Plata-Uf/100064030420879/?mibextid=2JQ9oc">
        SECCIONAL LA PLATA UF
        </a>
      </span>
    </div>
    <div className="flex space-x-4 space-y-2">
      <img src={Instagram} alt="Instagram" />
      <span className="text-base">
      <a href="https://www.instagram.com/ufseccionallaplata/">
      UFSECCIONALLAPLATA
      </a>
      </span>
    </div>
    </div>
  )
}

export default Contacto