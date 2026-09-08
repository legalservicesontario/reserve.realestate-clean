# reserve.realestate-clean
Reserve.RealEstate - property listings for Costa Rica (Tamarindo) and Dominican Republic (Cabarete, Sosúa, Puerto Plata). Static site with search, map, property pages, commercial/fractional sections, post-your-property form, and agents.

## Google Maps setup

`map.html` loads the Google Maps JavaScript API at runtime. Define the browser-safe API key before the page loads:

```html
<script>window.GOOGLE_MAPS_API_KEY = "YOUR_RESTRICTED_KEY";</script>
```

Restrict the key in Google Cloud Console by HTTP referrer and enable the Maps JavaScript API. Do not commit an unrestricted key.
