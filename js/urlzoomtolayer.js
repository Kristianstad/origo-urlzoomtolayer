function urlzoomtolayer() {
	const zoomToLayer = getUrlParam('zoomToLayer');
	if (zoomToLayer != null)
	{
		let layer;
		if (!(layer=origo.api().getLayer(zoomToLayer)))
		{
			console.error('zoomToLayer ' + zoomToLayer + ' does not exist!');
		}
		else
		{
			function zoomLoop(zoomMaxAttempts, zoomAttempt = 1 ) {
				setTimeout(() => {
					if (zoomAttempt <= zoomMaxAttempts) {
						const extent = layer.getExtent() ?? layer.getSource().getExtent();
						if (extent && Array.isArray(extent) && extent.length === 4 && extent.every(coord => Number.isFinite(coord))) {
							/*console.log('Valid extent:', extent);*/
							origo.api().zoomToExtent(Origo.ol.geom.Polygon.fromExtent(extent));
						} else {
							zoomLoop(zoomMaxAttempts, zoomAttempt + 1);
						}
					} else {
						console.error('zoomToLayer: Extent not available after max attempts');
					}
				}, 100);
			}

			origo.api().getMap().getView().setZoom(0);
			layer.setVisible(true);	
			zoomLoop(100);
		}
	}
}
