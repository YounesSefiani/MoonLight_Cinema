import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faMobileScreenButton,
  faComments,
  faSkull,
  faCamera,
  faCouch,
  faSkullCrossbones,
  faBagShopping,
} from "@fortawesome/free-solid-svg-icons";
import MoonLightPass from "../../assets/moonlightPass.jpg";
import Header from "../../components/Header/Header";
import MoonLightLogo from "../../assets/moonlightLogo.png";
import Footer from "../../components/Footer/Footer";
import "./InfosPratiques.css";

function InfosPratiques() {
  const position = [47.32487369574671, 5.034664200000001];
  return (
    <div className="infosPage">
      <Header />
      <h1>Infos Pratiques</h1>
      <div className="infosCinema">
        <h2>Moonlight Cinema</h2>
        <div className="infosMoonLight">
          <div className="coordonnes">
            <img src={MoonLightLogo} alt="MoonLight Logo" />
            <p>6 rue Devosge</p>
            <p>21000 Dijon</p>
            <p>moonlight.cinema@hotmail.fr</p>
          </div>
          <div className="map">
            <MapContainer center={position} zoom={16} scrollWheelZoom={false}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={position}>
                <Popup>Cinéma Moonlight</Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>
      <div className="infosCinema">
        <h2>Tarifs</h2>
        <div className="prices">
          <p>Plein Tarif : 9,50 €</p>
          <p>Tarif réduit*: 4,90 €</p>
          <p>Tarif de groupe**: 55 €</p>
          <p>ShowTime (Avant-premières): 7,90 €</p>
          <p>Dernière chance : 5,50 €</p>
          <p>Séance spéciale (Evènement) : 5,90 €</p>
          <p>-18 ans: 4,50 €</p>
        </div>
        <div className="pricesInfos">
          <p>
            *Etudiants, demandeurs d’emploi (présentation sur justificatif, ex :
            Pièce d’identité, carte étudiante)
          </p>
          <p>
            ** à partir de 10 personnes. (Familles, Groupe d’amis, classes
            scolaires, groupe de centre de loisirs, etc...)
          </p>
        </div>
      </div>
      <div className="infosCinema">
        <h2>Moonlight Pass</h2>
        <div className="moonLightPass">
          <div className="moonLightPassText">
            <p>
              Avec MoonLight Pass, vous pouvez accéder à toutes les séances
              cinéma. <br /> Nouveautés, films présents, avant-premières,
              dernière chance, absolument tout ! <br />
              Sans oublier les avantages qui vont avec !
            </p>
          </div>
          <div className="moonLightPassLogo">
            <img src={MoonLightPass} alt="MoonLight Pass" />
            <button type="button" className="buttonPass">
              Découvrez MoonLight Pass !
            </button>
          </div>
        </div>
      </div>
      <div className="infosCinema">
        <h2>Règles de bonne séance</h2>
        <div className="moonLightRules">
          <div className="iconTitle">
            <div className="iconRules">
              <FontAwesomeIcon icon={faComments} />
            </div>
            <div className="ruleTitle">
              <h3>La première règle au cinéma : On ne parle pas au cinéma !</h3>
            </div>
          </div>
          <div className="rule">
            <p>
              Pendant la séance, vous êtes libre de partager vos réactions et
              impressions avec vos proches, mais veillez à le faire à voix basse
              afin de ne pas perturber les autres spectateurs. Votre coopération
              contribue à créer une expérience cinématographique agréable pour
              tous.
            </p>
          </div>
        </div>
        <div className="moonLightRules">
          <div className="iconTitle">
            <div className="iconRules">
              <FontAwesomeIcon icon={faClock} />
            </div>
            <div className="ruleTitle">
              <h3>
                Dans la vie, il y a toujours un peu de retard... Mais ce n'est
                jamais une raison pour ne pas essayer d'être à l'heure.
              </h3>
            </div>
          </div>
          <div className="rule">
            <p>
              Le cinéma refusera tout entrée à dix minutes du lancement du film,
              juste après les bandes-annonces et publicités. Il est donc
              important de venir à l'heure pour ne pas perturber les
              spectateurs.
            </p>
          </div>
        </div>
        <div className="moonLightRules">
          <div className="iconTitle">
            <div className="iconRules">
              <FontAwesomeIcon icon={faMobileScreenButton} />
            </div>
            <div className="ruleTitle">
              <h3>
                Le portable éteint, c'est le respect de la magie du cinéma.
              </h3>
            </div>
          </div>
          <div className="rule">
            <p>
              Nous vivons à une époque où la connectivité est omniprésente.
              Cependant, la seule connexion autorisée dans ce cinéma est celle
              avec le film que vous allez regarder. Nous vous prions donc de
              bien vouloir garder votre téléphone portable dans votre poche ou
              votre sac, en respectant ainsi le confort et le plaisir de chacun.
            </p>
          </div>
        </div>
        <div className="moonLightRules">
          <div className="iconTitle">
            <div className="iconRules">
              <FontAwesomeIcon icon={faSkull} />
            </div>
            <div className="ruleTitle">
              <h3>Prenez garde, âmes sensibles !</h3>
            </div>
          </div>
          <div className="rule">
            <p>
              Tous les films possèdent une classification par le CNC qui se
              traduit par une limitation d'accès par l'âge. Certains films ne
              sont pas conseillés pour un jeune public et un justificatif d'âge
              ou l'accompagnement d'un parent sera demandé, ou l'accès au film
              sera interdit. Le cinéma décline toute responsabilité aux
              conséquences néfastes qui peuvent sensibilité des enfants ou du
              public. C'est pour ça que le cinéma précisera l'âge requis et la
              nature des images ou les thèmes du film qui peuvent être violentes
              ou insupportables pour les âmes sensibles.
            </p>
          </div>
        </div>
        <div className="moonLightRules">
          <div className="iconTitle">
            <div className="iconRules">
              <FontAwesomeIcon icon={faCamera} />
            </div>
            <div className="ruleTitle">
              <h3>Seuls vos yeux et votre coeur peuvent saisir ces images.</h3>
            </div>
          </div>
          <div className="rule">
            <p>
              L'enregistrement totale ou partielle d'un film avec un appareil
              d'enregistrement (portables, caméras, appareils photos...) est
              totalement interdit par la loi. Tout infraction de ce genre est
              punis de trois ans d'emprisonnement et une amende de 300 000 €
              (article L.335-2 et 335-3 du code de la propriété intellectuelle).
            </p>
          </div>
        </div>
        <div className="moonLightRules">
          <div className="iconTitle">
            <div className="iconRules">
              <FontAwesomeIcon icon={faCouch} />
            </div>
            <div className="ruleTitle">
              <h3>Le confort pour vous, mais aussi pour eux.</h3>
            </div>
          </div>
          <div className="rule">
            <p>
              Lorsque vous avez trouvé votre place, veuillez ne pas monopoliser
              d'autres sièges. Merci de ne pas poser vos pieds sur le dessus du
              siège en face de vous.
            </p>
          </div>
        </div>
        <div className="moonLightRules">
          <div className="iconTitle">
            <div className="iconRules">
              <FontAwesomeIcon icon={faSkullCrossbones} />
            </div>
            <div className="ruleTitle">
              <h3>Seul le film peut vous mettre dans tous vos états</h3>
            </div>
          </div>
          <div className="rule">
            <p>
              L'accès au cinéma sera interdite aux personnes pouvant être sous
              l'empire de l'alcool et/ou aux substances illicites. L'appel de la
              sécurité ou des forces de l'ordre peut être nécessaire en cas de
              comportement irrespectueux, voire violent.
            </p>
          </div>
        </div>
        <div className="moonLightRules">
          <div className="iconTitle">
            <div className="iconRules">
              <FontAwesomeIcon icon={faBagShopping} />
            </div>
            <div className="ruleTitle">
              <h3>L'affaire est dans le sac !</h3>
            </div>
          </div>
          <div className="rule">
            <p>
              Vos effets personnels doivent être rangés dans vos poches ou dans
              votre sac et ils ne doivent pas être éparpillés partout. Une
              vérification des sacs peut être demandée par nos agents de
              sécurité. Moonlight Cinéma décline toute responsabilité au vol et
              au perte de vos affaires.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default InfosPratiques;
