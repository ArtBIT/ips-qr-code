# IPS QR Code Generator
![Travis CI](https://img.shields.io/travis/artbit/ips-qr-code/master)
![GitHub issues badge](https://img.shields.io/github/issues/ArtBIT/ips-qr-code)
![GitHub forks badge](https://img.shields.io/github/forks/ArtBIT/ips-qr-code)
![GitHub stars badge](https://img.shields.io/github/stars/ArtBIT/ips-qr-code)
![GitHub license badge](https://img.shields.io/github/license/ArtBIT/ips-qr-code)
![Twitter badge](https://img.shields.io/twitter/url?url=https%3A%2F%2Fgithub.com%2FArtBIT%2Fips-qr-code)


### Šta je ovo?
ips-qr-code je jednostavna CLI aplikacija za generisanje IPS QR kodova. [NBS IPS](https://web.archive.org/web/20200929100311/https://www.nbs.rs/sr/ciljevi-i-funkcije/platni-sistem/nbs-operator/ips-nbs/index.html)

---

### Instalacija

#### NPM

    $ npm install -g ips-qr-code
    
#### Yarn

    $ yarn global add ips-qr-code

---

### Primeri korišćenja

#### Web DEMO

Probajte web demo [ovde](https://artbit.github.io/ips-qr-code/)

#### Generiši QR kod kao sliku:

    $ ips-qr-code \
      --naziv-platioca "@artbit" \
      --racun-platioca "123456789012345678" \
      --naziv-primaoca "GitHub Ltd," \
      --racun-primaoca "123456789012345678" \
      --sifra-placanja "221" --iznos "RSD1," \
      --svrha-placanja "Example usage" \
      --to-file example.png
      
![Primer IPS QR koda](/images/example.png)

#### Generiši tekstualni QR kod:

    $ ips-qr-code \
      --naziv-platioca "@artbit" \
      --racun-platioca "123456789012345678" \
      --naziv-primaoca "GitHub Ltd," \
      --racun-primaoca "123456789012345678" \
      --sifra-placanja "221" \
      --iznos "RSD1," \
      --svrha-placanja "Example usage" \
      --to-text
      
<img src="/images/example.terminal.png" width="180" height="200" alt="Primer IPS QR koda" />

#### Generiši data URI koji prikazuje QR kod:

    $ ips-qr-code \
      --naziv-platioca "@artbit" \
      --racun-platioca "123456789012345678" \
      --naziv-primaoca "GitHub Ltd," \
      --racun-primaoca "123456789012345678" \
      --sifra-placanja "221" \
      --iznos "RSD1," \
      --svrha-placanja "Example usage" \
      --to-datauri
      
    $ data:image/png;base64,iVBORw0KGg...SUVORK5CYII=


#### Kao biblioteka

ips-qr-code je napisana kao CLI aplikacija, ali može da se koristi i kao biblioteka:

```js
const generator = require("ips-qr-code");
const qrcode = require("qrcode");
const filename = "test.png";

generator({
    nazivPlatioca: "Marko Markovic",
    svrhaPlacanja: "Uplata po racunu",
    nazivPrimaoca: "EPS Snabdevanje 11000 Beograd",
    sifraPlacanja: "221",
    iznos: "RSD1000,00",
    racunPrimaoca: "845000000014284968",
    kod: "PR",
    verzija: "01",
    kod: 1,
})
.then(ipsString => qrcode.toFile(filename, ipsString))
.catch(error => console.error(error));

// sto je ekvivalentno sledecem, malo kriptičnijem API-ju, jer koristi
// skraćene oblike opcija u obliku u kom su i same upisane u IPS QR kod:
generator({
    p: "Marko Markovic",
    s: "Uplata po racunu",
    n: "EPS Snabdevanje 11000 Beograd",
    sf: "221",
    i: "RSD1000,00",
    o: "123456789012345611",
    r: "845000000014284968",
    k: "PR",
    v: "01",
    c: 1,
})
.then(ipsString => qrcode.toFile(filename, ipsString))
.catch(error => console.error(error));
```

---

### Opcije

Detaljni prikaz svih opcija možete pogledati na [wiki stranici](https://github.com/ArtBIT/ips-qr-code/wiki/Detaljan-prikaz-parametara).


# IPS QR Code Format

Detaljni prikaz IPS QR Code formata možete pogledati na [wiki stranici](https://github.com/ArtBIT/ips-qr-code/wiki/IPS-QR-Code-Format).

# Licenca
MIT
