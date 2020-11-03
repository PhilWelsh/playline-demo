import React from "react";

const LoadingBar = ({loadingValue}) => {
    switch(loadingValue){
        case "loading":
            return <div className="loading-bar"></div>
        case "error":
            return <div className="loading-bar"><p>There has been an error loading this resource.</p></div>
        case "loaded":
            return <img src="/assets/icons/progress.svg" srcSet="/assets/icons/progress@2x.png 2x, /assets/icons/progress@3x.png 3x" alt="loading" />
        default: return null; 
    }
}

  
export default LoadingBar;