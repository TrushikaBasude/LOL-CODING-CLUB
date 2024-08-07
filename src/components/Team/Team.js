import React, { useState } from "react";
import ProfileCard from "./ProfileCard";
import "./Team.css";

import AkshitaJoshi from "../../images/FoundingMembers/AkshitaJoshi.jpg";
import SanyamRawaneJain from "../../images/FoundingMembers/SanyamRawaneJain.jpg";
import VarunLohade from "../../images/FoundingMembers/VarunLohade.jpg";
import AkarshaJain from "../../images/FoundingMembers/AkarshaJain.jpg";
import ChetasRaulkar from "../../images/FoundingMembers/ChetasRaulkar.png";
import DurgeshKudalkar from "../../images/FoundingMembers/DurgeshKudalkar.jpg";
import RajasDaryapurkar from "../../images/FoundingMembers/RajasDaryapurkar.jpg";
import PushkarKonasirasgi from "../../images/FoundingMembers/PushkarKonasirasgi.JPG";
import MitaliLade from "../../images/FoundingMembers/MitaliLade.jpg";

import ChinmayAnnadate from "../../images/CommitteeMembers2023to2024/ChinmayAnnadate.jpg";
import LaxmiKurapati from "../../images/CommitteeMembers2023to2024/LaxmiKurapati.jpg";
import VivekGogi from "../../images/CommitteeMembers2023to2024/VivekGogi.jpg";
import PratikshaKasliwal from "../../images/CommitteeMembers2023to2024/PratikshaKasliwal.jpg";
import VarunPalrecha from "../../images/CommitteeMembers2023to2024/VarunPalrecha.JPG";
import YashGosavi from "../../images/CommitteeMembers2023to2024/YashGosavi.jpg";
import SakshiBidwai from "../../images/CommitteeMembers2023to2024/SakshiBidwai.png";
import AdityaGadekar from "../../images/CommitteeMembers2023to2024/AdityaGadekar.png";
import SuneetNankani from "../../images/CommitteeMembers2023to2024/SuneetNankani.jpg";
import LavanyaIndapure from "../../images/CommitteeMembers2023to2024/LavanyaIndapure.jpg";
import SrushtiWalli from "../../images/CommitteeMembers2023to2024/SrushtiWalli.jpg";
import TanmayKanhed from "../../images/CommitteeMembers2023to2024/TanmayKanhed.jpeg";
import PourneemaKulkarni from "../../images/CommitteeMembers2023to2024/PourneemaKulkarni.jpg";
import AbhayShankur from "../../images/CommitteeMembers2023to2024/AbhayShankur.jpg";
import SiddharthJain from "../../images/CommitteeMembers2023to2024/SiddharthJain.jpg";
import MrudulaLokhande from "../../images/CommitteeMembers2023to2024/MrudulaLokhande.jpg";
import AryanBhandari from "../../images/CommitteeMembers2023to2024/AryanBhandari.jpeg";
import OmJain from "../../images/CommitteeMembers2023to2024/OmJain.jpg";
import JahnaviJain from "../../images/CommitteeMembers2023to2024/JahnaviJain.jpg";
import AkashPawar from "../../images/CommitteeMembers2023to2024/AkashPawar.jpg";
import TrushikaBasude from "../../images/CommitteeMembers2023to2024/TrushikaBasude.jpg";
import ShrutiPawar from "../../images/CommitteeMembers2023to2024/ShrutiPawar.jpeg";
import ArpitaBaraskar from "../../images/CommitteeMembers2023to2024/ArpitaBaraskar.jpg";

import KetakiBidkar from "../../images/CommitteeMembers2024to2025/KetakiBidkar.png";
import ShubhamBayas from "../../images/CommitteeMembers2024to2025/ShubhamBayas.jpeg";
import NikhilkumarJain from "../../images/CommitteeMembers2024to2025/NikhilkumarJain.jpeg";
import YogeshKulkarni from "../../images/CommitteeMembers2024to2025/YogeshKulkarni.jpeg";
import ChaviMaru from "../../images/CommitteeMembers2024to2025/ChaviMaru.jpeg";
import AdityaDhepe from "../../images/CommitteeMembers2024to2025/AdityaDhepe.jpeg";
import MaheshMhanta from "../../images/CommitteeMembers2024to2025/MaheshMhanta.jpeg";
import ABPeerampalli from "../../images/CommitteeMembers2024to2025/A.B.Peerampalli.jpeg";
import IrfanShaikh from "../../images/CommitteeMembers2024to2025/IrfanShaikh.jpeg";
import LakshJain from "../../images/CommitteeMembers2024to2025/LakshJain.jpeg";
import KomalKalshetti from "../../images/CommitteeMembers2024to2025/KomalKalshetti.jpeg";
import PriyankaSundalam from "../../images/CommitteeMembers2024to2025/PriyankaSundalam.jpeg";
import SanikaChougule from "../../images/CommitteeMembers2024to2025/SanikaChougule.jpeg";
import PriyankaHotkar from "../../images/CommitteeMembers2024to2025/PriyankaHotkar.jpeg";
import SanjanaMutkiri from "../../images/CommitteeMembers2024to2025/SanjanaMutkiri.jpeg";
import ArihantGundale from "../../images/CommitteeMembers2024to2025/ArihantGundale.jpeg";
import PranavJinturkar from "../../images/CommitteeMembers2024to2025/PranavJintorkar.jpeg";
import ParmitaPatre from "../../images/CommitteeMembers2024to2025/ParmitaPatre.jpeg";
import GauravKulkarni from "../../images/CommitteeMembers2024to2025/GauravKulkarni.jpg";

