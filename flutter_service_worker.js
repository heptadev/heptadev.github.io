'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "favicon.ico": "a4fff305cf3fe7c8b6ccc5d75f89adb4",
"assets/assets/chess.jpg": "9bfe0ab428008db2c22d1b9182ae8332",
"assets/assets/Hepta%2520Horizons.png": "1bf8883ae467f31f7c246a8795c1ee1b",
"assets/assets/FR_CROP.jpg": "e481bcef78c1484ceae70dbb36f284b5",
"assets/assets/instagram-73-48.png": "990e06e378d7f1f91b6b00d6a6c920de",
"assets/assets/hetawhite.png": "c366562d69156f0f558b4d6c1488c4ed",
"assets/assets/icons8-hashnode-48.png": "72431d8bf165ec891ffd283a8b4873cc",
"assets/assets/MAX_CROP.jpg": "e8934a63c37afd0bae067a48bf0c5c36",
"assets/assets/ESM_CROP.jpg": "f70fc78a89fddb773acc1ea1f92d912b",
"assets/assets/opportunities.jpg": "c4723a1e18014ead146a04a80a4c2809",
"assets/assets/pagebg.png": "07731613f11b5172ae8e6f804816706a",
"assets/assets/groupimg.png": "408776972b250c4e456f9e26cfa8bb72",
"assets/assets/WastingerDisplayFreePersonal-MVydr.ttf": "1e0dfd3e3dbb11a480f2077c0fc48a01",
"assets/assets/quant.jpg": "e37e1915f70e6a2fe868aa24b26b92cd",
"assets/assets/linkedin-103-48.png": "2baa6d6da81e402c557fc036850095ae",
"assets/assets/fonts/OpenSans-ExtraBold.ttf": "fb7e3a294cb07a54605a8bb27f0cd528",
"assets/assets/fonts/OpenSans-Regular.ttf": "3ed9575dcc488c3e3a5bd66620bdf5a4",
"assets/assets/heptablack.png": "0a05f4a4a4247e643231e1c80b3d7e24",
"assets/assets/KAY_CROP.jpg": "e4814671a7264551074b17cf7614e49d",
"assets/assets/canvas/pillar%2520right.png": "e55a646208627deaa63b578762c60098",
"assets/assets/canvas/pillar%2520left.png": "5d39a4750ad61460ceab34ac06d24d49",
"assets/assets/canvas/pillar%2520middle.png": "cd504ee967c1d5450416e1de3c6a69d3",
"assets/assets/twitter-200-48.png": "6bb1ec96040209a600900745ed17f0bc",
"assets/assets/github.png": "add631b638f2680caf976d349e2db7e0",
"assets/assets/pieces/chess-bishop-solid-48.png": "c4fa3730f16853c12a1aa60a65b374b5",
"assets/assets/pieces/chess-knight-solid-48.png": "916e2a53780caf913ecf1d9cdabcf867",
"assets/assets/pieces/chess-queen-solid-48.png": "d8bf0d9be1586731b1e6b8a32f6f1f68",
"assets/assets/pieces/king-11-48.png": "85f9d477dba35740434030c7acbb6985",
"assets/assets/groupimage.png": "408776972b250c4e456f9e26cfa8bb72",
"assets/assets/linkedin/eq.jpeg": "ac505f075225b63126399572ad6a45d6",
"assets/assets/linkedin/impactinvest.png": "198a257c802b565f2059f55add6c02a6",
"assets/assets/linkedin/pic001.jpeg": "45002ceaf033f835fa197bed719387e0",
"assets/assets/linkedin/btc.jpeg": "ccfcc149e99b0e9fad71d906412ee904",
"assets/assets/linkedin/tb.jpeg": "d4280c41b5a6d261fae9bfc2ab0e8732",
"assets/assets/linkedin/at.jpeg": "24c605ced31dfb6e3b0bd7528770f588",
"assets/assets/linkedin/can-c100.jpg": "882cd2e81a31e44c622616318ead4d98",
"assets/assets/Line%25203.png": "3b65eb4b3544f0ddc43a08c229208066",
"assets/assets/reddit-65-48.png": "0ca8feaeeb756346b62f94f0d10a86a9",
"assets/FontManifest.json": "2ace449ebc4f27b855c9c1cb8f43bdad",
"assets/AssetManifest.json": "c9d5c5ffe0f772424e6acb3b8acac401",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/NOTICES": "2a775a6ff1ecd0b387625b1169ddeb35",
"main.dart.js": "3615fbebe6c347032153153850b5140b",
"version.json": "289282b4d7c44614f85471fe77b716ac",
"index.html": "fa64f9aae6f42091f20359ff0a10d37e",
"/": "fa64f9aae6f42091f20359ff0a10d37e",
"icons/ms-icon-144x144.png": "a691d39b15b39baaa5642ad130c37dc8",
"icons/apple-icon-180x180.png": "e240a741eac409310942ff608c41af62",
"icons/ms-icon-150x150.png": "681ffdcdcc45dae835fde485b50cf95b",
"icons/android-icon-96x96.png": "2736842d1ecb805c7493e4e3ea90a08e",
"icons/ms-icon-310x310.png": "e1bf2f24d86509bbad0bf9e774434925",
"icons/android-icon-192x192.png": "e184cd8773d7167863c899c9df5321dd",
"icons/heptablack.png": "0a05f4a4a4247e643231e1c80b3d7e24",
"manifest.json": "30282d05c5b33b1797fe19562aef9719"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
