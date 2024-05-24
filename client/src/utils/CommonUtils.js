import { useEffect } from "react";
import ToastUtil from "./ToastUtil";

export const useOnClickOutside = (ref, handleClick) => {
    useEffect(() => {
        const listener = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                handleClick(event);
            }
        };

        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);

        return () => {
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
        };
    }, [ref, handleClick]);
};

export const AnimateCounterNumber = (obj, initVal, lastVal, duration) => {
    let startTime = null;

    //get the current timestamp and assign it to the currentTime variable
    let currentTime = Date.now();

    //pass the current timestamp to the step function
    const step = (currentTime) => {

        //if the start time is null, assign the current time to startTime
        if (!startTime) {
            startTime = currentTime;
        }

        //calculate the value to be used in calculating the number to be displayed
        const progress = Math.min((currentTime - startTime) / duration, 1);

        //calculate what to be displayed using the value gotten above
        obj.innerHTML = Math.floor(progress * (lastVal - initVal) + initVal);

        //checking to make sure the counter does not exceed the last value (lastVal)
        if (progress < 1) {
            window.requestAnimationFrame(step);
        } else {
            window.cancelAnimationFrame(window.requestAnimationFrame(step));
        }
    };
    //start animating
    window.requestAnimationFrame(step);
}




export const openInNewTab = url => {
    if (url) {
        window.open(url, '_blank', 'noopener,noreferrer');
    }
};


export const onCopyText = (text, toastSuccess = "Copy success", toastError = "Copy Fail") => {
    try {
        if (window.isSecureContext && navigator.clipboard) {
            navigator.clipboard.writeText(text);
            ToastUtil.success(toastSuccess, text);
        } else {
            this.unsecuredCopyToClipboard(text);
            ToastUtil.success(toastSuccess, text);
        }
    } catch (error) {
        ToastUtil.error(toastError);
    }
}