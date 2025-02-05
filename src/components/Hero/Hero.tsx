import { Carousell } from "../Carousel/Carousel"
import Searchbar from "../Searchbar/Searchbar"


export default function Hero() {
    return (
        <div className="w-screen h-full overflow-hidden">
            <Carousell />
            <Searchbar />
        </div>
    )
}