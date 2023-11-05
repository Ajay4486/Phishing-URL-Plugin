chrome.extension.onRequest.addListener(function(prediction){
    if (prediction == 1){
        alert("⚠️ WARNING ⚠️ : This site may be a phishing site , Proceed with EXTREME caution! ");
    }
    else if (prediction == -1){
        alert("No phishing detected");
    }
});
