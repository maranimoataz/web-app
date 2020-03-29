import React,{ useState } from 'react';
import "./Slider.css";
import ImgComp from './ImgComp';
function Slider(){
    let sliderArr = [<ImgComp src="image/img1.jpg"/>,
    <ImgComp src="image/img6.jpg"/>,
    <ImgComp src="image/img7.jpg"/>,
    <ImgComp src="image/img8.jpg"/>];
    const [x, setX] = useState(0);
    const goLeft = () => {
        x === 0 ?setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
    };
    const goRight = () => {
        x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100);
    };

    return (
        <div className="slider">
        {
            sliderArr.map((item,index)=>{
                return(
                    <div key={index} className="slide" style={{transform:`translateX(${x}%)`}}>
                        {item}
                    </div>
                    )
            })
        }
        <button id="goLeft" onClick={goLeft}>
        <i class="fas fa-chevron-left"></i>
        </button>
        <button id="goRight" onClick={goRight}>
          <i class="fas fa-chevron-right"></i>
        </button>
        </div>
     );
}

export default Slider;