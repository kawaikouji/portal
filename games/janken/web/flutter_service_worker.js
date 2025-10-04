'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "d21c4aa4293f347d5db80301e7f3782f",
"version.json": "2c57bd5b06f24c5037b8111b57a9be73",
"index.html": "e4455fdf61f2b17dd21508d2820b4a67",
"/": "e4455fdf61f2b17dd21508d2820b4a67",
"main.dart.js": "71c7aed765a30e89ca74471d244f01f6",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "3b8949fd8c7bdc6a0966e309edf26335",
"assets/AssetManifest.json": "e96b1ae44d36b7585eaf4d2f1ae15f2e",
"assets/NOTICES": "be29dcdc9de967ed7b2c5c1cd60e923c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "c2c17162852cd61617e2f49e8bcf95f7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "06119bad36c9e0074f992d309445e46c",
"assets/fonts/MaterialIcons-Regular.otf": "72891ba964989fd591ecda9e43e3ff3c",
"assets/assets/images/g22.png": "44682885c6a307c7727e1190818333f8",
"assets/assets/images/g20.png": "92181639bd8e903bcbdf64010b209911",
"assets/assets/images/g08.png": "1fa3823196b6e6118fe2a365d05a20ee",
"assets/assets/images/g09.png": "8d30e56fa7749b1e0580069726a8c606",
"assets/assets/images/g21.png": "4eea6ac911eea4ba6fb05ad5e4df5d00",
"assets/assets/images/g19.png": "a4d7c7af889388c21e71d92dd1a39375",
"assets/assets/images/g18.png": "e3064a748068a66c8878810a1daaabc3",
"assets/assets/images/choki.png": "8983b0b66c06320d57e8b3c8c2ae55b0",
"assets/assets/images/gu.png": "db35e35f57e5230eeea95046ea1dee0c",
"assets/assets/images/pa2.png": "939a2c5ef473f2327f647fc71a66bdb6",
"assets/assets/images/gu2.png": "fcd458a87abaf27f670ba322c29b7ac6",
"assets/assets/images/pa.png": "71a5483ce1bc0af62496ed2e30dcb786",
"assets/assets/images/choki2.png": "c6550e9fea17a034869a45509e768b0b",
"assets/assets/images/g02.png": "4af056e58dc0f79cddc25dcb04e0bcbb",
"assets/assets/images/g16.png": "670e434f08864e3d4524125879729a7a",
"assets/assets/images/g17.png": "644560c08f0059366fd873d918e159ec",
"assets/assets/images/g03.png": "382442ec20655730419b6961a2d6c664",
"assets/assets/images/g15.png": "290e81f639e5b8755b83ede7ecabbaa2",
"assets/assets/images/g01.png": "4f7b2d9366339ed0846f9dc2fc13b720",
"assets/assets/images/g14.png": "3cbbed2b35efb5b1147824f36c92fd7d",
"assets/assets/images/g10.png": "16dc3145452b9aee5face03f307d3c8c",
"assets/assets/images/g04.png": "228eafb884e36d0793ea32706dd73172",
"assets/assets/images/g11.png": "c04496db4bdaf143005d92b7d4b410b6",
"assets/assets/images/g07.png": "6c723c1b5ea8c86fb231037299edcfee",
"assets/assets/images/g13.png": "d3191fb3065c14a090c46de51fe8b776",
"assets/assets/images/g12.png": "e6c2286e34bc03557dfe3f966b6ec040",
"assets/assets/audio/paa_01.mp3": "ac09e4e72692f14c29853cd8f9bdb54b",
"assets/assets/audio/aikodesho_01.mp3": "635fe15a032610e80b874c43a94fd3e3",
"assets/assets/audio/uge_01.mp3": "5f4e95b45de3d03c35c1195fbbcc56b8",
"assets/assets/audio/se1.mp3": "3fa1b49743f15fa5fbc972843c07cf71",
"assets/assets/audio/choki_01.mp3": "1eac1884fd206661dd861b15a43937e3",
"assets/assets/audio/se2.mp3": "e40530f9a2efd1f61164542e70340ef7",
"assets/assets/audio/guu_01.mp3": "8e4f9a297492f9d1fc7be3d818daeb7b",
"assets/assets/audio/jankenpon_01.mp3": "98c3296f1acdd14a59be398d9aa8f43e",
"assets/assets/audio/yattane_01.mp3": "bbaf7f55772495f497701b298a2698bd",
"assets/assets/privacy.txt": "5da89929d91e83f50585f3628ff52653",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
