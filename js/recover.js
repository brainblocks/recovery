function recoverWallet() {
    const CIPHERTEXT = document.getElementById("cipher").value;
    const PASSWORD = document.getElementById("password").value;
    const cachedWallet = new Wallet(PASSWORD);
    cachedWallet.lightWallet(true);
    cachedWallet.load(CIPHERTEXT);
    try {
        const seed = cachedWallet.getSeed(PASSWORD);
        document.getElementById("output").innerHTML = `Seed Found! ${ seed }`;
    } catch(err) {
        console.log(err);
        alert("Failed to decrypt using password.");
    }
}
