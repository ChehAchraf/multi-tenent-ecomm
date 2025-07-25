import { Footer } from "./Footer";
import { Navbar } from "./Nabar";

interface Props {
    children: React.ReactNode
}

const Layout = ({ children }: Props) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex-1">
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout;