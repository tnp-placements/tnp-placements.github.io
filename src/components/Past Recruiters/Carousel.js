import React from "react";

const Carousel = ({ number, obj }) => {

    var slideTrackClass = "";
    if (number === 1) {
        slideTrackClass = "slideTrack1";
    } else {
        slideTrackClass = "slideTrack2";
    }

    return (
        <div
            className="slideTrack"
            id={slideTrackClass}
            style={
                {
                    // display:"flex", overflow:"hidden", margin:"0 5% 0 5%"
                    // display:"flex",width:"calc(250px*18)"
                }
            }
        >
            {obj.map((objects, i) => (
                <div
                    key={i}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        position: "relative",
                        marginLeft: "10px",
                        transition: "translate 3000ms ease 0ms",
                    }}
                >
                    <img
                        src={objects}
                        className='h-[60px] my-[12px] mx-[30px]'
                        alt="logo"
                    />
                </div>
            ))}
        </div>
    );
};

export default Carousel;
