import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import EventsPage from "./pages/EventsPage";
import TeamPage from "./pages/TeamPage";
import SuggestPage from "./pages/redirects/SuggestPage";
import CertificateVerificationPage from "./pages/CertificateVerificationPage";
import BlogsPage from "./pages/redirects/BlogsPage";
import SubscribePage from "./pages/redirects/SubscribePage";
import WriteBlogForLOLPage from "./pages/redirects/WriteBlogForLOLPage";
import HashnodePage from "./pages/redirects/HashnodePage";
import LinkedInPage from "./pages/redirects/LinkedInPage";
import DiscordPage from "./pages/redirects/DiscordPage";
import InstagramPage from "./pages/redirects/InstagramPage";
import LOLIDPage from "./pages/redirects/LOLIDPage";
import AlumniConnectPage from "./pages/AlmuniConnectPage";
import PdfPage from "./pages/PdfPage"
import NextTopLoader from 'nextjs-toploader';

function App() {
    return (
        <div className="App">
            <NextTopLoader color="#F1B900" />
            <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/events" element={<EventsPage />} />
                <Route path="/team" element={<TeamPage />} />
                <Route path="/suggest" element={<SuggestPage />} />
                <Route path="/verify" element={<CertificateVerificationPage />} />
                <Route path="/alumniconnect" element={<AlumniConnectPage />} />
                <Route path="/view/:file" element={<PdfPage />} />


                {/* redirects */}
                <Route path="/blogs" element={<BlogsPage />} />
                <Route path="/subscribe" element={<SubscribePage />} />
                <Route path="/write-blog-for-lol" element={<WriteBlogForLOLPage />} />
                <Route path="/hashnode" element={<HashnodePage />} />
                <Route path="/linkedin" element={<LinkedInPage />} />
                <Route path="/discord" element={<DiscordPage />} />
                <Route path="/instagram" element={<InstagramPage />} />
                <Route path="/lol-id" element={<LOLIDPage />} />
            </Routes>
        </div>
    );
}

export default App;
