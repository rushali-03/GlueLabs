document.getElementById("weigBtn").addEventListener("click", () => {
    let kgs=document.getElementById("kgsInput").value;
    document.getElementById("lbsOutput").innerText=kgs*2.2046;
})

document.getElementById("mesrBtn").addEventListener("click", () => {
    let ft=document.getElementById("feetInput").value;
    document.getElementById("cmsOutput").innerText=ft*30.48;
})

document.getElementById("currBtn").addEventListener("click", () => {
    let usd=document.getElementById("usdInput").value;
    document.getElementById("inrOutput").innerText=usd*76.00;
})

document.getElementById("presBtn").addEventListener("click", () => {
    let pas=document.getElementById("pascalInput").value;
    document.getElementById("torrOutput").innerText=pas*0.0075;
})