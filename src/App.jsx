import { Hero, Projects, Tools, About, Footer } from './sections'
import Nav from './components/nav'

const App = () => (
    <main className="relative">
        <Nav />
        <section className="/">
            <Hero />
        </section>
        <section className=" bg-slate-700">
            <Projects />
        </section>
        <section className="padding">
            <Tools />
        </section>
        <section className="padding">
            <About />
        </section>
        <section className="padding">
            <Footer />
        </section>
    </main>
)
export default App
