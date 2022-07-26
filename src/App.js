import SecondaryNav from "./components/menus/navSecondary";
import Dashboard from "./components/layouts/dashboard";
import Footer from "./components/molecules/footer";
import Header from "./components/molecules/header";

const App = () => {
  return (
    <>
      <Header/>
      <SecondaryNav/>
      <Dashboard/>
      <Footer/>
    </>
  );
}

export default App;
