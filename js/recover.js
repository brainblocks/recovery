async function recoverWallet() {
    const CIPHERTEXT = document.getElementById("cipher").value;
    const PASSWORD = document.getElementById("password").value;
    const cachedWallet = new Wallet(PASSWORD);
    cachedWallet.lightWallet(true);
    try {
        cachedWallet.load(CIPHERTEXT);
    } catch(err) {
        console.log(err);
        window.alert("Incorrect password.");
        return;
    }
    // display seed to user
    const seed = await cachedWallet.getSeed(PASSWORD);
    document.getElementById("output").innerHTML = `Seed Found! ${ seed }`;
}
