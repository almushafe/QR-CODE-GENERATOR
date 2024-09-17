const qrtext = document.getElementById('qr-text');
const qrbtn = document.getElementById('qr-btn');
const qrimg = document.getElementById('qr-img');
console.log(qrtext, qrbtn, qrimg)

qrbtn.addEventListener('click', () => {
    const inputValue = qrtext.value;
    console.log(inputValue);
    if (!inputValue){
        alert('Please enter a Url');
        return;
    }else{
        qrimg.src = `https://api.qrserver.com/v1/create-qr-code/?data=${inputValue}&size=200x200`
    }
})