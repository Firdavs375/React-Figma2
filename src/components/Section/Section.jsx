import { ThereImage, sectionImageBoxes } from "../../utiels/utiels"
import "../Section/Style.css"
const Section = () => {
    return (
        <>
            <h1 className="section-text">Rent a Luxury Car</h1>
            <section className="section1">
                {sectionImageBoxes?.map(({ hover_bottom_name, hover_top_name, image }) => {
                    return (
                        <>
                            <div className="car-box">
                                <img src={image} alt="svg" className="car-image-boxes" />
                                <div className="hover-car-texts">
                                    <h1 className="hover-text-top">{hover_top_name}</h1>
                                    <h3 className="hover-text-bottom">{hover_bottom_name}</h3>
                                </div>
                            </div>
                        </>
                    )
                }
                )}
            </section>

            <h1 className="heddin1">Our Other Services</h1>

            <section className="section2">
                {ThereImage?.map(({ onetext, whotext, image }) => {
                    return (
                        <>
                            <div className="carBox2">
                                <img src={image} alt="" className="imageCar1" />
                                <h1 className="heddin2">{onetext}</h1>
                                <p className="text1">{whotext}</p>
                            </div>
                        </>
                    )
                })}
            </section>
        </>
    )
}

export default Section