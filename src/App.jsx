import { Hero, Projects, Tools, About, Footer } from './sections'
import Nav from './components/nav'

const App = () => (
    <main className="relative">
        <Nav />
        <section className="padding">
            <Hero />
        </section>
        <section className="padding">
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
