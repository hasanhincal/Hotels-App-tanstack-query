import { Link } from "react-router-dom";
import Container from "../Container";

const Header = () => {
  return (
    <header className="border-b">
      <Container designs="flex justify-between">
        <div className="flex gap-10">
          <h1 className="font-bold text-xl">Tripster</h1>

          <nav className="flex items-center gap-5">
            <Link to={"/"}>Oteller</Link>
            <Link to={"/"} className="max-md:hidden">
              Popüler
            </Link>
            <Link to={"/admin/create"}>Oluştur</Link>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <button className="bg-indigo-500 py-1 px-5 border rounded-full text-white max-md:hidden">
            Kayıt Ol
          </button>
          <button className="bg-indigo-500 py-1 px-5 border rounded-full text-white">
            Giriş Yap
          </button>
        </div>
      </Container>
    </header>
  );
};

export default Header;
