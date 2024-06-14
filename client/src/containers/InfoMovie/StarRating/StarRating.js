import React, { useState } from 'react';
import './StarRating.scss';
import IMG_STAR_OFF from "../../../assets/imgs/info_movie/star_off.png"
import IMG_STAR_ON from "../../../assets/imgs/info_movie/star_on.png"
const StarRating = ({ initialScore = 0, totalStars = 10 }) => {
    const [score, setScore] = useState(initialScore);
    const [hover, setHover] = useState(null);


    const renderTitleStart = (ratingValue) => {
        let title = ""
        let key = ratingValue ? ratingValue : hover
        switch (key) {
            case 1:
                title = "Dở tệ"
                break;
            case 2:
                title = "Dở"
                break;
            case 3:
                title = "Không hay"
                break;
            case 4:
                title = "Không hay lắm"
                break;
            case 5:
                title = "Bình thường"
                break;
            case 6:
                title = "Xem được"
                break;
            case 7:
                title = "Có vẻ hay"
                break;
            case 8:
                title = "Hay"
                break;
            case 9:
                title = "Rất hay"
                break;
            case 10:
                title = "Tuyệt hay"
                break;
            default:
                break;
        }
        return title
    }

    return (
        <div className="star-rating">
            <div className="star-rating-content">
                <div className="list-start">
                    {[...Array(totalStars)].map((star, index) => {
                        const ratingValue = index + 1;

                        return (
                            <img
                                key={index}
                                src={ratingValue <= (hover || score) ? IMG_STAR_ON : IMG_STAR_OFF}
                                alt={ratingValue}
                                // title={ratingValue <= 4 ? "Dở tệ" : ratingValue <= 8 ? "Hay" : "Tuyệt hay"}
                                title={renderTitleStart(ratingValue)}
                                className="star"
                                onClick={() => setScore(ratingValue)}
                                onMouseEnter={() => setHover(ratingValue)}
                                onMouseLeave={() => setHover(null)}
                            />
                        );
                    })}
                </div>
                <div className="show-title">
                    {renderTitleStart()}
                </div>
            </div>
        </div>
    );
};

export default StarRating;
