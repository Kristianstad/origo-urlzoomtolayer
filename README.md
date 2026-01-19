# origo-urlzoomtolayer
Url zoom to layer plugin for Origo.

Minified and compressed versions of the files are available [here](https://nightly.link/Kristianstad/origo-urlzoomtolayer/workflows/build-compress/main/urlzoomtolayer-compressed-assets.zip).

Needs:
```
const urlParams = new URLSearchParams(window.location.search);
const hashParams = new URLSearchParams(window.location.hash.slice(1));
function getUrlParam(param) {
  return urlParams.get(param) ?? hashParams.get(param);
}
```

Then initialize with:
```
origo.on('load', urlzoomtolayer());
```

Zoomar till lagret angiven i url-parametern zoomToLayer. Lagret måste finnas i kartan och tänds automatiskt. För att zooma till markers sätt zoomToLayer=markerLayer (obs! denna plugin måste läggas efter den/de plugins som skapar markers).

[https://kartor.kristianstad.se/kristianstadskartan/?zoomToLayer=evenemang](https://kartor.kristianstad.se/kristianstadskartan/?zoomToLayer=evenemang)
