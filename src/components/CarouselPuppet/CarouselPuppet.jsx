import React from 'react';
import './CarouselPuppet.css';

import helmat from "../../assets/helmat.png";
import northPuppet from '../../assets/kim-removebg-preview 7.png';

import kim from '../../assets/kim-removebg-preview 6.png';
import kims from '../../assets/photo_2023-08-14_15-43-51 2.png';
import kimss from '../../assets/kim-removebg-preview 7.png';
import kimsss from '../../assets/low-poly-solderssss.png';
import kimssss from '../../assets/image 1174.png';
import arrow8 from '../../assets/Arrow 8.png'
import arrow7 from '../../assets/Arrow 7.png'

const imageData = [
    { id: 1, src: kim, alt: 'Image 1' },
    { id: 2, src: kims, alt: 'Image 2' },
    { id: 3, src: kimss, alt: 'Image 3' },
    { id: 4, src: kimsss, alt: 'Image 4' },
    { id: 5, src: kimssss, alt: 'Image 5' },
];
const imageTexts = [
    "The days are gone forever when our enemies could blackmail us with nuclear bombs",
    "Custom text for image 2 when our enemies could blackmail us with nuclear bombs",
    "Custom text for image 3 when our enemies could blackmail us with nuclear bombs",
    "Custom text for image 4 when our enemies could blackmail us with nuclear bombs",
    "Custom text for image 5 when our enemies could blackmail us with nuclear bombs",
];

const imageTextsh3 = [
    "FUPREME LEADER OF NORTH KOREA",
    "RUPREME LEADER OF NORTH KOREA",
    "SUPREME LEADER OF NORTH KOREA",
    "GUPREME LEADER OF NORTH KOREA",
    "RUPREME LEADER OF NORTH KOREA",
];
const imagePuppets = [
    kimssss,
    kimsss,
    kimss,
    kims,
    northPuppet,
];

const MyCarousel = () => {
    const [items, setItems] = React.useState(imageData);
    const [selectedItem, setSelectedItem] = React.useState(Math.floor(items.length / 2));
    const [selectedItemImg, setSelectedItemImg] = React.useState(Math.floor(items.length / 2));
    const [isAnimating, setIsAnimating] = React.useState(false);
    const [itemNumber, setItemNumber] = React.useState(1)

    const handleAnimation = () => {
        setIsAnimating(true);
        // Add a delay to remove the animation class after the animation is completed
        setTimeout(() => {
            setIsAnimating(false);
        }, 1000); // Adjust the delay time based on your animation duration
    };

    console.log('selectedItem', imageData[selectedItem])

    const shiftNext = () => {
        setItems(prevItems => {
            const copy = [...prevItems];
            const lastItem = copy.pop();
            copy.unshift(lastItem);

            setSelectedItem((selectedItem + 1) % copy.length);
            setSelectedItemImg((selectedItemImg + 1) % copy.length);


            return copy;
        });
        handleAnimation()
        setItemNumber(itemNumber => itemNumber < items.length ? itemNumber + 1 : 1)
    };

    const shiftPrev = () => {
        setItems(prevItems => {
            const copy = [...prevItems];
            const firstItem = copy.shift();
            copy.push(firstItem);

            setSelectedItem((selectedItem - 1 + copy.length) % copy.length);
            setSelectedItemImg((selectedItemImg - 1 + copy.length) % copy.length);

            return copy;
        });
        handleAnimation()
        setItemNumber(itemNumber => itemNumber > 1 ? itemNumber - 1 : items.length)
    };

    return (
        <div className="HelmetSectionContainer">
            <div className="HelmetSectionContainerCentered">
                <img src={helmat} alt="" />
                <h2>LEGENDARY <span className="level-span">1/1</span>  SOLDIERS</h2>
                <p>A select number of Soldier NFTs will feature one-of-one (1/1) characters with completely unique outfits. Explore a rich history of famous historical figures from all parts of the world – from Julius Caesar, Cleopatra to Genghis Khan and more.</p>
                <div className='HelmetSectionContainerIMG scrolling-text-container'>
                    <marquee className={isAnimating ? 'fade_in_animation' : 'scrolling-text'}>{imageTextsh3[selectedItem]}</marquee>
                    <div className={isAnimating ? 'fade_in_animation' : ''}>
                        <img src={imagePuppets[selectedItem]} alt="" />
                    </div>
                </div>
                <h5 className={isAnimating ? 'fade_in_animation' : ''}><span className="quotation">"</span>{imageTexts[selectedItem]}<span className="quotation">"</span></h5>


                <div style={{ display: 'flex', alignItems: 'center' }} className='maindivcustom'>
                    <button onClick={shiftPrev} className="custom-button"><img src={arrow8} alt="" /></button>
                    {items.map((item, index) => (
                        <div
                            key={item.id}
                            className='custom-div'
                        // style={{ width: index === 2, height: index === 2}}
                        >
                            <img
                                src={item.src}
                                alt={item.alt}
                                className="custom-img"
                            />
                        </div>
                    ))}
                    <button onClick={shiftNext} className="custom-button"><img src={arrow7} alt="" /></button>
                </div>
                <p>{itemNumber}<span style={{ opacity: '0.7' }}> / {items.length}</span></p>
            </div>
        </div>
    );
}

export default MyCarousel;
