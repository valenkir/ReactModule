import Hero from "../components/Hero";
import HeroContacts from "../components/HeroContacts";

function Main({ theme = "dark" }) {
  return (
    <main className="Main-container">
      <Hero />
      <HeroContacts />
    </main>
  );
}

export default Main;
