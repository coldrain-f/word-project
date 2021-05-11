function speak(text, opt_prop) {
    if(typeof SpeechSynthesisUtterance === "undefined" || typeof window.speechSynthesis === "undefined") {
        alert("이 브라우저는 음성 합성을 지원하지 않습니다.");
        return;
    }

    window.speechSynthesis.cancel();

    const prop = opt_prop || {};
    const speechMessage = new SpeechSynthesisUtterance();

    speechMessage.rate = prop.rate || 1;
    speechMessage.pitch = prop.pitch || 1;
    speechMessage.lang = prop.lang || "en-US";
    speechMessage.text = text;

    window.speechSynthesis.speak(speechMessage);
}

// const language = "en-US";
const language = "ja-JP";
const text = document.getElementById("search-word");
const speechButton = document.getElementById("speech-button");

speechButton.addEventListener("click", (e) => {
    speak(text.value, {
        rate: 1,
        pitch: 1.2,
        lang: language
    });
});