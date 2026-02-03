import Header from "@components/Header";
import Profile from "@components/Profile";
import Footer from "@components/Footer";

export default function App() {
  return (
    <div className="container">
      <Header />
      <main>
        <Profile />
      </main>
      <Footer />
    </div>
  );
}
