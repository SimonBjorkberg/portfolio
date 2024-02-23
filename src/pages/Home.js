import About from "../components/About";
import Projects from "../components/Projects";

const Home = () => {
    return (
        <div className="mx-auto md:w-[80%]">
            <About />
            <Projects />
        </div>
    )
}

export default Home;