function Team() {
  const [FoundingMembers] = useState([
    {
      name: "Akshita Joshi",
      designation: "President",
      image: AkshitaJoshi,
      linkedin: "https://www.linkedin.com/in/joshi-akshita/",
    },
    {
      name: "Sanyam Rawane Jain",
      designation: "Vice President",
      image: SanyamRawaneJain,
      linkedin: "https://www.linkedin.com/in/sanyamrawane/",
    },
    {
      name: "Varun Lohade",
      designation: "Secretary",
      image: VarunLohade,
      linkedin: "https://www.linkedin.com/in/varun-lohade/",
    },
    {
      name: "Akarsha Jain",
      designation: "Joint Secretary ",
      image: AkarshaJain,
      linkedin: "https://www.linkedin.com/in/akarsha-jain-34390321b/",
    },
    {
      name: "Chetas Raulkar",
      designation: "Treasurer",
      image: ChetasRaulkar,
      linkedin: "https://www.linkedin.com/in/chetas-raulkar-01a4731ba/",
    },
    {
      name: "Durgesh Kudalkar",
      designation: "Social Media Manager",
      image: DurgeshKudalkar,
      linkedin: "",
    },
    {
      name: "Rajas Daryapurkar",
      designation: "Director",
      image: RajasDaryapurkar,
      linkedin: "https://www.linkedin.com/in/durgesh-kudalkar-7897571aa/",
    },
    {
      name: "Pushkar Konasirasgi",
      designation: "Director",
      image: PushkarKonasirasgi,
      linkedin: "https://www.linkedin.com/in/pushkar-konasirasgi-907b47214/",
    },
    {
      name: "Mitali Lade",
      designation: "Director",
      image: MitaliLade,
      linkedin: "https://www.linkedin.com/in/mitali-lade-672722248/",
    },
  ]);

  const [CommitteeMembers2023to2024] = useState([
    {
      name: "Chinmay Annadate",
      designation: "President",
      image: ChinmayAnnadate,
      linkedin: "https://www.linkedin.com/in/chinmay-annadate-790a0a211/",
    },
    {
      name: "Laxmi Kurapati",
      designation: "Vice President",
      image: LaxmiKurapati,
      linkedin: "https://www.linkedin.com/in/laxmi-kurapati-b5a096221/",
    },
    {
      name: "Vivek Gogi",
      designation: "Secretary",
      image: VivekGogi,
      linkedin: "https://www.linkedin.com/in/vivekgogi/",
    },
    {
      name: "Pratiksha Kasliwal",
      designation: "Joint Secretary ",
      image: PratikshaKasliwal,
      linkedin: "https://www.linkedin.com/in/pratiksha-kasliwal-151707210/",
    },
    {
      name: "Varun Palrecha",
      designation: "Treasurer",
      image: VarunPalrecha,
      linkedin: "https://www.linkedin.com/in/varun-palrecha-4a0217130/",
    },
    {
      name: "Yash Gosavi",
      designation: "Social Media Manager",
      image: YashGosavi,
      linkedin: "https://www.linkedin.com/in/yash-gosavi02",
    },
    {
      name: "Sakshi Bidwai",
      designation: "Director",
      image: SakshiBidwai,
      linkedin: "https://www.linkedin.com/in/sakshi-bidwai-a48034226",
    },
    {
      name: "Aditya Gadekar",
      designation: "Director",
      image: AdityaGadekar,
      linkedin: "https://www.linkedin.com/in/aditya-gadekar-b3246a246",
    },
    {
      name: "Suneet Nankani",
      designation: "Director",
      image: SuneetNankani,
      linkedin: "https://www.linkedin.com/in/suneet-nankani-601a851b0",
    },
    {
      name: "Lavanya Indapure",
      designation: "Director",
      image: LavanyaIndapure,
      linkedin: "",
    },
    {
      name: "Tanmay Kanhed",
      designation: "Director",
      image: TanmayKanhed,
      linkedin: "https://www.linkedin.com/in/tanmay-kanhed-1a2244255",
    },
    {
      name: "Pourneema  Kulkarni ",
      designation: "Director",
      image: PourneemaKulkarni,
      linkedin: "https://www.linkedin.com/in/pourneema-kulkarni-033839247/",
    },
    {
      name: "Srushti Walli",
      designation: "Director",
      image: SrushtiWalli,
      linkedin: "https://www.linkedin.com/in/srushti-walli-b33399239",
    },
    {
      name: "Abhay Shankur",
      designation: "Executive Coordinator",
      image: AbhayShankur,
      linkedin: "https://www.linkedin.com/in/abhayshankur",
    },
    {
      name: "Siddharth Jain",
      designation: "Executive Coordinator",
      image: SiddharthJain,
      linkedin: "https://www.linkedin.com/in/siddharth-jain-530784216",
    },
    {
      name: "Mrudula Lokhande",
      designation: "Executive Coordinator",
      image: MrudulaLokhande,
      linkedin: "https://www.linkedin.com/in/mrudula-lokhande",
    },
    {
      name: "Shruti Pawar",
      designation: "Graphic Designer",
      image: ShrutiPawar,
      linkedin: "https://www.linkedin.com/in/shruti-pawar-584299223",
    },
    {
      name: "Arpita Baraskar",
      designation: "Graphic Designer",
      image: ArpitaBaraskar,
      linkedin: "https://www.linkedin.com/in/arpita-baraskar-966829259",
    },
    {
      name: "Aryan Bhandari",
      designation: "Student Coordinator",
      image: AryanBhandari,
      linkedin: "https://www.linkedin.com/in/aryan-bhandari-727947252",
    },
    {
      name: "Om Jain",
      designation: "Student Coordinator",
      image: OmJain,
      linkedin: "https://www.linkedin.com/in/om-jain-67a926258",
    },
    {
      name: "Jahnavi Jain",
      designation: "Student Coordinator",
      image: JahnaviJain,
      linkedin: "https://www.linkedin.com/in/jahnavi-jain-027681259",
    },
    {
      name: "Akash Pawar",
      designation: "Content Writer",
      image: AkashPawar,
      linkedin: "https://www.linkedin.com/in/akash-pawar-516a74234",
    },
    {
      name: "Trushika Basude",
      designation: "Content Writer",
      image: TrushikaBasude,
      linkedin: "https://www.linkedin.com/in/trushika-basude-230491261",
    },
  ]);

  const [CommitteeMembers2024to2025] = useState([
    {
      name: "Ketaki Bidkar",
      designation: "President",
      image: KetakiBidkar,
      linkedin: "https://www.linkedin.com/in/ketaki-bidkar-3b723a233",
    },
    {
      name: "Shubham Bayas",
      designation: "Vice President",
      image: ShubhamBayas,
      linkedin: "https://www.linkedin.com/in/shubham-bayas-489065199",
    },
    {
      name: "Nikhilkumar Jain",
      designation: "Secretary",
      image: NikhilkumarJain,
      linkedin: "https://www.linkedin.com/in/nikhilkumar-jain2411",
    },
    {
      name: "Jahnavi Jian",
      designation: "Joint Secretary ",
      image: JahnaviJain,
      linkedin: "https://www.linkedin.com/in/jahnavi-jain-027681259",
    },
    {
      name: "Abhay Shankur",
      designation: "Treasurer",
      image: AbhayShankur,
      linkedin: "https://www.linkedin.com/in/abhayshankur",
    },
    {
      name: "Shruti Pawar",
      designation: "Design & Media Manager",
      image: ShrutiPawar,
      linkedin: "https://www.linkedin.com/in/shrutipawar99",
    },
    {
      name: "Yogesh Kulkarni",
      designation: "Technical Head",
      image: YogeshKulkarni,
      linkedin: "https://www.linkedin.com/in/contact-yogeshkulkarni21",
    },
    {
      name: "Siddharth Jain",
      designation: "Director",
      image: SiddharthJain,
      linkedin: "https://www.linkedin.com/in/siddharth-zn01",
    },
    {
      name: "Chavi Maru",
      designation: "Director",
      image: ChaviMaru,
      linkedin: "https://www.linkedin.com/in/chavi-maru-ab2552214",
    },
    {
      name: "Arpita Baraskar",
      designation: "Director",
      image: ArpitaBaraskar,
      linkedin: "https://www.linkedin.com/in/arpita-baraskar-966829259",
    },
    {
      name: "Om Jain",
      designation: "Director",
      image: OmJain,
      linkedin: "https://www.linkedin.com/in/om-jain-67a926258",
    },
    {
      name: "Trushika Basude",
      designation: "Director",
      image: TrushikaBasude,
      linkedin: "https://www.linkedin.com/in/trushika-basude-230491261",
    },
    {
      name: "Aditya Dhepe",
      designation: "Director",
      image: AdityaDhepe,
      linkedin: "https://www.linkedin.com/in/aditya-dhepe-35067a259",
    },
    {
      name: "Mahesh Mhanta",
      designation: "Technical Director",
      image: MaheshMhanta,
      linkedin: "https://www.linkedin.com/in/mahesh-mhanta-926187234",
    },
    {
      name: "A.B.Perampalli",
      designation: "Technical Director",
      image: ABPeerampalli,
      linkedin: "https://www.linkedin.com/in/abdul-basit-peerampalli",
    },
    {
      name: "Irfan Shaikh",
      designation: "Technical Director",
      image: IrfanShaikh,
      linkedin: "https://www.linkedin.com/in/irfan-shaikh-657325212",
    },
    {
      name: "Priyanka Sundalam",
      designation: "Technical Director",
      image: PriyankaSundalam,
      linkedin: "https://www.linkedin.com/in/priyankasundalam",
    },
    {
      name: "Laksh Jain",
      designation: "Technical Director",
      image: LakshJain,
      linkedin: "https://www.linkedin.com/in/laksh-j-566432136",
    },
    {
      name: "Komal Kalshetti",
      designation: "Technical Director",
      image: KomalKalshetti,
      linkedin: "https://www.linkedin.com/in/komal-kalshetti-288832259",
    },
    {
      name: "Priyanka Hotkar",
      designation: "Student Coordinator",
      image: PriyankaHotkar,
      linkedin: "",
    },
    {
      name: "Sanjana Mutkiri",
      designation: "Student Coordinator",
      image: SanjanaMutkiri,
      linkedin: "https://www.linkedin.com/in/sanjana-mutkiri-711681259/",
    },
    {
      name: "Sanika Chougule",
      designation: "Student Coordinator",
      image: SanikaChougule,
      linkedin: "",
    },
    {
      name: "Arihant Gundale",
      designation: "Student Coordinator",
      image: ArihantGundale,
      linkedin: "https://www.linkedin.com/in/arihant-gundale-6b14b9259",
    },
    {
      name: "Aryan Bhandari",
      designation: "Student Coordinator",
      image: AryanBhandari,
      linkedin: "https://www.linkedin.com/in/aryan-bhandari-727947252",
    },
    {
      name: "Parmita Patre",
      designation: "Student Coordinator",
      image: ParmitaPatre,
      linkedin: "https://www.linkedin.com/in/parmita-patre",
    },
    {
      name: "Pranav Jinturkar",
      designation: "Student Coordinator",
      image: PranavJinturkar,
      linkedin: "https://www.linkedin.com/in/pranav-jinturkar",
    },
    {
      name: "Gaurav Kulkarni",
      designation: "Graphic Designer",
      image: GauravKulkarni,
      linkedin: "https://www.linkedin.com/in/gaurav-kulkarni-424a45229",
    },
  ]);

  return (
    <div className="teams">
      <h1 className="teams-heading">Teams</h1>
      <h3
        className="teams-sub-heading"
        data-aos="zoom-in"
        data-aos-duration="2500"
      >
        Presenting the Phenomenal Team Fueling Our LOL Coding Club! 🌟🚀
      </h3>

      <div id="team" className="teams-content">
        {/* <details open> */}

        <details open>
          <summary className="section-heading">
            <span>LOL CODING CLUB COMMITTEE 2024-25</span>
          </summary>

          <div className="profile-card-container">
            {CommitteeMembers2024to2025.map((member, index) => (
              <ProfileCard
                key={index}
                image={member.image}
                name={member.name}
                designation={member.designation}
                linkedin={member.linkedin}
              />
            ))}
          </div>
        </details>


        <details>
          <summary className="section-heading">
            <span>LOL CODING CLUB COMMITTEE 2023-24</span>
          </summary>

          <div className="profile-card-container">
            {CommitteeMembers2023to2024.map((member, index) => (
              <ProfileCard
                key={index}
                image={member.image}
                name={member.name}
                designation={member.designation}
                linkedin={member.linkedin}
              />
            ))}
          </div>
        </details>

        <details>
          <summary className="section-heading">
            <span>LOL CODING CLUB FOUNDING MEMBERS 2022-23</span>
          </summary>

          <div className="profile-card-container">
            {FoundingMembers.map((member, index) => (
              <ProfileCard
                key={index}
                image={member.image}
                name={member.name}
                designation={member.designation}
                linkedin={member.linkedin}
              />
            ))}
          </div>
        </details>
      </div>
    </div>
  );
}

export default Team;
